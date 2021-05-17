var randomTexts=["السلام عليكم ورحمة الله وبركاته","انا بوت","رد علي",];
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent('input', {bubbles: true});
var textbox = document.getElementsByClassName("mybox")[0];
setInterval(function(){ textbox.innerHTML = randomTexts[Math.floor((Math.random() * randomTexts.length) + 0)];
textbox.dispatchEvent(event);
document.getElementsByClassName("_1E0Oz")[0].click() ; }, 1000);
