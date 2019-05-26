var cheerio = require('cheerio');
var jsonframe = require('jsonframe-cheerio');
var request = require('request');

scrape()
.then(function(hackathonList) {
    // console.log("print in .then");
    // console.log(hackathonList);
    if (hackathonList != "Failed") {
        mappify(hackathonList);
    }
})

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
                                "_s": ".event-wrapper .event-link .event-location",
                                "_d": [{
                                    "province": "[itemprop=state]",        
                                    "city": "[itemprop=city]"
                                }]
                            }
                        }]
                    }
                };
                
                var hackathonList;

                if(hackathonList = $('body').scrape(frame, { string: true })){
                    resolve(hackathonList);
                }
                else {
                    reject("Failed");
                }
            }
            else {
                console.log(error);
            }
        });
    })
    
}

function mappify(hackathonList) {
    hackathonJson = JSON.parse(hackathonList);
    console.log(hackathonJson);
    var province = hackathonJson.hackathons[0].location[0].province;
    var city = hackathonJson.hackathons[0].location[0].city;
    console.log(province);
    console.log(city);
}

$('head').append("<style> html { overflow-y: hidden; } </style>");
$('body > div:nth-child(1)').addClass("old-site");
$('head').append("<style> .old-site { max-height: 77px; } </style>");
$('body > div:nth-child(1) > div:nth-child(6) > div:nth-child(1)').remove();
$('body .footer').remove();

var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var mapheight = h - 50;
var mapstyle = '<style type="text/css"> #mapid { position: fixed; width:100%; height:' + mapheight.toString() + 'px; bottom: 0px; right: 0; z-index: 50;} </style>';
var sideBarStyle = '<style> .main-side-bar { position: absolute; left: 0px; bottom: 0px; width: 20%; height: ' + mapheight.toString() + 'px; overflow-y: auto; padding-left: 40px; padding-top: 60px; padding-right: 40px; z-index: 99; min-width: 320px; background-color: white;} </style>';
$('body .container').addClass("main-side-bar");
$('head').append(sideBarStyle);

$('body .event').removeClass("col-lg-3 col-md-4 col-sm-6");
$('html').attr('style','background-color:rgba(0, 0, 0, 0);');
$('body .btn-yellow').remove();
$('body .btn-blue').remove();
$('head').append('<style> .old-layout { background: white; } </style>');

$('head').promise().done(function() {
    $('body').append('<div id="mapid"></div>');
    // using width:100 and height:100 together fixed the 0 height problem
    // $('head').append('<style type="text/css"> #mapid { position: relative; width:100%; height:100%; top: 0; left: 0; z-index: 50;} </style>');
    $('head').append(mapstyle);
    $('head').append("<script>var map = L.map('mapid').setView([43.482670, -80.250168], 10);</script>");
    $('head').append("<script>L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', { attribution: 'Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>', maxZoom: 18, id: 'mapbox.streets', accessToken: 'pk.eyJ1IjoicWl2YWxyeSIsImEiOiJjampnNTBhY2s1NHRxM3BvZ2U1eDN3anQyIn0.qpmZ6Dv3v0lAjWVhGEgvig'}).addTo(map);</script>");
    $('head').append("<script>map.zoomControl.setPosition('topright');</script>");
});


