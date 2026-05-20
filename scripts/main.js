(function () {
    'use strict';

    function setRem() {
        var docEl = document.documentElement;
        var width = Math.min(docEl.clientWidth, 750);
        docEl.style.fontSize = (width / 375) * 16 + 'px';
    }

    function initHeroCarousel() {
        var track = document.querySelector('.hero__track');
        var dots = document.querySelectorAll('.hero__dot');
        if (!track || dots.length === 0) return;

        var slideCount = dots.length;
        var current = 0;
        var autoTimer = null;
        var AUTO_INTERVAL = 4000;

        function goTo(index) {
            current = (index + slideCount) % slideCount;
            track.scrollTo({
                left: track.clientWidth * current,
                behavior: 'smooth'
            });
        }

        function updateDots(index) {
            dots.forEach(function (dot, i) {
                dot.classList.toggle('is-active', i === index);
            });
        }

        function startAuto() {
            stopAuto();
            autoTimer = setInterval(function () {
                goTo(current + 1);
            }, AUTO_INTERVAL);
        }

        function stopAuto() {
            if (autoTimer) {
                clearInterval(autoTimer);
                autoTimer = null;
            }
        }

        var scrollRaf = null;
        track.addEventListener('scroll', function () {
            if (scrollRaf) return;
            scrollRaf = requestAnimationFrame(function () {
                scrollRaf = null;
                var index = Math.round(track.scrollLeft / track.clientWidth);
                if (index !== current) {
                    current = index;
                    updateDots(current);
                }
            });
        });

        dots.forEach(function (dot, i) {
            dot.addEventListener('click', function () {
                stopAuto();
                goTo(i);
                startAuto();
            });
        });

        track.addEventListener('touchstart', stopAuto, { passive: true });
        track.addEventListener('touchend', startAuto, { passive: true });
        track.addEventListener('mouseenter', stopAuto);
        track.addEventListener('mouseleave', startAuto);

        startAuto();
    }

    function init() {
        setRem();
        window.addEventListener('resize', setRem);
        window.addEventListener('orientationchange', setRem);
        initHeroCarousel();

        console.log('[北京81] H5 已启动');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
