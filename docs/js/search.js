let url = new URL(window.location.href);
var searchTerm = url.searchParams.get('search');

var cleanedResults = "<li class='list-item'><article><header class='list-item-header'><h3 class='list-item-title'>";
	

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
	cleanedResults += "<li class='list-item'><article><header class='list-item-header'><h3 class='list-item-title'><a href='https://" + window.location.hostname + "/practices/" +  initialResults[i].ref + "'>" + initialResults[i].ref + "</a></li></article></header></h3></header></article></li>";
}

cleanedResults += "</div>";

	
RESULTS.innerHTML = cleanedResults;

