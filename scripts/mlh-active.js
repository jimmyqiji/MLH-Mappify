console.log("MLH detected, running mlh-active.js");

// var info = true;

// chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
//   sendResponse(info);
// });
function mlh_success() {
  /* ... */
  chrome.storage.local.set({mlh: true});
  chrome.browserAction.setPopup({popup: "../src/popup_success.html"});
}

function mlh_failure() {
  /* ... */
  chrome.storage.local.set({mlh: false});
  chrome.browserAction.setPopup({popup: "../src/popup_failure.html"});
}

// mlh_success();

