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

