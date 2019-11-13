console.log("content_script.js");

chrome.runtime.onMessage.addListener(function(cmd, sender, sendResponse) {
    console.log("chrome.runtime.onMessage: "+cmd);
    switch(cmd) {
    case "getHeadTitle":
      	var result = document.getElementsByClassName("chairBuy").length + "-" +  document.getElementsByClassName("chairActive").length + "-" +  document.getElementsByClassName("chairReserve").length;
        sendResponse(result);
        break;      
    default:
        sendResponse(null);
    }
});