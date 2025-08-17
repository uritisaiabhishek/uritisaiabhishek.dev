(function ($) {
    'use strict';

    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });


    /* ########################################### hero parallax ############################################## */
    window.onload = function () {

        var parallaxBox = document.getElementById('parallax');
        if (!parallaxBox) return; // stop if #parallax not found
    
        function getOffset(id) {
            const el = document.getElementById(id);
            return el ? { left: el.offsetLeft, top: el.offsetTop } : null;
        }
        
        const positions = {
            l1: getOffset('l1'),
            l2: getOffset('l2'),
            l3: getOffset('l3'),
            l4: getOffset('l4'),
            l5: getOffset('l5'),
            l6: getOffset('l6'),
            l7: getOffset('l7'),
            l8: getOffset('l8'),
            l9: getOffset('l9')
        };

        parallaxBox.onmousemove = function (event) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
                y = event.clientY - parallaxBox.offsetTop;

            // Only apply parallax if element exists
            if (positions.l1) mouseParallax('l1', positions.l1.left, positions.l1.top, x, y, 5);
            if (positions.l2) mouseParallax('l2', positions.l2.left, positions.l2.top, x, y, 25);
            if (positions.l3) mouseParallax('l3', positions.l3.left, positions.l3.top, x, y, 20);
            if (positions.l4) mouseParallax('l4', positions.l4.left, positions.l4.top, x, y, 35);
            if (positions.l5) mouseParallax('l5', positions.l5.left, positions.l5.top, x, y, 30);
            if (positions.l6) mouseParallax('l6', positions.l6.left, positions.l6.top, x, y, 45);
            if (positions.l7) mouseParallax('l7', positions.l7.left, positions.l7.top, x, y, 30);
            if (positions.l8) mouseParallax('l8', positions.l8.left, positions.l8.top, x, y, 25);
            if (positions.l9) mouseParallax('l9', positions.l9.left, positions.l9.top, x, y, 40);
        };

    };

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
    /* ########################################### /hero parallax ############################################## */

})(jQuery);