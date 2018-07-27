chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.clear();
  });

chrome.tabs.onActivated.addListener(function(info) {

	chrome.tabs.query({
	    active: true,
	    lastFocusedWindow: true
	}, function(array_of_Tabs) {
	    // Since there can only be one active tab in one active window, 
	    //  the array has only one element
	    var tab = array_of_Tabs[0];
	    var url = tab.url;

	    // "matches": ["*://mlh.io/seasons/na*/events*"],
	    mlh_bool = /[.]*:\/\/mlh\.io\/seasons\/na-20\d\d\/events[.]*/.test(url);
	    // alert(mlh_bool);
	    // alert(url);
	    if (mlh_bool === true){
	    	mlh_success();
	    }
	    else {
	    	mlh_failure();
	    }
	});
});

function mlh_success() {
  chrome.storage.local.set({mlh: true});
  chrome.browserAction.setPopup({popup: "../src/popup_success.html"});
}

function mlh_failure() {
  chrome.storage.local.set({mlh: false});
  chrome.browserAction.setPopup({popup: "../src/popup_failure.html"});
}


chrome.storage.local.get("mlh", function(data) {
  if(data.mlh)
    chrome.browserAction.setPopup({popup: "../src/popup_success.html"});
});