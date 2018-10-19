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
	window.history.pushState(null, null, "/search/?search=" + searchfield.value);
	runQuery(searchfield.value);
};

window.addEventListener('popstate', function() {
	this.window.location.reload();
});

const runQuery = function (searchTerm) {
	var cleanedResults = "";

	let RESULTS = document.getElementById("results-wrapper");
	if (RESULTS === null ){
		console.info("INFO: ", "Results page not set "+ location.href)
		location.replace(location.href);
	}
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
	} else {
		cleanedResults = "No pages found for \"" + searchTerm + "\". <br/> Please try another search, or <a style='text-decoration: underline;' href='https://github.com/openpracticelibrary/openpracticelibrary/issues/new'>let us know</a> if something is missing.";
	}
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
	const searchTerm = new URL(window.location.href).searchParams.get('search')
	if (searchTerm) {
		searchfield.placeholder = searchTerm;
		runQuery(searchTerm);	
	}
}());