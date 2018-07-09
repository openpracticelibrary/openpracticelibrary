var searchfield = document.getElementById('searchInput');
var searchbutton = document.getElementById('searchButton');

searchfield.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		searchbutton.click();
	}
});

searchbutton.onclick = function () {
	window.location.replace("/practice-library/search/?search=" + searchfield.value);
	return false;
};
