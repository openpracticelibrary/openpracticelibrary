document.getElementById('searchButton').onclick = function () {
	window.location = "https://" + window.location.hostname + "/practice-library/search/?search=" + document.getElementById("searchInput").value;
};
