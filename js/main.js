$(document).ready(function () {
    pageInit();
    passIn();
    plotterSlider();
    replaceRealisationImg();
    showQuery();
    smoothScroll();
    sendMessage();
});

function sendMessage() {
    $('#send-message').on('click', function () {

        var inputs = $('input');
        var alert = false;

        $('#success-box').addClass('alert-invisible');
        for (var i = 0; i <= inputs.length; i++) {
            var currInput = inputs[i];
            if ($(currInput).val() == "") {
                $(currInput).addClass('alert-border');
                alert = true;
            } else {
                $(currInput).removeClass('alert-border');
            }
        };

        if (alert == true) {
            $('#alert-box').removeClass('alert-invisible');
        } else {
            $('#alert-box').addClass('alert-invisible');
        };

        $.ajax({
            url: "https://formspree.io/zbig1989@gmail.com",
            method: "POST",
            data: {
                kto: $('#username').val(),
                email: $('#email').val(),
                telefon: $('#phone').val(),
                wiadomosc: $('#message').val(),
            },
            dataType: "json",
            success: function () {
                for (var j = 0; j <= inputs.length; j++) {
                    var currInput = inputs[j];
                    $(currInput).val('');
                };
                $('#success-box').removeClass('alert-invisible');
            }
        });

        $.ajax({
            url: "https://formspree.io/tpielaszkiewicz@gmail.com",
            method: "POST",
            data: {
                kto: $('#username').val(),
                email: $('#email').val(),
                telefon: $('#phone').val(),
                wiadomosc: $('#message').val(),
            },
            dataType: "json",
        });



    })
}

function replaceRealisationImg() {
    $('.one-image').on('click', function () {
        var mainImg = $('.wrapper img');
        mainImg.css('opacity', '0.0');
        switch ($(this).attr('data-key')) {
            case '1':
                mainImg.attr('src', 'img/realisation/photo1.jpeg');
                break;
            case '2':
                mainImg.attr('src', 'img/realisation/photo2.jpeg');
                break;
            case '3':
                mainImg.attr('src', 'img/realisation/photo3.jpeg');
                break;
            case '4':
                mainImg.attr('src', 'img/realisation/photo4.jpeg');
                break;
            case '5':
                mainImg.attr('src', 'img/realisation/photo5.jpeg');
                break;
            case '6':
                mainImg.attr('src', 'img/realisation/photo6.jpeg');
                break;
            default:
                break;
        }
        mainImg.animate({
            opacity: 1.0
        }, 700, function () {});
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
    $('.main-image').on('click', function () {
        $('#slider').removeClass('slider-invisible');

        switch ($(this).attr('id')) {
            case 'plotter':
                $('#slider-photo4').attr('src', 'img/slider/ploter4.JPG');
                $('#slider-photo1').attr('src', 'img/slider/ploter1.JPG');
                $('#slider-photo2').attr('src', 'img/slider/ploter2.JPG');
                $('#slider-photo3').attr('src', 'img/slider/ploter3.jpg');

                break;
            case 'frezarka':
                $('#slider-photo1').attr('src', 'img/slider/frez_mala1.JPG');
                $('#slider-photo2').attr('src', 'img/slider/frez_mala2.JPG');
                $('#slider-photo3').attr('src', 'img/slider/frez_mala3.JPG');
                $('#slider-photo4').attr('src', 'img/slider/frez_mala2.JPG');
                break;
            case 'laser':
                $('#slider-photo1').attr('src', 'img/slider/laser1.jpg');
                $('#slider-photo2').attr('src', 'img/slider/laser2.jpg');
                $('#slider-photo3').attr('src', 'img/slider/laser3.JPG');
                $('#slider-photo4').attr('src', 'img/slider/laser4.JPG');
                break;
        }

    });

    $('#exit').on('click', function () {
        $('#slider').addClass('slider-invisible');
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

    //         var nodemailer = require('nodemailer');
    //
    //        var transporter = nodemailer.createTransport({
    //            service: 'gmail',
    //            auth: {
    //                user: 'tpielaszkiewicz@gmail.com',
    //                pass: 'lubaczow1'
    //            }
    //        });
    //
    //        var mailOptions = {
    //            from: 'tpielaszkiewicz@gmail.com',
    //            to: 'tpielaszkiewicz@gmai.com',
    //            subject: 'Sending Email using Node.js',
    //            text: 'That was easy!'
    //        };
    //
    //        transporter.sendMail(mailOptions, function (error, info) {
    //            if (error) {
    //                console.log(error);
    //            } else {
    //                console.log('Email sent: ' + info.response);
    //            }
    //        });
}
