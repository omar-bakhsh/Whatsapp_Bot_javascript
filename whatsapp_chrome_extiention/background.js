
  function showAlert() {
    alert("test!");
  }
  
  chrome.scripting.executeScript({
    function: showAlert
  });
  
  chrome.scripting.executeScript({
    file: 'content-script.js'
  });
  
  chrome.tabs.executeScript({
    code: 'console.log("addd")'
});
console.log("start");
throw new Error("lol");
console.log("end");