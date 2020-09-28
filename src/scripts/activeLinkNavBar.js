var sections = document.getElementsByTagName("section");
var navBarLink = document.getElementsByClassName("navBarLink");
window.addEventListener("scroll", function(e){
    var scrolled = window.pageYOffset;
    for (var i = sections.length - 1; i >= 0; i--) {
    	var target = sections[i].offsetTop;
    	var id = sections[i].id;
    	var sectionHref = '#' + id;
    	if(scrolled >= target){
    		for (var i = navBarLink.length - 1; i >= 0; i--) {
    			navBarLink[i].classList.remove('active');
    			var href = navBarLink[i].getAttribute("href");
    			if (href == sectionHref) {
                    navBarLink[i].classList.add('active');
    			}
    		}
    	}
    }
});

