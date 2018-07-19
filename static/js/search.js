(function() {
	var url = new URL(window.location.href);
	var searchTerm = url.searchParams.get('search');

	var cleanedResults = "";

	var RESULTS = document.getElementById("results-wrapper");


	var idx = lunr(function () {
	  this.ref('href')
	  this.field('content')

	  data.forEach(function (doc) {
	    this.add(doc)
	}, this)
	})

	var initialResults = idx.search(searchTerm);

	if (initialResults.length != 0) {
		for (var i = 0; i < initialResults.length; i++) {
			var res = initialResults[i].ref;
			res = res.replace(/-/g, " ").replace(/([^a-z]|^)([a-z])(?=[a-z]{2})/g, function(_, g1, g2) { return g1 + g2.toUpperCase();});
			cleanedResults += "<li class='list-item'><article><header class='list-item-header'><h3 class='list-item-title'><a href='" + window.location.origin + "/practice-library/practices/" +  initialResults[i].ref + "'>" + res + "</a></li></article></header></h3></header></article></li>";
		}
	}
	else {
		cleanedResults = "No pages found for \"" + searchTerm + "\". <br/> Please try another search, or let us know if something is missing.";
	}




	RESULTS.innerHTML = cleanedResults;
})();
