// This is a self=invoking anonymous function. also called
//an IIFE
//also called a module (pattern)

(() => {

  console.log('hello from JS!');

  // top of each JS file find your elements you wanna work with
  //gets the button
  let toggleButton= document.querySelector(".switch-text"),
    myheading = document.querySelector('h1'),
    svgImg = document.querySelector("#badge");

  //what is the change comment your stuff and describe what it is
  function changeText() {
    myheading.textContent = "Whats up";
  }
// this fuction should log the ID for each SVG to the console
  function logSvg() {
    console.log(this.id);
  }


//waiting for the click to change
toggleButton.addEventListener("click", changeText);
svgImg.addEventListener("mouseover", logSvg);

})();
