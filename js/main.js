(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

function setActiveMenu() {

    // Get current page
    let currentPage = window.location.pathname.split("/").pop();

    // Default page
    if (currentPage === "" || currentPage === "/") {
        currentPage = "index.html";
    }

    // Remove all active classes
    document.querySelectorAll(".navbar .nav-link, .navbar .dropdown-item").forEach(function (item) {
        item.classList.remove("active");
    });

    // Find all links
    document.querySelectorAll(".navbar a[href]").forEach(function (link) {

        const href = link.getAttribute("href");

        if (!href || href === "#") return;

        if (href.toLowerCase() === currentPage.toLowerCase()) {

            link.classList.add("active");

            // If dropdown item
            const dropdownMenu = link.closest(".dropdown-menu");

            if (dropdownMenu) {

                const toggle = dropdownMenu.previousElementSibling;

                if (toggle && toggle.classList.contains("dropdown-toggle")) {
                    toggle.classList.add("active");
                }

            }

        }

    });

}


    fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;

      // Once navbar is loaded, initialize active link setup
      setActiveNavLinkByUrl();
      setupScrollSpy();
    })
    .catch((error) => console.error("Error loading navbar:", error));


    fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;

      // Once navbar is loaded, initialize active link setup
      setActiveNavLinkByUrl();
      setupScrollSpy();
    })
    .catch((error) => console.error("Error loading navbar:", error));



    