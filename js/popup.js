function clickHandler(){
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        // request content_script to retrieve title element innerHTML from current tab
        chrome.tabs.sendMessage(tabs[0].id, "getHeadTitle", null, function(obj) {
			var resultArray = obj.split("-");
            setValue(resultArray[0],resultArray[1],resultArray[2]);
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').addEventListener('click', clickHandler);
    chrome.windows.getCurrent(function (currentWindow) {
        chrome.tabs.query({active: true, windowId: currentWindow.id}, function(activeTabs) {
            // inject content_script to current tab
            chrome.tabs.executeScript(activeTabs[0].id, {file: '/js/content_script.js', allFrames: false});
        });
    });
});

function setValue(orderedCount, availableCount, reservedCount) {
    $('#sold').html(orderedCount);
	$('#available').html(availableCount);
	$('#reserved').html(reservedCount);
}