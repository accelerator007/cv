(function () {
    'use strict';

    /* ──────────────────────────────────────────────────────────────
       Scroll Progress Bar
    ────────────────────────────────────────────────────────────── */
    const progressBar = document.getElementById('scrollProgress');

    function updateScrollProgress() {
        const scrollTop  = window.scrollY;
        const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
        const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = pct + '%';
    }

    /* ──────────────────────────────────────────────────────────────
       Navigation — scroll state
    ────────────────────────────────────────────────────────────── */
    const nav = document.getElementById('mainNav');

    function updateNavState() {
        nav.classList.toggle('nav--scrolled', window.scrollY > 30);
    }

    window.addEventListener('scroll', function () {
        updateScrollProgress();
        updateNavState();
    }, { passive: true });

    updateNavState();

    /* ──────────────────────────────────────────────────────────────
       Hamburger Menu
    ────────────────────────────────────────────────────────────── */
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');

    hamburger.addEventListener('click', function () {
        const isOpen = hamburger.classList.toggle('open');
        navLinks.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    function closeMenu() {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    /* ──────────────────────────────────────────────────────────────
       Scroll Spy — active nav link
    ────────────────────────────────────────────────────────────── */
    const sections   = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav__link[href^="#"]');

    var spyObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var id = entry.target.getAttribute('id');
                navAnchors.forEach(function (a) {
                    a.classList.toggle('active', a.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { rootMargin: '-45% 0px -45% 0px' });

    sections.forEach(function (s) { spyObserver.observe(s); });

    /* ──────────────────────────────────────────────────────────────
       Smooth Scroll — offset for fixed nav
    ────────────────────────────────────────────────────────────── */
    var navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10
    ) || 72;

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var selector = anchor.getAttribute('href');
            if (selector === '#') return;
            var target = document.querySelector(selector);
            if (!target) return;
            e.preventDefault();
            closeMenu();
            var top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
            window.scrollTo({ top: top, behavior: 'smooth' });
        });
    });

    /* ──────────────────────────────────────────────────────────────
       Fade-in Observer
    ────────────────────────────────────────────────────────────── */
    var fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

    var fadeObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeElements.forEach(function (el) { fadeObserver.observe(el); });

    /* ──────────────────────────────────────────────────────────────
       Skill Bar Animations
    ────────────────────────────────────────────────────────────── */
    var skillBars = document.querySelectorAll('.skill-bar__fill');

    var skillObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var bar    = entry.target;
                var target = bar.getAttribute('data-width');
                bar.style.width = target + '%';
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.25 });

    skillBars.forEach(function (bar) { skillObserver.observe(bar); });

    /* ──────────────────────────────────────────────────────────────
       Count-up Numbers
    ────────────────────────────────────────────────────────────── */
    var statNumbers = document.querySelectorAll('.stat-card__number[data-target]');

    function countUp(el, target, duration) {
        var start = performance.now();
        function tick(now) {
            var elapsed  = now - start;
            var progress = Math.min(elapsed / duration, 1);
            var eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.floor(eased * target);
            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = target;
            }
        }
        requestAnimationFrame(tick);
    }

    var countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var target = parseInt(entry.target.getAttribute('data-target'), 10);
                countUp(entry.target, target, 1400);
                countObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    statNumbers.forEach(function (el) { countObserver.observe(el); });

    /* ──────────────────────────────────────────────────────────────
       Typing Effect
    ────────────────────────────────────────────────────────────── */
    var typingText = document.getElementById('typingText');
    var words      = ['Networking', 'Databases', 'IoT', 'AI'];
    var wordIndex  = 0;
    var charIndex  = 0;
    var isDeleting = false;

    function type() {
        var current = words[wordIndex];

        if (isDeleting) {
            charIndex--;
            typingText.textContent = current.slice(0, charIndex);
        } else {
            charIndex++;
            typingText.textContent = current.slice(0, charIndex);
        }

        var delay = isDeleting ? 65 : 115;

        if (!isDeleting && charIndex === current.length) {
            delay      = 1900;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex  = (wordIndex + 1) % words.length;
            delay      = 450;
        }

        setTimeout(type, delay);
    }

    setTimeout(type, 2200);

    /* ──────────────────────────────────────────────────────────────
       GSAP Hero Reveal
       Guarded — fallback shows elements immediately if GSAP fails
    ────────────────────────────────────────────────────────────── */
    function initGSAP() {
        if (typeof gsap === 'undefined') {
            document.querySelectorAll('.gsap-reveal').forEach(function (el) {
                el.style.opacity    = '1';
                el.style.transform  = 'none';
            });
            return;
        }

        var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl
            .fromTo('.hero__greeting',
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.65 }
            )
            .fromTo('.hero__name',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.85 },
                '-=0.25'
            )
            .fromTo('.hero__titles',
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.55 },
                '-=0.35'
            )
            .fromTo('.hero__typing-container',
                { opacity: 0, y: 14 },
                { opacity: 1, y: 0, duration: 0.45 },
                '-=0.25'
            )
            .fromTo('.hero__actions',
                { opacity: 0, y: 14 },
                { opacity: 1, y: 0, duration: 0.45 },
                '-=0.15'
            );
    }

    /* Run after scripts load */
    if (document.readyState === 'complete') {
        initGSAP();
    } else {
        window.addEventListener('load', initGSAP);
    }

    /* ──────────────────────────────────────────────────────────────
       Contact Form Validation
    ────────────────────────────────────────────────────────────── */
    var contactForm    = document.getElementById('contactForm');
    var contactSuccess = document.getElementById('contactSuccess');
    var EMAIL_RE       = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setError(id, msg) {
        var input = document.getElementById(id);
        var err   = document.getElementById(id + 'Error');
        if (input) input.classList.add('error');
        if (err)   err.textContent = msg;
    }

    function clearError(id) {
        var input = document.getElementById(id);
        var err   = document.getElementById(id + 'Error');
        if (input) input.classList.remove('error');
        if (err)   err.textContent = '';
    }

    ['name', 'email', 'subject', 'message'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.addEventListener('input', function () { clearError(id); });
    });

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var name    = document.getElementById('name').value.trim();
            var email   = document.getElementById('email').value.trim();
            var subject = document.getElementById('subject').value.trim();
            var message = document.getElementById('message').value.trim();
            var valid   = true;

            if (!name) {
                setError('name', 'Please enter your full name.');
                valid = false;
            }

            if (!email) {
                setError('email', 'Please enter your email address.');
                valid = false;
            } else if (!EMAIL_RE.test(email)) {
                setError('email', 'Please enter a valid email address.');
                valid = false;
            }

            if (!subject) {
                setError('subject', 'Please enter a subject.');
                valid = false;
            }

            if (!message) {
                setError('message', 'Please enter your message.');
                valid = false;
            }

            if (!valid) return;

            contactForm.hidden    = true;
            contactSuccess.hidden = false;
            contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

})();
