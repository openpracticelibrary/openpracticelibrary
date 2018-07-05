let url = new URL(window.location.href);
var searchTerm = url.searchParams.get('search');
console.log(searchTerm);

var cleanedResults = "<div class='results'>";
	
var RESULTS = document.getElementById("results-wrapper");
	

var idx = lunr(function () {
  this.ref('href')
  this.field('content')

  data.forEach(function (doc) {
    this.add(doc)
  }, this)
})

var initialResults = idx.search(searchTerm);

for (var i = 0; i < initialResults.length; i++) {
	console.log(initialResults[i].ref);
	cleanedResults += "<a href='https://rht-labs.github.io/practice-library/practices/" +  initialResults[i].ref + "'>" + initialResults[i].ref + "</a><br />";
}

cleanedResults += "</div>";

	
RESULTS.innerHTML = cleanedResults;

