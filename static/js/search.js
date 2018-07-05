var documents = data;
var cleanedResults = "<div class='results'>";

var RESULTS = document.getElementById("results-wrapper");


var idx = lunr(function () {
  this.ref('href')
  this.field('content')

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
})

var initialResults = idx.search('agile');

for (var i = 0; i < initialResults.length; i++) {
	console.log(initialResults[i].ref);
	cleanedResults += "<p> https://rht-labs.github.io/practice-library/practices/" +  initialResults[i].ref + "</p>";
}
cleanedResults += "</div>";


RESULTS.innerHTML = cleanedResults;
