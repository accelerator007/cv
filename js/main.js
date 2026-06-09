(function () {
    'use strict';

    /* ──────────────────────────────────────────────────────────────
       Translations
    ────────────────────────────────────────────────────────────── */
    var i18n = {
        en: {
            navAbout: 'About', navSkills: 'Skills', navProjects: 'Projects',
            navAchievements: 'Achievements', navEducation: 'Education', navContact: 'Contact',

            heroGreeting: "Hello, I'm",
            heroTitle1: 'Networking &amp; Database Engineer',
            heroTitle2: 'CEO of Khos',
            heroTypingPrefix: 'Specializing in ',
            heroCta1: 'View My Work', heroCta2: 'Contact Me', heroScroll: 'Scroll',

            aboutLabel: '01 — About', aboutTitle: 'Who I Am',
            aboutStat1: 'Projects<br>Completed',
            aboutStat2: 'First Place<br>Awards',
            aboutStat3: 'Research<br>Grant',
            aboutQuote: '“Engineering solutions at the intersection of IoT, AI, and autonomous systems.”',
            aboutP1: 'I am a Networking &amp; Database Engineer with a deep focus on building intelligent, autonomous systems that bridge the physical and digital worlds. As the CEO of <strong>Khos</strong>, I lead a technical team developing AI-powered drone solutions for the agricultural sector — specifically targeting the Red Palm Weevil epidemic threatening date palm cultivation across the region.',
            aboutP2: 'My work spans the full stack: from embedded firmware on ESP32 and Raspberry Pi devices to cloud infrastructure on AWS and Oracle Cloud, and from drone flight controller integration (Pixhawk, JIYI K++) to edge AI inference on NVIDIA Jetson Nano. I believe the most impactful engineering happens at the intersection of hardware and software, field and server, problem and solution.',
            aboutP3: "Beyond Khos, I’ve applied my skills to logistics automation, cybersecurity auditing platforms, biometric attendance systems, and full-stack web development — always with a focus on practical deployment and measurable outcomes.",

            skillsLabel: '02 — Skills', skillsTitle: 'Technical Expertise',
            skillCat1: 'Programming &amp; Web', skillCat2: 'Server &amp; Cloud',
            skillCat3: 'Embedded &amp; Edge AI', skillCat4: 'Cybersecurity',
            skillCat5: 'Drone Technologies',

            projectsLabel: '03 — Projects', projectsTitle: 'Featured Work',
            proj1Title: 'Khos System',
            proj1Short: 'AI-powered Red Palm Weevil control system integrating multi-layered sensors, AI cameras, and autonomous drones.',
            proj1Full: 'A comprehensive smart pest management platform for the Red Palm Weevil. Integrates multi-layered sensor arrays, AI-powered camera modules for real-time detection, and fully autonomous drone operations for trap deployment and retrieval across agricultural fields.',
            proj2Title: 'Potron Website',
            proj2Short: 'AI-driven platform for fully automated website auditing — performance, SEO, accessibility, and security.',
            proj2Full: 'A comprehensive web platform built to automate website auditing workflows using integrated AI tools. Delivers performance, SEO, accessibility, and security reports with minimal manual intervention, streamlining the auditing process for businesses and developers alike.',
            proj4Title: 'Facial Recognition Attendance',
            proj4Short: 'Automated biometric attendance system deployed on local school servers — no cloud dependency.',
            proj4Full: 'An on-premise automated attendance tracking system using facial recognition, deployed directly on local school servers. Eliminates manual roll calls, reduces administrative overhead, and maintains complete data privacy by processing everything locally without cloud dependency.',
            proj5Title: 'Logistics Drone System',
            proj5Short: 'Custom drones with electromagnetic grippers for autonomous transport and swapping of insect traps.',
            proj5Full: 'Custom-engineered drones equipped with electronically-controlled magnetic grippers, purpose-built for autonomous transport and hot-swapping of insect monitoring traps across agricultural fields. Reduces field labor costs and enables dense sensor grid deployments at scale.',

            achLabel: '04 — Achievements', achTitle: 'Recognition',
            ach1Badge: '2026', ach1Rank: '1st Place', ach1Title: 'ESG Forum Hackathon',
            ach1Desc: 'Awarded first place at the 2026 ESG Forum Hackathon for the Khos smart pest management system, recognized for its environmental impact and technological innovation in sustainable agriculture.',
            ach2Badge: 'UTAS', ach2Rank: '1st Place', ach2Title: 'Entrepreneurship Competition',
            ach2Desc: 'First place at the University of Technology and Applied Sciences entrepreneurship competition, demonstrating the commercial viability and scalability of the Khos venture.',
            ach3Badge: 'Riyada', ach3Rank: '1st Place', ach3Title: '“Riyada” Startup Award',
            ach3Desc: 'Recipient of the prestigious “Riyada” entrepreneurship award, honoring excellence in startup development and innovation within the Omani business ecosystem.',
            ach4Badge: 'Tech', ach4Rank: '2nd Place', ach4Title: 'Smart Systems Development',
            ach4Desc: 'Runner-up in the Smart Systems Development Competition, recognized for advanced technical implementation and the real-world applicability of the developed autonomous systems.',
            ach5Badge: 'MoHERI', ach5Rank: 'Research Grant', ach5Title: 'Ministry of Higher Education Grant',
            ach5Desc: 'Secured a competitive research grant from MoHERI to continue R&amp;D on AI-driven and drone-based solutions for the Red Palm Weevil epidemic, validating the project\'s scientific merit.',

            eduLabel: '05 — Education', eduTitle: 'Credentials',
            edu1Type: "Bachelor’s Degree", edu1Title: 'Networking &amp; Database Systems', edu1Inst: 'Sohar University, Oman',
            edu2Type: 'Certification', edu2Title: 'AWS Academy Graduate', edu2Inst: 'Cloud Foundations — Amazon Web Services',
            edu3Type: 'Certification', edu3Title: 'Red Hat System Administration I', edu3Inst: 'RH124 — Red Hat Enterprise Linux',

            contactLabel: '06 — Contact', contactTitle: "Let’s Connect",
            contactIntro: "Available for collaboration, consulting, and speaking opportunities. Let's build something extraordinary together.",
            contactLinkEmail: 'Email', contactLinkPhone: 'Phone', contactLinkLinkedin: 'LinkedIn',
            contactLinkedinName: 'Ali Hussein Al-Ajmi',
            formName: 'Full Name', formNamePh: 'Your full name',
            formEmail: 'Email Address', formEmailPh: 'your@email.com',
            formSubject: 'Subject', formSubjectPh: 'What is this about?',
            formMessage: 'Message', formMessagePh: 'Tell me about your project or idea…',
            formSubmit: 'Send Message',
            successTitle: 'Message Sent!',
            successMsg: "Thank you for reaching out. I’ll get back to you as soon as possible.",
            footerTagline: 'Networking &amp; Database Engineer · CEO of Khos',
            footerCopy: '© 2026 Ali Hussein Ali Al-Ajmi. All rights reserved.'
        },

        ar: {
            navAbout: 'عن', navSkills: 'المهارات',
            navProjects: 'المشاريع',
            navAchievements: 'الإنجازات',
            navEducation: 'التعليم',
            navContact: 'تواصل',

            heroGreeting: 'مرحباً، أنا',
            heroTitle1: 'مهندس شبكات وقواعد البيانات',
            heroTitle2: 'الرئيس التنفيذي لـ Khos',
            heroTypingPrefix: 'متخصص في ',
            heroCta1: 'استعرض أعمالي',
            heroCta2: 'تواصل معي',
            heroScroll: 'انتقل',

            aboutLabel: '01 — عن', aboutTitle: 'من أنا',
            aboutStat1: 'مشاريع<br>منجزة',
            aboutStat2: 'جوائز<br>المركز الأول',
            aboutStat3: 'منحة<br>بحثية',
            aboutQuote: '“هندسة حلول عند تقاطع إنترنت الأشياء والذكاء الاصطناعي والأنظمة الذاتية.”',
            aboutP1: 'أنا مهندس شبكات وقواعد بيانات أُركّز بعمق على بناء أنظمة ذكية ومستقلة تجسر الفجوة بين العوالم المادية والرقمية. بوصفي الرئيس التنفيذي لشركة <strong>Khos</strong>، أقود فريقاً تقنياً متخصصاً في تطوير حلول طائرات مسيّرة مدعومة بالذكاء الاصطناعي للقطاع الزراعي، لا سيما في مواجهة وباء سوسة النخيل الحمراء.',
            aboutP2: 'تمتد خبرتي عبر المنظومة التقنية الكاملة: من البرمجيات الثابتة لـ ESP32 و Raspberry Pi، إلى البنية التحتية السحابية على AWS و Oracle Cloud، ومن دمج وحدات تحكم الطيران (بيكسهاوك، JIYI K++) إلى استنتاج الذكاء الاصطناعي الطرفي على NVIDIA Jetson Nano.',
            aboutP3: 'خارج نطاق Khos، طبّقت مهاراتي في أتمتة اللوجستيات، ومنصات تدقيق الأمن السيبراني، وأنظمة الحضور البيومتري، وتطوير الويب متكامل الأطراف.',

            skillsLabel: '02 — المهارات',
            skillsTitle: 'الخبرات التقنية',
            skillCat1: 'البرمجة والويب',
            skillCat2: 'الخوادم والسحابة',
            skillCat3: 'الأنظمة المدمجة والذكاء الطرفي',
            skillCat4: 'الأمن السيبراني',
            skillCat5: 'تقنيات الطائرات المسيّرة',

            projectsLabel: '03 — المشاريع',
            projectsTitle: 'أبرز الأعمال',
            proj1Title: 'نظام خوص (Khos)',
            proj1Short: 'نظام ذكي لمكافحة سوسة النخيل الحمراء يدمج مستشعرات متعددة الطبقات وكاميرات ذكاء اصطناعي وطائرات مسيّرة ذاتية.',
            proj1Full: 'منصة شاملة لإدارة الآفات بالنسبة لسوسة النخيل الحمراء. تدمج مصفوفات استشعار متعددة الطبقات، ووحدات كاميرا مدعومة بالذكاء الاصطناعي للكشف الفوري، وعمليات طائرات مسيّرة ذاتية بالكامل لنشر الفخاخ واسترجاعها.',
            proj2Title: 'موقع Potron',
            proj2Short: 'منصة ويب شاملة تستخدم أدوات الذكاء الاصطناعي لتدقيق المواقع آلياً.',
            proj2Full: 'منصة ويب شاملة مبنية لأتمتة سير عمل تدقيق المواقع باستخدام أدوات الذكاء الاصطناعي المتكاملة. تُقدّم تقارير عن الأداء وتحسين محركات البحث وإمكانية الوصول والأمان.',
            proj4Title: 'نظام الحضور بالتعرف على الوجه',
            proj4Short: 'نظام تتبع حضور بيومتري آلي منشور على خوادم مدرسية محلية.',
            proj4Full: 'نظام تتبع حضور آلي محلي يعمل بالتعرف على الوجه، منشور مباشرة على خوادم المدرسة المحلية. يُلغي عمليات النداء اليدوية ويحافظ على خصوصية البيانات بالكامل.',
            proj5Title: 'نظام الطائرات اللوجستي',
            proj5Short: 'طائرات مسيّرة مخصصة مزودة بمسكات كهرومغناطيسية لنقل فخاخ الحشرات ذاتياً.',
            proj5Full: 'طائرات مسيّرة مهندَسة خصيصاً ومجهّزة بمسكات مغناطيسية كهربائية، مصمّمة لنقل فخاخ مراقبة الحشرات وتبديلها ذاتياً عبر الحقول الزراعية.',

            achLabel: '04 — الإنجازات',
            achTitle: 'التكريمات',
            ach1Badge: '2026', ach1Rank: 'المركز الأول',
            ach1Title: 'هاكاثون منتدى ESG',
            ach1Desc: 'الفوز بالمركز الأول في هاكاثون منتدى ESG 2026 لنظام Khos، تقديراً لأثره البيئي وابتكاره التقني في مجال الزراعة المستدامة.',
            ach2Badge: 'UTAS', ach2Rank: 'المركز الأول',
            ach2Title: 'مسابقة ريادة الأعمال',
            ach2Desc: 'المركز الأول في مسابقة ريادة الأعمال بجامعة التقنية والعلوم التطبيقية، إثباتاً للجدوى التجارية وقابلية توسعة مشروع Khos.',
            ach3Badge: 'ريادة', ach3Rank: 'المركز الأول',
            ach3Title: 'جائزة “ريادة” للمشاريع',
            ach3Desc: 'الحصول على جائزة “ريادة” المرموقة، تكريماً للتميز في تطوير الشركات الناشئة والابتكار ضمن المنظومة الاقتصادية العُمانية.',
            ach4Badge: 'تقني', ach4Rank: 'المركز الثاني',
            ach4Title: 'مسابقة تطوير الأنظمة الذكية',
            ach4Desc: 'المركز الثاني في مسابقة تطوير الأنظمة الذكية، تقديراً للتنفيذ التقني المتقدم وقابلية تطبيق الأنظمة المطوّرة عملياً.',
            ach5Badge: 'MoHERI', ach5Rank: 'منحة بحثية',
            ach5Title: 'منحة وزارة التعليم العالي',
            ach5Desc: 'الحصول على منحة بحثية تنافسية من وزارة التعليم العالي والبحث العلمي والابتكار (MoHERI) لمواصلة البحث والتطوير في حلول مكافحة سوسة النخيل.',

            eduLabel: '05 — التعليم',
            eduTitle: 'المؤهلات',
            edu1Type: 'درجة البكالوريوس',
            edu1Title: 'أنظمة الشبكات وقواعد البيانات',
            edu1Inst: 'جامعة صحار، عُمان',
            edu2Type: 'شهادة', edu2Title: 'خريج AWS Academy',
            edu2Inst: 'أساسيات السحابة — Amazon Web Services',
            edu3Type: 'شهادة', edu3Title: 'إدارة نظام Red Hat I',
            edu3Inst: 'RH124 — Red Hat Enterprise Linux',

            contactLabel: '06 — التواصل',
            contactTitle: 'لنتواصل',
            contactIntro: 'متاح للتعاون والاستشارات وفرص التحدث. دعنا نبني شيئاً استثنائياً معاً.',
            contactLinkEmail: 'البريد الإلكتروني',
            contactLinkPhone: 'الهاتف',
            contactLinkLinkedin: 'LinkedIn',
            contactLinkedinName: 'علي حسين العجمي',
            formName: 'الاسم الكامل',
            formNamePh: 'اسمك الكامل',
            formEmail: 'البريد الإلكتروني',
            formEmailPh: 'your@email.com',
            formSubject: 'الموضوع',
            formSubjectPh: 'موضوع رسالتك',
            formMessage: 'الرسالة',
            formMessagePh: 'أخبرني عن مشروعك أو فكرتك…',
            formSubmit: 'إرسال الرسالة',
            successTitle: 'تم الإرسال!',
            successMsg: 'شكراً على تواصلك. سأرد عليك في أقرب وقت ممكن.',
            footerTagline: 'مهندس شبكات وقواعد البيانات · الرئيس التنفيذي لـ Khos',
            footerCopy: '© 2026 علي حسين علي العجمي. جميع الحقوق محفوظة.'
        }
    };

    /* ──────────────────────────────────────────────────────────────
       Typing words per language
    ────────────────────────────────────────────────────────────── */
    var typingWords = {
        en: ['Networking', 'Databases', 'IoT', 'AI'],
        ar: ['الشبكات', 'قواعد البيانات', 'إنترنت الأشياء', 'الذكاء الاصطناعي']
    };
    var currentWords = typingWords.en;

    /* ──────────────────────────────────────────────────────────────
       setLanguage
    ────────────────────────────────────────────────────────────── */
    function setLanguage(lang) {
        var t   = i18n[lang];
        var html = document.documentElement;

        html.setAttribute('data-lang', lang);
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.innerHTML = t[key];
        });

        document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-ph');
            if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
        });

        /* Reset typing — cancel any pending timer to avoid stacking */
        clearTimeout(typingTimer);
        currentWords = typingWords[lang];
        wordIndex     = 0;
        charIndex     = 0;
        isDeleting    = false;
        var typingEl  = document.getElementById('typingText');
        if (typingEl) typingEl.textContent = '';
        typingTimer   = setTimeout(type, 600);

        try { localStorage.setItem('lang', lang); } catch (e) {}
    }

    /* ──────────────────────────────────────────────────────────────
       Scroll Progress Bar & Nav (managed by fullpage controller)
    ────────────────────────────────────────────────────────────── */
    var progressBar = document.getElementById('scrollProgress');
    var nav         = document.getElementById('mainNav');

    /* ──────────────────────────────────────────────────────────────
       Hamburger Menu
    ────────────────────────────────────────────────────────────── */
    var hamburger = document.getElementById('hamburger');
    var navLinks  = document.getElementById('navLinks');

    hamburger.addEventListener('click', function () {
        var isOpen = hamburger.classList.toggle('open');
        navLinks.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    function closeMenu() {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    navLinks.querySelectorAll('.nav__link').forEach(function (l) { l.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

    /* ──────────────────────────────────────────────────────────────
       Language Toggle
    ────────────────────────────────────────────────────────────── */
    var langToggle = document.getElementById('langToggle');

    langToggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-lang') || 'en';
        setLanguage(current === 'en' ? 'ar' : 'en');
    });

    /* ──────────────────────────────────────────────────────────────
       Scroll Spy
    ────────────────────────────────────────────────────────────── */
    var navAnchors = document.querySelectorAll('.nav__link[href^="#"]');

    /* Nav active state is managed exclusively by fpGoTo */

    /* ──────────────────────────────────────────────────────────────
       Fade-in Observer
    ────────────────────────────────────────────────────────────── */
    var fadeObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(function (el) {
        fadeObserver.observe(el);
    });

    /* ──────────────────────────────────────────────────────────────
       Skill Bars
    ────────────────────────────────────────────────────────────── */
    var skillObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('data-width') + '%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    document.querySelectorAll('.skill-bar__fill').forEach(function (b) { skillObserver.observe(b); });

    /* ──────────────────────────────────────────────────────────────
       Count-up
    ────────────────────────────────────────────────────────────── */
    function countUp(el, target, duration) {
        var start = performance.now();
        function tick(now) {
            var p = Math.min((now - start) / duration, 1);
            el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
            if (p < 1) requestAnimationFrame(tick); else el.textContent = target;
        }
        requestAnimationFrame(tick);
    }

    var countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                countUp(entry.target, parseInt(entry.target.getAttribute('data-target'), 10), 1400);
                countObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    document.querySelectorAll('.stat-card__number[data-target]').forEach(function (el) {
        countObserver.observe(el);
    });

    /* ──────────────────────────────────────────────────────────────
       Typing Effect
    ────────────────────────────────────────────────────────────── */
    var typingText  = document.getElementById('typingText');
    var typingTimer;
    var wordIndex   = 0;
    var charIndex   = 0;
    var isDeleting  = false;

    function type() {
        var current = currentWords[wordIndex % currentWords.length];

        if (isDeleting) { charIndex--; } else { charIndex++; }
        typingText.textContent = current.slice(0, charIndex);

        var delay = isDeleting ? 65 : 115;

        if (!isDeleting && charIndex === current.length) { delay = 1900; isDeleting = true; }
        else if (isDeleting && charIndex === 0) { isDeleting = false; wordIndex = (wordIndex + 1) % currentWords.length; delay = 400; }

        typingTimer = setTimeout(type, delay);
    }

    typingTimer = setTimeout(type, 2200);

    /* ──────────────────────────────────────────────────────────────
       GSAP Hero Reveal
    ────────────────────────────────────────────────────────────── */
    function initGSAP() {
        if (typeof gsap === 'undefined') {
            document.querySelectorAll('.gsap-reveal').forEach(function (el) {
                el.style.opacity = '1'; el.style.transform = 'none';
            });
            return;
        }
        gsap.timeline({ defaults: { ease: 'power3.out' } })
            .fromTo('.hero__greeting',        { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.65 })
            .fromTo('.hero__name',            { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.85 }, '-=0.25')
            .fromTo('.hero__titles',          { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55 }, '-=0.35')
            .fromTo('.hero__typing-container',{ opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25')
            .fromTo('.hero__actions',         { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.15');
    }

    if (document.readyState === 'complete') { initGSAP(); }
    else { window.addEventListener('load', initGSAP); }

    /* ──────────────────────────────────────────────────────────────
       Contact Form
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
            var t       = i18n[document.documentElement.getAttribute('data-lang') || 'en'];

            if (!name)                        { setError('name',    t.formName    + ' — required'); valid = false; }
            if (!email)                       { setError('email',   t.formEmail   + ' — required'); valid = false; }
            else if (!EMAIL_RE.test(email))   { setError('email',   'Invalid email'); valid = false; }
            if (!subject)                     { setError('subject', t.formSubject + ' — required'); valid = false; }
            if (!message)                     { setError('message', t.formMessage + ' — required'); valid = false; }

            if (!valid) return;

            contactForm.hidden    = true;
            contactSuccess.hidden = false;
            contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    /* ──────────────────────────────────────────────────────────────
       Init language from localStorage (default: en)
    ────────────────────────────────────────────────────────────── */
    var savedLang = 'en';
    try { savedLang = localStorage.getItem('lang') || 'en'; } catch (e) {}
    if (savedLang === 'ar') setLanguage('ar');

    /* ──────────────────────────────────────────────────────────────
       Fullpage Scroll Controller
    ────────────────────────────────────────────────────────────── */
    var fpTrack   = document.getElementById('fp-track');
    var fpPanels  = Array.from(fpTrack.children);
    var fpCurrent = 0;
    var fpLocked  = false;
    var FP_DUR    = 920; /* must match CSS transition duration */
    var vpH = fpPanels[0].offsetHeight;

    window.addEventListener('resize', function () {
        vpH = fpPanels[0].offsetHeight;
        fpGoTo(fpCurrent, true);
    });

    /* Build side navigation dots */
    var dotsNav = document.createElement('nav');
    dotsNav.className = 'fp-dots';
    dotsNav.setAttribute('aria-label', 'Page navigation');
    var fpDots = fpPanels.map(function (panel, i) {
        var btn = document.createElement('button');
        btn.className = 'fp-dot' + (i === 0 ? ' active' : '');
        btn.setAttribute('aria-label', 'Go to section ' + (i + 1));
        btn.addEventListener('click', function () { fpGoTo(i); });
        dotsNav.appendChild(btn);
        return btn;
    });
    document.body.appendChild(dotsNav);

    function fpAtTop(panel)    { return panel.scrollTop <= 2; }
    function fpAtBottom(panel) {
        return panel.scrollTop >= panel.scrollHeight - panel.clientHeight - 5;
    }

    function fpGoTo(idx, instant) {
        if (idx < 0 || idx >= fpPanels.length) return;
        if (fpLocked && !instant) return;
        fpLocked = true;

        fpCurrent = idx;
        fpTrack.style.transition = instant ? 'none' : '';
        fpTrack.style.transform  = 'translateY(-' + (idx * vpH) + 'px)';
        if (instant) { fpTrack.offsetHeight; fpTrack.style.transition = ''; }

        /* Reset internal scroll of destination panel */
        if (!instant) fpPanels[idx].scrollTop = 0;

        /* Side dots */
        fpDots.forEach(function (d, i) { d.classList.toggle('active', i === idx); });

        /* Nav underline */
        var id = fpPanels[idx].getAttribute('id');
        navAnchors.forEach(function (a) {
            a.classList.toggle('active', id ? a.getAttribute('href') === '#' + id : false);
        });

        /* Nav blur border — add after leaving hero */
        nav.classList.toggle('nav--scrolled', idx > 0);

        /* Scroll progress bar */
        if (progressBar) progressBar.style.width = (idx / (fpPanels.length - 1) * 100) + '%';

        setTimeout(function () {
            fpLocked = false;
            if (!instant) {
                var panel = fpPanels[fpCurrent];
                panel.querySelectorAll('.fade-in:not(.visible), .fade-in-left:not(.visible), .fade-in-right:not(.visible)').forEach(function (el) {
                    el.classList.add('visible');
                });
                panel.querySelectorAll('.skill-bar__fill[data-width]').forEach(function (el) {
                    if (!el.style.width || el.style.width === '0%') {
                        el.style.width = el.getAttribute('data-width') + '%';
                    }
                });
                panel.querySelectorAll('.stat-card__number[data-target]:not([data-counted])').forEach(function (el) {
                    el.setAttribute('data-counted', '1');
                    countUp(el, parseInt(el.getAttribute('data-target'), 10), 1400);
                });
            }
        }, instant ? 0 : FP_DUR);
    }

    /* Wheel */
    window.addEventListener('wheel', function (e) {
        var panel     = fpPanels[fpCurrent];
        var goingDown = e.deltaY > 0;
        if (goingDown  && !fpAtBottom(panel)) return;
        if (!goingDown && !fpAtTop(panel))    return;
        e.preventDefault();
        fpGoTo(fpCurrent + (goingDown ? 1 : -1));
    }, { passive: false });

    /* Touch swipe — distinguishes content scroll from section-navigation flick.
       Slow drag scrolls within the panel; a fast flick (≥0.4 px/ms) or a drag
       that reaches the boundary advances to the next / previous section.       */
    var touchY0 = 0, touchX0 = 0, touchT0 = 0, touchIntent = null;

    window.addEventListener('touchstart', function (e) {
        touchY0     = e.touches[0].clientY;
        touchX0     = e.touches[0].clientX;
        touchT0     = Date.now();
        touchIntent = null;
    }, { passive: true });

    window.addEventListener('touchmove', function (e) {
        if (touchIntent === 'nav')    { e.preventDefault(); return; }
        if (touchIntent === 'scroll') { return; }

        var dy  = touchY0 - e.touches[0].clientY;
        var adx = Math.abs(e.touches[0].clientX - touchX0);
        var dt  = Date.now() - touchT0;
        var vel = dt > 0 ? Math.abs(dy) / dt : 0; /* px/ms */

        if (Math.abs(dy) < 6 && adx < 6) return; /* too small to decide */
        if (adx > Math.abs(dy)) { touchIntent = 'scroll'; return; } /* horizontal */

        var panel = fpPanels[fpCurrent];

        /* Fast flick (≥0.4 px/ms at ≥50px displacement) OR at section boundary */
        if ((vel >= 0.4 && Math.abs(dy) >= 50) ||
            (dy > 0 && fpAtBottom(panel)) ||
            (dy < 0 && fpAtTop(panel))) {
            touchIntent = 'nav';
            e.preventDefault();
        } else {
            touchIntent = 'scroll';
        }
    }, { passive: false });

    window.addEventListener('touchend', function (e) {
        if (touchIntent !== 'nav') { touchIntent = null; return; }
        touchIntent = null;
        var dy = touchY0 - e.changedTouches[0].clientY;
        if (Math.abs(dy) < 40) return;
        fpGoTo(fpCurrent + (dy > 0 ? 1 : -1));
    }, { passive: true });

    /* Keyboard */
    document.addEventListener('keydown', function (e) {
        var panel = fpPanels[fpCurrent];
        if ((e.key === 'ArrowDown' || e.key === 'PageDown') && fpAtBottom(panel)) {
            e.preventDefault(); fpGoTo(fpCurrent + 1);
        } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && fpAtTop(panel)) {
            e.preventDefault(); fpGoTo(fpCurrent - 1);
        }
    });

    /* All anchor #hash links → fullpage navigation */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var sel = anchor.getAttribute('href');
            if (sel === '#') return;
            var target = document.querySelector(sel);
            if (!target) return;
            var idx = fpPanels.indexOf(target);
            if (idx === -1) return;
            e.preventDefault();
            closeMenu();
            fpGoTo(idx);
        });
    });

    /* Per-panel internal scroll → update progress bar */
    fpPanels.forEach(function (panel) {
        panel.addEventListener('scroll', function () {
            if (fpPanels.indexOf(panel) !== fpCurrent || !progressBar) return;
            var base    = fpCurrent / (fpPanels.length - 1);
            var range   = 1 / (fpPanels.length - 1);
            var inner   = panel.scrollHeight > panel.clientHeight
                ? panel.scrollTop / (panel.scrollHeight - panel.clientHeight) : 0;
            progressBar.style.width = ((base + range * inner) * 100) + '%';
        }, { passive: true });
    });

    /* Init */
    fpGoTo(0, true);

})();
