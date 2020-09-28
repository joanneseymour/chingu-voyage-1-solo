var navBarContainer = document.getElementById("navBarContainer");

const navSlide = () => {
    var hamburgerButton = document.getElementById('hamburgerButton');
    var navMenuContainer = document.getElementById('navMenuContainer');
    var visible = false;
    hamburgerButton.addEventListener('click', () => {
        if (visible){
            navMenuContainer.style.maxHeight = "0px";
            navMenuContainer.style.transition = "max-height 0.5s ease-out";
            visible = false;
        } else {
            navMenuContainer.style.maxHeight = "500px";
            navMenuContainer.style.transition = "max-height 0.5s ease-in";
            visible = true;
        }
        console.log(navMenuContainer.style.transition);

    });
}

scrollUpButton = document.getElementById("scrollUpButton");
  window.onscroll = function() {
      showScrollUp()
  };

function showScrollUp() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
}

scrollUpButton.onclick = function(){
    document.documentElement.scrollTop = 0;
}

navSlide();


