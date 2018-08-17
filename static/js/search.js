// isolate scope from window please!
(function(w) {
	w.OPL = {
		idx: {},
		data
	};
})(window);


const searchfield = document.getElementById('search-input');
const searchbutton = document.getElementById('search-button');

searchfield.addEventListener("keyup", function (event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		searchbutton.click();
	}
});

searchbutton.onclick = function () {
	window.history.replaceState(null, null, "/search/?search=" + searchfield.value);
	runQuery(searchfield.value);
};

const runQuery = function (searchTerm) {
	// var url = new URL(window.location.href);
	// var searchTerm = url.searchParams.get('search');

	var cleanedResults = "";

	var RESULTS = document.getElementById("results-wrapper");

	var initialResults = OPL.idx.search(searchTerm);

	if (initialResults.length != 0) {
		for (var i = 0; i < initialResults.length; i++) {
			var res = initialResults[i].ref;
			res = res.replace(/-/g, " ").replace(/([^a-z]|^)([a-z])(?=[a-z]{2})/g, function (_, g1, g2) {
				return g1 + g2.toUpperCase();
			});
			if (res.includes('Page')) {
				initialResults[i].ref = (initialResults[i].ref.replace(/page\//g, ""));
			}
			res = res.replace(/[^\/]*/, "").replace(/\//g, "");
			// console.log(initialResults[i].ref )
			cleanedResults += "<li><a href='" + window.location.origin + "/" + initialResults[i].ref.replace(/practices/, "/practice/") + "' id='result'>" + res + "</a></li>";
		}
		console.info("CLEAN 1 -", cleanedResults)
		// debugger
	} else {
		cleanedResults = "No pages found for \"" + searchTerm + "\". <br/> Please try another search, or <a style='text-decoration: underline;' href='https://github.com/openpracticelibrary/openpracticelibrary/issues/new'>let us know</a> if something is missing.";
	}
	// debugger;
	console.info("CLEAN 2 -", cleanedResults)
	RESULTS.innerHTML = cleanedResults;
};

(function processLunrDataset(){
	console.info("INFO: ", "Building lunr index from search JSON")
	OPL['idx'] = lunr(function () {
		this.ref('href')
		this.field('content')
		if (OPL.data && OPL.data.length > 0) {
			data.forEach(function (doc) {
				this.add(doc)
			}, this)
		} else {
			console.error("Error: ", "No search index found - search not built")
		}
	})
	
	// If query params set on url; load results
	if (new URL(window.location.href).searchParams.get('search')) {
		runQuery(new URL(window.location.href).searchParams.get('search'));	
	}
}());