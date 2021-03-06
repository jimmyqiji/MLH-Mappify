chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.local.clear();
});

function choose_popup(array_of_Tabs) {
	// Since there can only be one active tab in one active window, the array has only one element
	var tab = array_of_Tabs[0];
	var url = tab.url;

	// "matches": ["*://mlh.io/seasons/*-20*/events*"],
	var mlh_bool = /[.]*:\/\/mlh\.io\/seasons\/na-20\d\d\/events[.]*/.test(url);
	if (mlh_bool === true){
		mlh_success();
	}
	else {
		mlh_failure();
	}
}

chrome.tabs.onActivated.addListener(function(info) {
	chrome.tabs.query(
		{
	    active: true,
	    lastFocusedWindow: true
		},
		choose_popup
	);
})

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	chrome.tabs.query(
		{
	    active: true,
	    lastFocusedWindow: true
		},
		choose_popup
	);
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