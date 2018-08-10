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
			if (res.includes('Page')) {
				initialResults[i].ref = (initialResults[i].ref.replace(/page\//g, ""));
			}
			res = res.replace(/[^\/]*/, "").replace(/\//g, "");
			console.log(initialResults[i].ref )
			cleanedResults += "<li><a href='" + window.location.origin + "/" +  initialResults[i].ref.replace(/practices/, "/practice/") + "' id='result'>" + res + "</a></li>";
		}
	}
	else {
		cleanedResults = "No pages found for \"" + searchTerm + "\". <br/> Please try another search, or <a style='text-decoration: underline;' href='https://github.com/openpracticelibrary/openpracticelibrary/issues/new'>let us know</a> if something is missing.";
	}

	RESULTS.innerHTML = cleanedResults;
})();
