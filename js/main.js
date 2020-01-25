(() => {
//module pattern
  const theSVG = document.querySelectorAll('.svgImg');
  console.log('hello from JS!');

  let allSVGs = document.querySelectorAll(".SVG");

  function toggleSelected() {
    //we want to add some kind of indicator
    // that someone has selected an icon
    //debugger;
    this.classList.toggle('selected');
  }

  function logSvg() {
    console.log(this.id);
  }
  //set up triggers
    //myspan.addEventListener('click', toggleSelected);
    theSVG.forEach(item => item.addEventListener('click', toggleSelected));
    allSVGs.forEach(item => item.addEventListener("click", logSvg));

})();
