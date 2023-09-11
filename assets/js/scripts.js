//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//about
$(window).on('load', function() {
    $('.jumbotron').each(function(i){
        setTimeout(function() {
            $('.jumbotron').eq(i).addClass('jmuncul');
        }, 1500 * (i+1));
    });


    $('.sub-jumbotron').addClass('jmuncul');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    //about
    $('.resume-section#about h1').css({
        'transform' : 'translate(0px, '+wScroll/4 +'%)'
    });

    $('.resume-section#about .subheading').css({
        'transform' : 'translate(0px, '+wScroll/4 +'%)'
    });

    $('.resume-section#about .lead').css({
        'transform' : 'translate(0px, '+wScroll/10 +'%)'
    });

    $('.resume-section#about .social-icons').css({
        'transform' : 'translate(0px, '+wScroll/8 +'%)'
    });

    //webport
    if(wScroll > $('section.resume-section#webport').offset().top - 250) {
        $('section.resume-section#webport .card').each(function(i) {
            setTimeout(function() {
                $('section.resume-section#webport .card').eq(i).addClass('muncul');
            }, 500 * (i+1));
        });
    }

    //desport
    if(wScroll > $('section.resume-section#desport').offset().top - 250) {
        $('section.resume-section#desport img').each(function(i) {
            setTimeout(function() {
                $('section.resume-section#desport img').eq(i).addClass('muncul');
            }, 200 * (i+1));
        });
    }

    //experience
    if(wScroll > $('section.resume-section#experience').offset().top - 300) {
        $('section.resume-section#experience .expKanan').each(function(i) {
            setTimeout(function() {
                $('section.resume-section#experience .expKanan').eq(i).addClass('muncul');
            }, 800 * (i+1));
        });
    }

    if(wScroll > $('section.resume-section#experience').offset().top - 400) {
        $('section.resume-section#experience .expKiri').each(function(i) {
            setTimeout(function() {
                $('section.resume-section#experience .expKiri').eq(i).addClass('muncul');
            }, 500 * (i+1));
        });
    }

    //skills
    if(wScroll > $('section.resume-section#skills').offset().top - 100) {
        $('section.resume-section#skills .list-inline-item').each(function(i) {
            setTimeout(function() {
                $('section.resume-section#skills .list-inline-item').eq(i).addClass('muncul');
            }, 200 * (i+1));
        });
    }
});