$(document).ready(function(){


    $('#slider-main').carousel({
        interval: 0
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






    $('#slider-team').carousel({
        interval: 0
    });
    (function(){
        $('#slider-team .item').each(function(){
            var itemToClone = $(this).append('<div></div>');

            for (var i=1;i<3;i++) {
                itemToClone = itemToClone.next();

                // wrap around if at end of item collection
                if (!itemToClone.length) {
                    itemToClone = $(this).siblings(':first');
                }

                // grab item, clone, add marker class, add to collection
                itemToClone.children(':first-child').clone()
                    .addClass("cloneditem-"+(i))
                    .appendTo($(this));
            }
        });
    }());
    // $('#slider-team.carousel .item').each(function(){
    //     var next = $(this).next();
    //     if (!next.length) {
    //
    //         next = $(this).siblings(':first');
    //     }
    //     next.children(':first-child').clone().appendTo($(this));
    //
    //     if (next.next().length>0) {
    //         next.next().children(':first-child').clone().appendTo($(this));
    //     }
    //     else {
    //         $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    //     }
    //
    // });
    // $('#slider-team').on('slid.bs.carousel', function () {
    //     $(".item.active:nth-child(" + ($(".carousel-inner .item").length -1) + ") + .item").insertBefore($(".item:first-child"));
    //     $(".item.active:last-child").insertBefore($(".item:first-child"));
    // });
    var $carousel = $('.carousel1');
    var $seats = $('.carousel-seat');

    $('.toggle').on('click', function(e) {
        var $newSeat;
        var $el = $('.is-ref');
        var $currSliderControl = $(e.currentTarget);
        // Info: e.target is what triggers the event dispatcher to trigger and e.currentTarget is what you assigned your listener to.

        $el.removeClass('is-ref');
        if ($currSliderControl.data('toggle') === 'next') {
            $newSeat = next($el);
            $carousel.removeClass('is-reversing');
        } else {
            $newSeat = prev($el);
            $carousel.addClass('is-reversing');
        }

        $newSeat.addClass('is-ref').css('order', 1);
        for (var i = 2; i <= $seats.length; i++) {
            $newSeat = next($newSeat).css('order', i);
        }

        $carousel.removeClass('is-set');
        return setTimeout(function() {
            return $carousel.addClass('is-set');
        }, 50);

        function next($el) {
            if ($el.next().length) {
                return $el.next();
            } else {
                return $seats.first();
            }
        }

        function prev($el) {
            if ($el.prev().length) {
                return $el.prev();
            } else {
                return $seats.last();
            }
        }
    });

});

function moveToSelected(element) {

    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}


$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            moveToSelected('prev');
            break;

        case 39: // right
            moveToSelected('next');
            break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel .img').click(function() {
    moveToSelected($(this));
});

$('#prev').click(function() {
    moveToSelected('prev');
});

$('#next').click(function() {
    moveToSelected('next');
});

