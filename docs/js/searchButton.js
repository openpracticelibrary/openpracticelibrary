document.getElementById('searchButton').onclick = function () {
	window.location.replace("/practice-library/search/?search=" + document.getElementById("searchInput").value);
	return false;
};
