var documents = data;
const RESULTS = document.getElementById('results');

var idx = lunr(function () {
  this.ref('href');
  this.field('content');
  

  documents.forEach(function (doc) {
    this.add(doc);
  }, this);
});


console.log(idx.search('this is a style of journey'));
//RESULTS.innerhtml = idx.search('this is a style of journey');
document.getElementById('results').innerHTMl = "hi"; 
