function initGallery() {
    var $gallery = $('.container-gallery'),
        index = 0;

    $('.wrap-slide', $gallery).each(function () {
        $(this).data('imageIndex', index).addClass('image-index-' + index);
        index++;
    });

    $gallery.data('countImages', index);

    $('.wrap-slide', $gallery).click(function () {
        $gallery.data('currentIndex', $(this).data('imageIndex'));
        $('.gallery-body').empty();
        $($(this).html()).appendTo('.gallery-body');
        $('.slide-gallary').show();
        $('.overlay').addClass('have');

        if ($(window).width() < 1199) {
            $('.slide-gallary').show().addClass('fixed');
            $('.overlay').addClass('fixed');
        }

    });
    $('.close').click(function () {
        $('.slide-gallary').hide();
        $('.overlay').removeClass('have');

    });

    $('.overlay').click(function () {
        $('.slide-gallary').hide();
        $('.overlay').removeClass('have');

    });


    $('.next').click(function () {
        nextImage(1);
    });

    $('.prev').click(function () {
        nextImage(-1);
    });

    function nextImage(d) {
        var index = $gallery.data('currentIndex') + d,
            countImages = $gallery.data('countImages');

        if (index < 0) {
            index = countImages - 1;
        }

        if (index >= countImages) {
            index = 0;
        }

        $('.wrap-slide.image-index-' + index, $gallery).trigger('click');
    }
}


$(document).ready(function(){

    $('#myCarousel').carousel({
        interval: 0
    })

    $('.carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i=0;i<5;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
    var parPosition = [];
    $('.block').each(function() {
        parPosition.push($(this).offset().top);
    });

    $('ul.nav-dots li a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

    $('ul.nav-dots li a').click(function () {
        $('ul.nav-dots li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.menu-indicators li a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

    $('.menu-indicators li a').click(function () {
        $('ul.nav-dots li a').removeClass('active');
        $(this).addClass('active');
    });

    $(document).scroll(function(){
        var position = $(document).scrollTop(),
            index;
        for (var i=0; i<parPosition.length; i++) {
            if (position <= parPosition[i]) {
                index = i;
                break;
            }
        }
        $('.menu-indicators li a').removeClass('active');
        $(' .menu-indicators li a:eq('+index+')').addClass('active');

        $('ul.nav-dots li a').removeClass('active');
        $(' ul.nav-dots li a:eq('+index+')').addClass('active');
    });

    $(' ul.nav-dots li a').click(function () {
        $('ul.nav-dots li a').removeClass('active');
        $(this).addClass('active');
    });

    $(' .menu-indicators li a').click(function () {
        $('.menu-indicators li a').removeClass('active');
        $(this).addClass('active');
    });





    initGallery();

});

