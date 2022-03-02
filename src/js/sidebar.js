// deskTop Menu Control ///
$(function () {
    $("#menu-lg-toggle").on("click",function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(".dropdown-menu").removeClass("open");
        $(".has-menu").children().find(".fas").removeClass("fa-angle-up");
        $(".nav-item a").removeClass("changColor");
    });
});

// SideBar dropdown Control ///
$(function () {
    const pathname = window.location.pathname;
    $(".navbar-nav li a").each( function() {
        const href = $(this).attr("href");
        const parent = $(this).parents("#wrapper")
        if (href != undefined && pathname.indexOf(href) >= 0 ){
            $(this).addClass("onPage");
            $(this).parents('.has-menu').children('.nav-link').addClass("activePage");
            $(this).filter('.nav-link').addClass("activePage");
        }
        if (parent.hasClass("toggle")){
            $(this).parents('.dropdown-menu').removeClass("open");
        }
        
    });
});


// Laptop SideBar Control ///
$(function () {
    $(document).delegate('#menu-laptop-toggle', 'click', function(event) {
        $("#wrapper").toggleClass("openmenu");
        event.stopPropagation();
	})
    $(document).delegate('#page-content-wrapper', 'click', function(event) {
		$("#wrapper").removeClass("openmenu");
	})
    $(document).delegate('.dropdown-item', 'click', function(event) {
        $("#wrapper").removeClass("openmenu");
        event.stopPropagation();
	})
});

