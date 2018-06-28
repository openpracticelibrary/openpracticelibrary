function log(event, data) {
	/* TEMP holds the html contained by the div with the id results on the main index page
	 * I am going to use this div to display the results of my research without redirecting
	 * to a new page */
	const TEMP = document.getElementById("results")
	/* this prevents the default behavior caused by clicking the search button, in this case
	 * preventing the page from refreshing */
	event.preventDefault()
	/* the follow line declares some variables that I will be using */
	var i, key, results;
	/* this retrieves the data from the search field */
	var searchTerm = document.getElementById('searchTerm').value
	/* this results variable is the string that will contain the results, the html tags within
	 * it are for formatting, so that the results look consistent with the website */
	results = '<div class="list-container"><ul class="list">'
	/* the first for loop loops through each object in the data and the second for loop loops
	 * through each key within the json object*/
	for (i in data) {
		for(key in data[i]) {
			/* the first if statements checks to see if the value mapped to the key 
			 * contains the search term and the second if statement ensures that the 
			 * resulting link has not already been added to our search*/
			if (data[i][key].includes(searchTerm)) {
				/* the regular expression is to get rid of quotes that are present
				 * on some titles */
				if (results.includes(data[i].title.replace(/['"]+/g, '')) == false) {
					/* this line just adds the search result to our list */
					results += '<li class="list-item"><article><header class="list-item-header"><h3 class="list-item-title"> <a href=https://rht-labs.github.io/practice-library/' + data[i].url + '>' + data[i].title.replace(/['"]+/g, '') + '</a></h3></header></article></li> '
				}
			}
		}
	}

	/* closing up the tags opened before the for loops */
	results += '</ul></div>'
	
	/* setting the content of the tag grabbed earlier to the results of the search */
	TEMP.innerHTML = results
}
