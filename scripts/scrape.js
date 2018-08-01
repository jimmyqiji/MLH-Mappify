var cheerio = require('cheerio');
var jsonframe = require('jsonframe-cheerio');
var request = require('request');

document.addEventListener('DOMContentLoaded', function() {
  	var mappifyButton = document.getElementById('btnMappify');
  	mappifyButton.addEventListener('click', function() {
  		// var hackathonList = [];
		// hackathonList = scrape()
		scrape()
		.then(function(hackathonList) {
			console.log("print in .then");
			console.log(hackathonList);
			if (hackathonList != "Failed") {
				mappify(hackathonList);
			}
		})
  	})
});

function scrape() {
	return new Promise(function(resolve, reject) {
		request('https://mlh.io/seasons/na-2019/events', function (error, response, body) { // tentative, change later to current url
			if (!error && response.statusCode == 200) {
				// console.log(body);
				var $ = cheerio.load(body); 
				jsonframe($); // initializes the plugin

				var frame = {
					"hackathons": {
						"_s": ".event",
						"_d": [{
							"name": "[itemprop=name]",
							"url": "[itemprop=url] @ href",
							"logo": ".event-logo img @ src",
							"duration": {
								"_s": ".event-wrapper .event-link .inner",
								"_d": [{
									"start-date": "[itemprop=startDate] @ content",
									"end-date": "[itemprop=endDate] @ content"
								}]
							},
							"location": {
								"_s": ".event-wrapper .event-link .inner [itemprop=address]",
								"_d": [{
									"province": "span[itemprop=addressRegion]",         
									"city": "[itemprop=addressLocality]"
								}]
							}
						}]
					}

				};
				
				var hackathonList = [];

				if(hackathonList = $('body').scrape(frame, { string: true })){
					resolve(hackathonList);
				}
				else {
					reject("Failed");
				}
				
				console.log("After resolve reject print:")
				console.log(hackathonList);
				// return hackathonList;
				
			}
			else {
				console.log(error);
			}
		});
	})
	
}

function mappify(hackathonList) {
	// $('head').append(leaflet);
	// $('body').append('<p>appended</p>');
	console.log("in mappify");
	console.log(hackathonList);
	chrome.tabs.executeScript({
	    file: './scripts/inject.js'
	  }); 
}