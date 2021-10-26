// START STICKY NAV
let Services_arya = document.querySelector("#Services").offsetTop - 50;
let Nav = document.querySelector(".Header_arya .Nav");

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > Services_arya) {
        Nav.classList.add("Sticky_nav")
    } else {
        Nav.classList.remove("Sticky_nav")
    }
});
// END STICKY NAV
// =============================================================

// START ACTIVE NAV

let List_items = document.querySelectorAll("li>a");
List_items = Array.from(List_items);

let Home_arya = document.querySelector("#Home").offsetTop - 100;
Services_arya = document.querySelector("#Services").offsetTop - 300;
let Team_arya = document.querySelector("#Team").offsetTop - 300;
let Skill_arya = document.querySelector("#Skill").offsetTop - 300;
let Portfolio_arya = document.querySelector("#Portfolio").offsetTop - 300;
let Testimonial_arya = document.querySelector("#Testimonial").offsetTop - 300;
let Contact_arya = document.querySelector("#Contact").offsetTop - 300;
let Footer_area = document.querySelector(".Footer_arya").offsetTop;

window.addEventListener("scroll", function () {

    let Top = window.scrollY ;

    function Active_area(ST_area,EN_area,Active_li){
        if(Top >= ST_area & Top < EN_area){
            Active_li.classList.add("Active");
        }else{
            Active_li.classList.remove("Active");
        }
    }

    // CALLING "ACTIVE AREA" FUNCTIONS
    Active_area(Home_arya,Services_arya,List_items[0]);
    Active_area(Services_arya,Team_arya,List_items[1]);
    Active_area(Team_arya,Skill_arya,List_items[2]);
    Active_area(Skill_arya,Portfolio_arya,List_items[3]);
    Active_area(Portfolio_arya,Testimonial_arya,List_items[4]);
    Active_area(Testimonial_arya,Contact_arya,List_items[5]);
    Active_area(Contact_arya,Footer_area,List_items[6]);

});


// END ACTIVE NAV
// =============================================================


let Hembargar = document.querySelector(".Hembargar");
let Ul = document.querySelector("ul");
let span = document.querySelectorAll(".Hembargar span");
let Mobile_nav_open = false;
// console.log(span);
Hembargar.addEventListener("click", function () {

    if (Mobile_nav_open == false) {
        Ul.classList.add("Mobile_nav");
        span[0].style.transform = "rotate(45deg)";
        span[1].style.opacity = "0";
        span[2].style.transform = "rotate(-45deg)";
        Mobile_nav_open = true;
    } else {
        Ul.classList.remove("Mobile_nav");
        span[0].style.transform = "rotate(0deg)";
        span[1].style.opacity = "1";
        span[2].style.transform = "rotate(0deg)";
        Mobile_nav_open = false;
    }
})

let List = document.querySelector(".Header ul");
List.addEventListener("click", function () {
    Ul.classList.remove("Mobile_nav");
    if (Mobile_nav_open == false) {
        Ul.classList.add("Mobile_nav");
        span[0].style.transform = "rotate(45deg)";
        span[1].style.opacity = "0";
        span[2].style.transform = "rotate(-45deg)";
        Mobile_nav_open = true;
    } else {
        Ul.classList.remove("Mobile_nav");
        span[0].style.transform = "rotate(0deg)";
        span[1].style.opacity = "1";
        span[2].style.transform = "rotate(0deg)";
        Mobile_nav_open = false;
    }
})


// =======USE MIX IT UP PLUGIN=========

var containerEl = document.querySelector('.Img_section');

var mixer = mixitup(containerEl, {
    controls: {
        toggleLogic: 'and'
    }
});










// =================USE JQUARY=================
$(function () {

    // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function (index, value) {
        $(this).find($('circle.complete')).removeAttr('style');
    });


    // Activate progress animation on scroll
    $(window).scroll(function () {
        $('svg.radial-progress').each(function (index, value) {
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if (
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);
            }
        });
    }).trigger('scroll');


    
    
//    =================================================
    // Add smooth scrolling to all links
    $(".List_items a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});









