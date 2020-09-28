const parallaxElements = document.getElementsByClassName('parallax');
const totalElements = parallaxElements.length;

window.addEventListener("scroll", function(e){
  var scrolled = window.pageYOffset; // how far we have scrolled /
  for (var i = 0; i < totalElements; i++){
    var parallaxElement = parallaxElements[i];
      if(checkVisible(parallaxElement)){
        var elementOffsetFromTop = parallaxElement.offsetTop; // how far the element is from the top /
        var rate = 0.5;
        var speed = -((elementOffsetFromTop - scrolled)*rate); // subtract scrolled position from element's offset */
        parallaxElement.style.backgroundPositionY = speed +'px';
    }
  }
});

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

