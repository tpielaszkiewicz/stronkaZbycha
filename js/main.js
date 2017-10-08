$(document).ready(function () {
    pageInit();
    passIn();
    plotterSlider();
    replaceRealisationImg();
    showQuery();
    smoothScroll();

});

function replaceRealisationImg() {
    $('.one-image').on('click', function () {
        var mainImg = $('.wrapper img');
        mainImg.css('opacity','0.0');
        switch ($(this).attr('data-key')) {
            case '1':
                mainImg.attr('src', '../img/realisation/pexels-photo-279315.jpeg');
                break;
            case '2':
                mainImg.attr('src', '../img/realisation/pexels-photo-289317.jpeg');
                break;
            case '3':
                mainImg.attr('src', '../img/realisation/pexels-photo-432828.jpeg');
                break;
            case '4':
                mainImg.attr('src', '../img/realisation/pexels-photo-459149.jpeg');
                break;
            case '5':
               mainImg.attr('src', '../img/realisation/pexels-photo-464331.jpeg');
                break;
            case '6':
                mainImg.attr('src', '../img/realisation/pexels-photo-464431.jpeg');
                break;
            default:
                break;
        }
        mainImg.animate({opacity: 1.0}, 700, function(){});
    })

}

function pageInit() {
    if ($(window).scrollTop() > 150) {
        $('.row').css('left', '0%');
    }

    // for images in gallery set width = height to ensure square 
    $('.one-image').height($('.one-image').width());

    $(window).resize(function () {
        $('.one-image').height($('.one-image').width())
    });

}

function showQuery() {
    $('#ask').on('click', function () {
        console.log('asdas');
        $('.pop-up-container').removeClass('invisible');
    })
}

function plotterSlider() {
    $('#plotter').on('click', function () {
        $('#slider-wrap').removeClass('slider-invisible');
    });

    $('#exit').on('click', function () {
        $('#slider-wrap').addClass('slider-invisible');
    })
}


function passIn() {
    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 130) {
            $('.row:nth-child(1)').css('left', '0%');
        }

        if ($(window).scrollTop() > 200) {
            $('.row:nth-child(2)').css('left', '0%');
        }

        if ($(window).scrollTop() > 450) {
            $('.row:nth-child(3)').css('left', '0%');
        }

        if ($(window).scrollTop() > 900) {
            $('.row:nth-child(4)').css('left', '0%');
        }

        if ($(window).scrollTop() > 1000) {
            $('.row:nth-child(5)').css('left', '0%');
        }
    })
}

function changeNavbar() {
    $(window).scroll(function () {
        if ($(window).outerWidth() >= 768) {

            if ($(window).scrollTop() > 10) {
                $('.navbar-default').addClass('scrolled-menu');
                $('#main-nav a').addClass('scrolled-link');

            } else {
                $('.navbar-default').removeClass('scrolled-menu');
                $('#main-nav a').removeClass('scrolled-link');
            }
        }
    })
}

function changeSizeHandler() {

    $(window).resize(function () {
        if ($(window).outerWidth() < 768) {
            $('.navbar-default').removeClass('scrolled-menu');
            $('#main-nav a').removeClass('scrolled-link');
        } else if ($(window).scrollTop() > 10) {
            $('.navbar-default').addClass('scrolled-menu');
            $('#main-nav a').addClass('scrolled-link');
        }
    })

}

function rotateIcon() {
    $('.service-icon').on({
        'mouseenter': function () {
            $(this).css('transform', 'rotate(360deg)');
        },
        'mouseleave': function () {
            $(this).css('transform', 'rotate(0deg)');
        }
    })
}

function smoothScroll() {
    $(".smooth-scroll").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            console.log(hash);
            console.log($(hash).offset().top);

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
};

// metoda symulująca wysłanie maila - metoda post ajax - po stronie serwera juz te dane powinny byc obronione i mail wysłany
function sendMail() {

    console.log('dziala');
    $.ajax('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        data: {
            title: 'fssoo',
            body: 'bsssar',
            userId: 123
        }
    }).then(function (data) {
        console.log(data);
    });
}
