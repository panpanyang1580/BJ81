(function () {
    'use strict';

    function setRem() {
        var docEl = document.documentElement;
        var width = Math.min(docEl.clientWidth, 750);
        docEl.style.fontSize = (width / 375) * 16 + 'px';
    }

    function initTabs() {
        var tabs = document.querySelectorAll('.shop-tabs__btn');
        var panes = document.querySelectorAll('.shop-pane');
        if (!tabs.length || !panes.length) return;

        function activate(name) {
            tabs.forEach(function (t) {
                var on = t.dataset.tab === name;
                t.classList.toggle('is-active', on);
                t.setAttribute('aria-selected', on ? 'true' : 'false');
            });
            panes.forEach(function (p) {
                p.classList.toggle('is-active', p.dataset.pane === name);
            });
        }

        tabs.forEach(function (t) {
            t.addEventListener('click', function () {
                activate(t.dataset.tab);
            });
        });
    }

    function initViewChips() {
        var group = document.querySelector('.car-view__group');
        if (!group) return;
        var chips = group.querySelectorAll('.car-view__chip');
        chips.forEach(function (c) {
            c.addEventListener('click', function () {
                chips.forEach(function (x) { x.classList.remove('is-active'); });
                c.classList.add('is-active');
            });
        });
    }

    function init() {
        setRem();
        window.addEventListener('resize', setRem);
        window.addEventListener('orientationchange', setRem);
        initTabs();
        initViewChips();

        console.log('[北京81 商城] 已启动');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
