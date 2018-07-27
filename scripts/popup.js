document.addEventListener('DOMContentLoaded', function() {
  	var mappifyButton = document.getElementById('btnMappify');
  	mappifyButton.addEventListener('click', function() {
		
  	})
}

chrome.storage.local.get("mlh", function(data) {
  	if(data.mlh){
    	chrome.browserAction.setPopup({popup: "../src/popup_success.html"});
	}
	else{
		chrome.browserAction.setPopup({popup: "../src/popup_failure.html"});
	}
	else);

function scrape() {
	let cheerio = require('cheerio');
	let jsonframe = require('jsonframe-cheerio');


	let $ = cheerio.load('https://mlh.io/seasons/na-2019/events');
	jsonframe($); // initializes the plugin


	var frame = {
		"hackathons": {           
			"selector": ".event .event-wrapper .event-link",   
			"data": [{
				"name": {
					 "selector": "[itemprop=url]",
					 "attr": "title"
				},
				"url": {
					"selector": "[itemprop=url]",
					"attr": "href"
				},
				"logo": {
					"selector": ".inner .event-logo img",
					"attr": "src"
				},
				"duration": {
					"selector": ".inner"
					"data": {
						"start-date": "[itemprop=startDate]@content",
						"end-date": "[itemprop=endDate]@content"
					}
				},
				"location": {
					"selector": ".inner [itemprop=address]",
					"data": {
						"province": "[itemprop=addressRegion]",         
						"city": "[itemprop=addressLocality]"
					}
				}
			}]
		}

	};

	var companiesList = $('.container.feature.row').scrape(frame);
	List = $('.list.items').scrape(frame);
	console.log(companiesList);
}