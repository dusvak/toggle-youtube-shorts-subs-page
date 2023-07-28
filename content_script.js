// content_script.js
let isHidden = true; // Set to true to hide the element on page load

const toggleElement = () => {
  const contentsDiv = document.querySelector('div#contents.style-scope.ytd-rich-grid-renderer');
  if (contentsDiv) {
    const fourthElement = contentsDiv.children[3];
    if (fourthElement) {
      isHidden = !isHidden;
      fourthElement.style.display = isHidden ? 'none' : '';
    }
  }
};

// Function to hide the 4th element inside #contents
const hideFourthElement = () => {
  const contentsDiv = document.querySelector('div#contents.style-scope.ytd-rich-grid-renderer');
  if (contentsDiv) {
    const fourthElement = contentsDiv.children[3];
    if (fourthElement) {
      fourthElement.style.display = 'none';
    }
  }
};

// Execute the hideFourthElement function when the page loads
hideFourthElement();

// Listen for messages from the popup.js script
chrome.runtime.onMessage.addListener(function (message) {
  if (message && message.action === "toggleElement") {
    toggleElement();
  }
});
