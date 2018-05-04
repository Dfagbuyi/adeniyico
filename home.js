$(document).ready(function () {
    "use strict";
    var bg = document.getElementById("masterHead");
    var adeLogo = document.createElement("img");
    var homeLink = document.getElementById("homeLink");
    var aboutLink = document.getElementById("aboutLink");
    var aboutSect = document.getElementById("aboutTopSection");
    var portLink = document.getElementById("portLink");
    var webLink = document.getElementById("webLink");
    var FDALink = document.getElementById("FDASearchApplet");
    var aboutSect2 = document.getElementsByClassName("About2");
    var aboutSectPic = document.getElementsByClassName("parallax");
    var aboutSect3 = document.getElementById("about3rdSection");
    var portSect = document.getElementById("portPage");

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });

    var figure = $(".portVideo").hover(hoverVideo, hideVideo);

    function hoverVideo(e) {
        $('video', this).get(0).play();
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
    }
    var home = true;
    var about = false;
    var port = false;
    var webwork = false;

    homeLink.onclick = fadeInHome;
    aboutLink.onclick = fadeInAbout;
    portLink.onclick = fadeInPort;
    webLink.onclick = fadeInWeb;
    $(document).on('click', '.app', function () {
        console.log("fadeInApp");
        var newUrl = $(this).attr("href");
        if (!newUrl || newUrl[0] === "#") {
            location.hash = newUrl;
            return;
        }
        $("html").fadeOut(function () {
            location = newUrl;
        });
        return false;
    });





    function fadeInWeb() {

        $(portSect).fadeOut(500);
        $(bg).fadeOut(500);
        $(aboutSect).fadeOut(500);
        $(aboutSectPic).fadeOut(500);
        $(aboutSect2).fadeOut(500);
        $("#about2ndSection").fadeOut(500);
        $(aboutSect3).fadeOut(500);
        $(".parallax2").fadeOut(500);
        $("#websiteSect").fadeIn(1000);



    }

    function fadeInPort() {

        console.log("port in");
        $(bg).fadeOut(500);
        $(aboutSect).fadeOut(500);
        $("#websiteSect").fadeOut(500);
        $(aboutSectPic).fadeOut(500);
        $(aboutSect2).fadeOut(500);
        $("#about2ndSection").fadeOut(500);
        $(aboutSect3).fadeOut(500);
        $(".parallax2").fadeOut(500);
        $(portSect).fadeIn(1000);


    }

    function fadeInAbout() {

        $(bg).fadeOut(500);
        $(portSect).fadeOut(500);
        home = false;
        about = true;
        $(aboutSect).fadeIn(1000);
        $("#websiteSect").fadeOut(500);
        $(aboutSectPic).fadeIn(1000);
        $(aboutSect2).fadeIn(1000);
        $("#about2ndSection").fadeIn(1000);
        $(aboutSect3).fadeIn(1000);
        $(".parallax2").fadeIn(1000);

    }

    function fadeInHome() {

        $(portSect).fadeOut(500);
        $(aboutSect).fadeOut(500);
        $(aboutSectPic).fadeOut(500);
        $("#websiteSect").fadeOut(500);
        $(aboutSect2).fadeOut(500);
        $("#about2ndSection").fadeOut(500);
        $(aboutSect3).fadeOut(500);
        $(".parallax2").fadeOut(500);
        $(bg).fadeIn(800);
        about = false;

    }

    $(".para1").fadeIn(3000);
    $(".para1").fadeOut("slow");
    $(".para2").delay(4000).fadeIn(5000);
    $(".para2").fadeOut("slow");
    $(".para3").delay(10000).fadeIn(4000);
    $(".para3").fadeOut("slow");
    setTimeout(function () {
        adeLogo.classList.add("ADELOGO");
        adeLogo.src = "adeLogoVariations/adewhitee.svg";
        adeLogo.alt = "logo";
        bg.appendChild(adeLogo);
        $(".ADELOGO").fadeIn("slow");
        $(".para35").fadeIn(400);
    }, 15000);

    $(".para4").delay(15400).fadeIn(5000);
    adeLogo.onmouseover = function () {
        adeLogo.style = "opacity:1;";
    };
    adeLogo.onmouseout = function () {
        adeLogo.style = "opacity:0.7;";
    };




});
