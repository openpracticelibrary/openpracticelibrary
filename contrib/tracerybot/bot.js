var svg2png = require('svg2png');
var async = require('async');

var _ = require('underscore');
var tracery = require('tracery-grammar');
var request = require("sync-request");
var sizeOf = require('image-size');
var fs = require('fs');
var yaml = require('js-yaml');

// Load a practice from the src directory.
try {
  var files = fs.readdirSync('../../src/pages/practice/')
  /* now files is an Array of the name of the files in the folder and you can pick a random name inside of that array */
  var practice = files[Math.floor(Math.random() * files.length)] 
} catch (err) {
  console.log('Could not select a practice.');
  process.exit(1);
}
console.log('Going to post about: ' + practice);

// Grab the data. These practices are a YAML template with content attached.
// So we load the file, extract the YAML part, then parse that.
try {
  var data = fs.readFileSync('../../src/pages/practice/' + practice, 'utf8');
  var pos = data.indexOf('---', 4)
  var doc = yaml.load(data.substring(0, pos));
} catch (e) {
  console.log('ERR', e);
}

// Generate some helpful content for our tweet.
// A link to the practice on the website.
var link = 'https://openpracticelibrary.com/practice/' + practice.substring(0, practice.indexOf('.')) + '/';
// A description. Only use the first sentence, which is *probably* safe regarding tweet size limits.
var description = doc.whatIs.substring(0, doc.whatIs.indexOf('.'));
// Turn all tags into a list of hash tags.
var tags = '#' + doc.tags.join(' #');
// Generate a uri to the practice image in github.
var image = 'https://raw.githubusercontent.com/openpracticelibrary/openpracticelibrary/master/static' + doc.icon;

var options = {
  headers: {
    'X-Twitter-Bot': 'TraceryBot/v21',
    'Content-Type':  'application/x-www-form-urlencoded'
  }
};

// Get the image, which gives us its dimensions. We need those for the inline SVG in the tweet template.
var response = request('GET', image, options);
var buffer = response.getBody();
var dimensions = sizeOf(buffer);

console.log('Going to post a tweet');

// This variable contains the whole tweet. The end is an in-line svg which contains a background bitmap whose href is the icon image on github.
// That gets us around trying to manually upload media to Twitter. Nice.
var rawGrammar = { "origin": [ doc.title + ((typeof(doc.subtitle) != "undefined") ? " - " + doc.subtitle : "") + "\n\n" + description + " " + link + " " + tags + " {svg <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"" + dimensions.width + "\" height=\"" + dimensions.height + "\" ><image width=\"" + dimensions.width + "\" height=\"" + dimensions.height + "\" xlink:href=\"" + image + "\" /></svg>}"] };

// If you wanted to debug the tweet.
// console.log('TWEET', rawGrammar);

// Evetything below here is standard TraceryBot.
var generate_svg = function(svg_text, T, cb)
{
    svg2png(new Buffer(svg_text))
    .then(data => uploadMedia(data.toString('base64'), T, cb))
    .catch(e => cb(e));

}

var uploadMedia = function(b64data, T, cb)
{
  T.post('media/upload', { media_data: b64data }, function (err, data, response) {
    if (err)
    {
      cb(err);
    }
    else
    {
      cb(null, data.media_id_string);
    }
  });
}

var matchBrackets = function(text) {
  // simple utility function
  function reverseString(s) {
    return s.split('').reverse().join('');
  }

  // this is an inverstion of the natural order for this RegEx:
  var bracketsRe = /(\}(?!\\)(.+?)\{(?!\\))/g;

  text = reverseString(text);
  var matches = text.match(bracketsRe);
  if(matches === null) {
    return null;
  }
  else {
    return matches.map(reverseString).reverse();
  }
}

function removeBrackets (text) {
  // simple utility function
  var reverseString = function(s) {
    return s.split('').reverse().join('');
  }

  // this is an inverstion of the natural order for this RegEx:
  var bracketsRe = /(\}(?!\\)(.+?)\{(?!\\))/g;

  text = reverseString(text);
  return reverseString(text.replace(bracketsRe, ""));
}

var recurse_retry = function(origin, tries_remaining, processedGrammar, T, result, in_reply_to)
{

  if (tries_remaining <= 0)
  {
    return;
  }
  else
  {
    try
    {
      var tweet = processedGrammar.flatten(origin);
      console.log(tweet);

      var tweet_without_image = removeBrackets(tweet);
      var media_tags = matchBrackets(tweet);
      if (media_tags)
      {
        async.parallel(media_tags.map(function(match){
          if (match.indexOf("svg ") === 1)
          {
            return _.partial(generate_svg, match.substr(5,match.length - 6), T);
          }
          else if (match.indexOf("img ") === 1)
          {
            return _.partial(fetch_img, match.substr(5), T);
          }
          else
          {
            return function(cb){
              cb("error {" + match.substr(1,4) + "... not recognized");
            }
          }
        }),
        function(err, results)
        {
          if (err)
          {
            console.error("error generating SVG for " + result["screen_name"]);
            console.error(err);
            recurse_retry(origin, tries_remaining - 1, processedGrammar, T, result, in_reply_to);
            return;
          }
          var params = {};
          if (typeof in_reply_to === 'undefined')
          {
              params = { status: tweet_without_image, media_ids: results };
          }
          else
          {
            var screen_name = in_reply_to["user"]["screen_name"];
            params = {status: "@" + screen_name + " " + tweet_without_image, media_ids: results, in_reply_to_status_id:in_reply_to["id_str"]}
          }
          T.post('statuses/update', params, function(err, data, response) {
            if (err)
            {
                if (err["code"] == 186)
                {
                  //console.log("Tweet (\"" + tweet + "\") over 140 characters - retrying " + (tries_remaining - 1) + " more times.");
                  recurse_retry(origin, tries_remaining - 1, processedGrammar, T, result, in_reply_to);
                }
                else if (err['code'] == 187)
                {
                  //console.log("Tweet (\"" + tweet + "\") a duplicate - retrying " + (tries_remaining - 1) + " more times.");
                  recurse_retry(origin, tries_remaining - 1, processedGrammar, T, result, in_reply_to);
                }

                else if (err['code'] == 89)  
                {
                  console.log("Account " + result["screen_name"] + " permissions are invalid");
                }
                else if (err['code'] == 226)  
                {
                  console.log("Account " + result["screen_name"] + " has been flagged as a bot");
                }
                else if (err['statusCode'] == 404)
                {
                  //unknown error
                }
                else
                {
                  console.error("twitter returned error " + err['code'] + "for " + result["screen_name"] + " " + JSON.stringify(err, null, 2));  
                  console.log("twitter returned error " + err['code'] + "for " + result["screen_name"]);  
                }
            }

          });
        });

      }
      else
      {

          var params = {};
        if (typeof in_reply_to === 'undefined')
        {
            params = { status: tweet};
        }
        else
        {
          var screen_name = in_reply_to["user"]["screen_name"];
          params = {status: "@" + screen_name + " " + tweet, in_reply_to_status_id:in_reply_to["id_str"]}
        }
        //console.log("trying to tweet " + tweet + "for " + result["screen_name"]);
        T.post('statuses/update', params, function(err, data, response) {
          if (err)
          {
              if (err["code"] == 186)
              {
                //console.log("Tweet (\"" + tweet + "\") over 140 characters - retrying " + (tries_remaining - 1) + " more times.");
                recurse_retry(origin, tries_remaining - 1, processedGrammar, T, result, in_reply_to);
              }
              else if (err['code'] == 187)
              {
                //console.log("Tweet (\"" + tweet + "\") a duplicate - retrying " + (tries_remaining - 1) + " more times.");
                recurse_retry(origin, tries_remaining - 1, processedGrammar, T, result, in_reply_to);
              }

              else if (err['code'] == 89)  
              {
                console.log("Account " + result["screen_name"] + " permissions are invalid");
              }
              else if (err['code'] == 226)  
              {
                console.log("Account " + result["screen_name"] + " has been flagged as a bot");
              }
              else if (err['statusCode'] == 404)
              {
                //unknown error
              }
              else
              {
                console.error("twitter returned error " + err['code'] + "for " + result["screen_name"] + " " + JSON.stringify(err, null, 2));  
                console.log("twitter returned error " + err['code'] + "for " + result["screen_name"]);  
              }
          }

        });
      }
    }
    catch (e)
    {
      if (tries_remaining <= 4)
      {
        console.error("error generating tweet for " + result["screen_name"] + " (retrying)\nerror: " + e.stack);
      }
      recurse_retry(origin, tries_remaining - 1, processedGrammar, T, result, in_reply_to);
    }
  }
};


var processedGrammar = tracery.createGrammar(rawGrammar);

processedGrammar.addModifiers(tracery.baseEngModifiers); 

// var tweet = processedGrammar.flatten("#origin#");


var Twit = require('twit');

var T = new Twit(
{
    consumer_key:         process.env.TWITTER_CONSUMER_KEY
  , consumer_secret:      process.env.TWITTER_CONSUMER_SECRET
  , access_token:         process.env.TWITTER_ACCESS_TOKEN
  , access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
}
);

// console.log(T);

recurse_retry("#origin#", 5, processedGrammar, T);

// T.post('statuses/update', { status: tweet }, function(err, data, response) {
//   console.log(err)
//   // console.log(data)
//   // console.log(response)
// })
