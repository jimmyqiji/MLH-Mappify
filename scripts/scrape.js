document.addEventListener('DOMContentLoaded', function() {
  	var mappifyButton = document.getElementById('btnMappify');
  	mappifyButton.addEventListener('click', function() {
		chrome.tabs.executeScript({
		    file: './scripts/inject-bundle.js'
		}); 
  	})
});