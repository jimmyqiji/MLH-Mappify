let cheerio = require('cheerio');
let jsonframe = require('jsonframe-cheerio');

document.addEventListener('DOMContentLoaded', function() {
  	var mappifyButton = document.getElementById('btnMappify');
  	mappifyButton.addEventListener('click', function() {
		scrape();
  	})
});

function scrape() {
	let $ = cheerio.load('https://mlh.io/seasons/na-2019/events'); // tentative, change later to current url
	jsonframe($); // initializes the plugin


	var frame = {
		"hackathons": {           
			"_s": ".event .event-wrapper .event-link",   
			"_d": [{
				"name": {
					 "_s": ".inner [itemprop=name]",
					 "_a": "title"
				},
				"url": {
					"_s": "[itemprop=url]",
					"_a": "href"
				},
				"logo": {
					"_s": ".inner .event-logo img",
					"_a": "src"
				},
				"duration": {
					"_s": ".inner",
					"_d": [{
						"start-date": {
							"_s": "[itemprop=startDate]",
							"_a": "content"
						},
						"end-date": {
							"_s": "[itemprop=endDate]",
							"_a": "content"
						}
					}]
				},
				"location": {
					"_s": ".inner [itemprop=address]",
					"_d": [{
						"province": "[itemprop=addressRegion]",         
						"city": "[itemprop=addressLocality]"
					}]
				}
			}]
		}

	};

	var companiesList = $('seasons-events .container .row').scrape(frame);
	List = $('.list.items').scrape(frame);
	alert(companiesList);
	console.log(companiesList);
}