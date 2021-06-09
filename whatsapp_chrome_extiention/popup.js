

// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = "red";
});


// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    
    changeColor.style.backgroundColor = "green";
    console.log("pop up"); 
    const toggleAttach = (e) => {
        // select the span with reliable identification like data-*
        const clipNode = document.querySelectorAll('.TbtXF')[e];
        // take its element, i.e. the button itself
        const clipButtonNode = clipNode.parentNode;
        // extract the current offset position relative to the document
        // more info here https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        // we can use this for filling in the non-0 screenX and screenY
        const clipButtonNodeClientRect = clipButtonNode.getBoundingClientRect();
    
        clipButtonNode.dispatchEvent(new MouseEvent("mousedown", {
            bubbles: true,
            cancelable: true,
            screenX: clipButtonNodeClientRect.x,
            screenY: clipButtonNodeClientRect.y
        }));
    }
    
    // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    // chrome.scripting.executeScript({
    //   target: { tabId: tab.id },
    //   function: setPageBackgroundColor,
    // });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
//   function setPageBackgroundColor() {
//     chrome.storage.sync.get("color", ({ color }) => {
//       document.body.style.backgroundColor = color;
//     });
//   }
// //   alert("pop up")
// function hi(){console.log("pop up"); alert("pop up")}

