document.getElementById('searchButton').onclick = function () {
	window.location.href = window.location.hostname + "/practice-library/search/?search=" + document.getElementById("searchInput").value;
	return false;
};
