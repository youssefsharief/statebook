
let globalState = '';

// receive from content_script the new state
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.from === "content_script" && request.to === 'background') {
        globalState = request.state
        sendResponse();
    }
});


// download globalState when the user clicks on the extension button
chrome.browserAction.onClicked.addListener(function () {
    var blob = new Blob([globalState], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    chrome.downloads.download({ url })
});