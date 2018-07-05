document.getElementById('searchButton').onclick = function () {
	location.href = window.location.href + "/search.html?search=" + document.getElementById("searchInput").value;
};
