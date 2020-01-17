// This is a self=invoking anonymous function. also called
//an IIFE
//also called a module (pattern)

(() => {

  console.log('hello from JS!');

  // top of each JS file find your elements you wanna work with
  //gets the button
  let toggleButton= document.querySelector(".switch-text"),
    myheading = document.querySelector('h1'),
    allSVGs = document.querySelectorAll(".SVG"),

  //what is the change comment your stuff and describe what it is
  function changeText() {
    myheading.textContent = "Whats up";
  }
// this fuction should log the ID for each SVG to the console
  function logSvg() {
    console.log(this.id);
  }

//waiting for the click to change things a user can to to make stuff happen.
toggleButton.addEventListener("click", changeText);
//imgSVG.addEventListener("mouseover", logSvg);
allSVGs.forEach(item => item.addEventListener("click", logSvg));

})();
