// var script = document.createElement("script"); // Make a script DOM node for jquery
// script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
// document.head.appendChild(script);

// leaflet
// $('head').prepend('<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.3/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin=""/>');

// <script src="https://unpkg.com/leaflet@1.3.3/dist/leaflet.js" integrity="sha512-tAGcCfR4Sc5ZP5ZoVz0quoZDYX5aCtEm/eu1KhSLj2c9eFrylXZknQYmxUssFaVJKvvc0dJQixhGjG2yXWiV9Q==" crossorigin=""></script>');
// var leafletjs = document.createElement("script");
// leafletjs.src = "https://unpkg.com/leaflet@1.3.3/dist/leaflet.js";
// leafletjs.async = false;
// document.head.appendChild(leafletjs);

// map
// $('body > div:nth-child(1)').addClass("main-side-bar");
$('body .footer').remove();
$('body .container').addClass("main-side-bar");
$('head').append("<style> .main-side-bar { position: absolute; left: 0px; top: 0px; width: 300px; z-index: 99; } </style>");
// $('.mlh-navigation .navbar-nav').addClass("main-side-bar");
// $('head').append("<style> .nav {padding-left: 0;list-style: none;} </style>");
$('body .event').removeClass("col-lg-3 col-md-4 col-sm-6");
// $('head').append("<style>body .event { display: block; }");
$('html').attr('style','background-color:rgba(0, 0, 0, 0);');
// $('html').addClass("main-side-bar");
$('body .btn-yellow').remove();
$('body .btn-blue').remove();
$('head').append('<style> body { background: transparent; } </style>');
// $('body .navbar-header, body .navbar, body .navbar-default,').attr('style', 'height: 50px;')

// $('body .navbar-toggle').attr('style','position: relative; float: right; margin-right: 15px; padding: 9px 10px; margin-top: 8px; margin-bottom: 8px; background-color: transparent; background-image: none; border: 1px solid transparent; border-radius: 4px;}');

$('head').promise().done(function() {
	$('body').append('<div id="mapid"></div>');
	$('head').append('<style type="text/css"> #mapid { position: fixed; height: 500px; top: 0; left: 0; } </style>');
	$('head').append("<script>var mymap = L.map('mapid').setView([43.482670, -80.250168], 10);</script>");
	$('head').append("<script>L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', { attribution: 'Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>', maxZoom: 18, id: 'mapbox.streets', accessToken: 'pk.eyJ1IjoicWl2YWxyeSIsImEiOiJjampnNTBhY2s1NHRxM3BvZ2U1eDN3anQyIn0.qpmZ6Dv3v0lAjWVhGEgvig'}).addTo(mymap);</script>");
});


//test
// $('body').append('<div style="position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;"></div>');