var searchfield = document.getElementById('search-input');
var searchbutton = document.getElementById('search-button');

searchfield.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		searchbutton.click();
	}
});

searchbutton.onclick = function () {
	window.location.replace("/search/?search=" + searchfield.value);
	return false;
};
