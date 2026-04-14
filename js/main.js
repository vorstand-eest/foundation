/* ============================================
   E.E.S.T. Foundation - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // --- Header scroll effect ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Mobile Navigation ---
    const hamburger = document.querySelector('.hamburger');
    const navMobile = document.querySelector('.nav-mobile');

    if (hamburger && navMobile) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMobile.classList.toggle('open');
            document.body.style.overflow = navMobile.classList.contains('open') ? 'hidden' : '';
        });

        // Close on link click
        navMobile.querySelectorAll('a:not(.mobile-toggle)').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMobile.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Mobile submenu toggle ---
    document.querySelectorAll('.mobile-toggle').forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            var sub = this.nextElementSibling;
            if (sub && sub.classList.contains('mobile-sub')) {
                sub.classList.toggle('open');
                this.classList.toggle('expanded');
            }
        });
    });

    // --- Donation amount selection ---
    var amounts = document.querySelectorAll('.donation-amount');
    var customInput = document.querySelector('.donation-custom-input');

    amounts.forEach(function (btn) {
        btn.addEventListener('click', function () {
            amounts.forEach(function (b) { b.classList.remove('selected'); });
            btn.classList.add('selected');
            if (customInput) customInput.value = '';
        });
    });

    // --- Set active nav link ---
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

});
