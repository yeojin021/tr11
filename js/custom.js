$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
        autoplay: true,
    });

    const MMN = new Swiper('.main_menu_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_menu .next',
            prevEl: '.main_menu .prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 7,
                spaceBetween: 30,
            }
        },

    })


});
$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop(); console.log(sct)

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    })
})


$(function () {
    $('.main_store .tab_store li button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx);

        $('.main_store .tab_store li button').removeClass('on');
        $(this).addClass('on');


        $('.main_store .tab_content .itm').removeClass('on')
        $('.main_store .tab_content .itm').eq(idx).addClass('on')
    });

    const main_store_slide01 = new Swiper('.main_store_slide01', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_store .itm01 .arrows .next',
            prevEl: '.main_store .itm01 .arrows .prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        },
    })
    const main_store_slide02 = new Swiper('.main_store_slide02', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_store .itm02 .arrows .next',
            prevEl: '.main_store .itm02 .arrows .prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        },
    })
});


$(function () {
    $('.mbtn').on('click', function () {
        $(this).toggleClass('is-active')
        $('.gnb').toggleClass('on');
        $('#header h1').toggleClass('on')
    })
});


$(function () {

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on') && $(this).next().is('ul')) {
            e.preventDefault();
            $('.gnb>ul>li ul').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
            $('.gnb>ul>li ul').removeAttr('style');
        }
    })
})


$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 })
    });
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop(); console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });
});