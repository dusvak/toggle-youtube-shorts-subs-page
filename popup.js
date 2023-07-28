// popup.js
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
  
    // Listen for the button click event
    toggleButton.addEventListener("click", function () {
      // Send a message to the content script to toggle the element hiding
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggleElement" });
      });
    });
  });
  