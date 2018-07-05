document.getElementById('searchButton').onclick = function () {
	location.href = window.location.href + "/search/?search=" + document.getElementById("searchInput").value;
};
