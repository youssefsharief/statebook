// receive from app's middleware the new state and then send it to the background
window.addEventListener("message", function (event) {
    if (event.source === window && event.data.from == "app" && event.data.to == "content_script") {
        chrome.runtime.sendMessage({from: "content_script", to: 'background', state: event.data.state});    
    }
}, false);
