chrome.storage.local.get("mlh", function(data) {
  	if(data.mlh){
    	chrome.browserAction.setPopup({popup: "../src/popup_success.html"});
	}
	else{
		chrome.browserAction.setPopup({popup: "../src/popup_failure.html"});
	}
});

