document.getElementById('changeColor').addEventListener('click', async() => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    //inject the content script into the current tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setBackgroundColor,
    });
});

function setBackgroundColor() {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;
}