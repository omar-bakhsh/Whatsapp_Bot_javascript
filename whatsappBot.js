var randomTexts=["السلام عليكم ورحمة الله وبركاته","انا بوت","رد علي",];
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent('input', {bubbles: true});
// var textbox = document.getElementsByClassName("mybox")[0];
var textbox = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text")
setInterval(function(){ textbox.innerHTML = randomTexts[Math.floor((Math.random() * randomTexts.length) + 0)];
textbox.dispatchEvent(event);
document.getElementsByClassName("_1E0Oz")[0].click() ; }, 1000);







// new 
// var randomTexts=["السلام عليكم ورحمة الله وبركاته","انا بوت","رد علي",];
// window.InputEvent = window.Event || window.InputEvent;
// var event = new InputEvent('input', {bubbles: true});
// // var textbox = document.getElementsByClassName("mybox")[0];
// var textbox = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text")
// let list =document.querySelectorAll(".JnmQF > ._2aBzC")

// list.forEach(elem=>{
// console.log(elem);
//   elem.click();
// setInterval(function(){ textbox.innerHTML = randomTexts[Math.floor((Math.random() * randomTexts.length) + 0)];
// textbox.dispatchEvent(event);
// document.getElementsByClassName("_1E0Oz")[0].click() ; }, 1000);
  
// })



// // new 2 by click user 
// var randomTexts=["السلام عليكم ورحمة الله وبركاته","انا بوت","رد علي",];
// window.InputEvent = window.Event || window.InputEvent;
// var event = new InputEvent('input', {bubbles: true});
// // var textbox = document.getElementsByClassName("mybox")[0];
// var textbox = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text")
// let list =document.querySelectorAll(".JnmQF > ._2aBzC")

// // code 
// list.forEach(elem=>{
// elem.addEventListener('click', event => {
//  setInterval(function(){ textbox.innerHTML = randomTexts[Math.floor((Math.random() * randomTexts.length) + 0)];
// textbox.dispatchEvent(event);
// document.getElementsByClassName("_1E0Oz")[0].click() ; }, 1000);
// })
// })
