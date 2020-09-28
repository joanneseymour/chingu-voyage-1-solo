
var sections = document.getElementsByTagName("section");
var navMenuLink = document.getElementsByClassName("navMenuLink");
window.addEventListener("scroll", function(e){
    var scrolled = window.pageYOffset;
    for (var i = sections.length - 1; i >= 0; i--) {
    	var target = sections[i].offsetTop;
    	var id = sections[i].id;
    	var sectionHref = '#' + id;
    	if(scrolled >= target){
    		for (var i = navMenuLink.length - 1; i >= 0; i--) {
    			navMenuLink[i].classList.remove('active');
    			var href = navMenuLink[i].getAttribute("href");
    			if (href == sectionHref) {
                    navMenuLink[i].classList.add('active');
    			}
    		}
    	}
    }
});
