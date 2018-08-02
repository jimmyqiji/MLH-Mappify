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
$('body').append('<div id="mapid"></div>');
$('head').append('<style type="text/css"> #mapid { height: 180px; } </style>');


// $('head').promise().done(function() {
	// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	$('head').append("<script>var mymap = L.map('mapid').setView([51.505, -0.09], 13);</script>");
// })


//test
$('body').append('<div style="position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;"></div>');