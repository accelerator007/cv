// @ts-nocheck
export function initPortfolio() {
    var i18n = {
      en: {
        navAbout: 'About', navSkills: 'Skills', navProjects: 'Projects',
        navAchievements: 'Achievements', navEducation: 'Education', navContact: 'Contact', navGithub: 'GitHub',
        heroGreeting: "Hello, I'm",
        heroTitle1: 'Networking &amp; Database Engineer',
        heroTitle2: 'CEO of Khos',
        heroTypingPrefix: 'Specializing in ',
        heroCta1: 'View My Work', heroCta2: 'Contact Me', heroScroll: 'Scroll',
        aboutLabel: '01 — About', aboutTitle: 'Who I Am',
        aboutStat1: 'Projects<br>Completed', aboutStat2: 'First Place<br>Awards', aboutStat3: 'Research<br>Grant',
        aboutQuote: '"Engineering solutions at the intersection of IoT, AI, and autonomous systems."',
        aboutP1: 'I am a Networking &amp; Database Engineer with a deep focus on building intelligent, autonomous systems that bridge the physical and digital worlds. As the CEO of <strong class="text-white">Khos</strong>, I lead a technical team developing AI-powered drone solutions for the agricultural sector — specifically targeting the Red Palm Weevil epidemic threatening date palm cultivation across the region.',
        aboutP2: 'My work spans the full stack: from embedded firmware on ESP32 and Raspberry Pi devices to cloud infrastructure on AWS and Oracle Cloud, and from drone flight controller integration (Pixhawk, JIYI K++) to edge AI inference on NVIDIA Jetson Nano.',
        aboutP3: 'Beyond Khos, I have applied my skills to logistics automation, cybersecurity auditing platforms, biometric attendance systems, and full-stack web development — always with a focus on practical deployment and measurable outcomes.',
        skillsLabel: '02 — Skills', skillsTitle: 'Technical Expertise',
        skillCat1: 'Programming &amp; Web', skillCat2: 'Server &amp; Cloud',
        skillCat3: 'Embedded &amp; Edge AI', skillCat4: 'Cybersecurity', skillCat5: 'Drone Technologies',
        projectsLabel: '03 — Projects', projectsTitle: 'Featured Work',
        proj1Title: 'Khos System',
        proj1Short: 'AI-powered Red Palm Weevil control system integrating multi-layered sensors, AI cameras, and autonomous drones.',
        proj2Title: 'Potron Website',
        proj2Short: 'AI-driven platform for fully automated website auditing — performance, SEO, accessibility, and security.',
        proj4Title: 'Facial Recognition Attendance',
        proj4Short: 'Automated biometric attendance system deployed on local school servers — no cloud dependency.',
        proj5Title: 'Logistics Drone System',
        proj5Short: 'Custom drones with electromagnetic grippers for autonomous transport and swapping of insect traps.',
        achLabel: '04 — Achievements', achTitle: 'Recognition',
        ach1Badge: '2026', ach1Rank: '1st Place', ach1Title: 'ESG Forum Hackathon',
        ach1Desc: 'Awarded first place at the 2026 ESG Forum Hackathon for the Khos smart pest management system, recognized for its environmental impact and technological innovation in sustainable agriculture.',
        ach2Badge: 'UTAS', ach2Rank: '1st Place', ach2Title: 'Entrepreneurship Competition',
        ach2Desc: 'First place at the University of Technology and Applied Sciences entrepreneurship competition, demonstrating the commercial viability and scalability of the Khos venture.',
        ach3Badge: 'Riyada', ach3Rank: '1st Place', ach3Title: '"Riyada" Startup Award',
        ach3Desc: 'Recipient of the prestigious "Riyada" entrepreneurship award, honoring excellence in startup development and innovation within the Omani business ecosystem.',
        ach4Badge: 'Tech', ach4Rank: '2nd Place', ach4Title: 'Smart Systems Development',
        ach4Desc: 'Runner-up in the Smart Systems Development Competition, recognized for advanced technical implementation and the real-world applicability of the developed autonomous systems.',
        ach5Badge: 'MoHERI', ach5Rank: 'Research Grant', ach5Title: 'Ministry of Higher Education Grant',
        ach5Desc: "Secured a competitive research grant from MoHERI to continue R&amp;D on AI-driven and drone-based solutions for the Red Palm Weevil epidemic, validating the project's scientific merit.",
        eduLabel: '05 — Education', eduTitle: 'Credentials',
        edu1Type: "Bachelor's Degree", edu1Title: 'Networking &amp; Database Systems', edu1Inst: 'Sohar University, Oman',
        edu2Type: 'Certification', edu2Title: 'AWS Academy Graduate', edu2Inst: 'Cloud Foundations — Amazon Web Services',
        edu3Type: 'Certification', edu3Title: 'Red Hat System Administration I', edu3Inst: 'RH124 — Red Hat Enterprise Linux',
        contactLabel: '06 — Contact', contactTitle: "Let's Connect",
        contactIntro: "Available for collaboration, consulting, and speaking opportunities. Let's build something extraordinary together.",
        contactLinkEmail: 'Email', contactLinkPhone: 'Phone', contactLinkLinkedin: 'LinkedIn',
        contactLinkedinName: 'Ali Hussein Al-Ajmi',
        contactLinkGithub: 'GitHub', contactGithubName: 'accelerator007',
        formName: 'Full Name', formNamePh: 'Your full name',
        formEmail: 'Email Address', formEmailPh: 'your@email.com',
        formSubject: 'Subject', formSubjectPh: 'What is this about?',
        formMessage: 'Message', formMessagePh: 'Tell me about your project or idea…',
        formSubmit: 'Send Message',
        successTitle: 'Message Sent!',
        successMsg: "Thank you for reaching out. I'll get back to you as soon as possible.",
        footerTagline: 'Networking &amp; Database Engineer · CEO of Khos',
        footerCopy: '© 2026 Ali Hussein Ali Al-Ajmi. All rights reserved.'
      },
      ar: {
        navAbout: 'عن', navSkills: 'المهارات', navProjects: 'المشاريع',
        navAchievements: 'الإنجازات', navEducation: 'التعليم', navContact: 'تواصل', navGithub: 'GitHub',
        heroGreeting: 'مرحباً، أنا',
        heroTitle1: 'مهندس شبكات وقواعد البيانات',
        heroTitle2: 'الرئيس التنفيذي لـ Khos',
        heroTypingPrefix: 'متخصص في ',
        heroCta1: 'استعرض أعمالي', heroCta2: 'تواصل معي', heroScroll: 'انتقل',
        aboutLabel: '01 — عن', aboutTitle: 'من أنا',
        aboutStat1: 'مشاريع<br>منجزة', aboutStat2: 'جوائز<br>المركز الأول', aboutStat3: 'منحة<br>بحثية',
        aboutQuote: '"هندسة حلول عند تقاطع إنترنت الأشياء والذكاء الاصطناعي والأنظمة الذاتية."',
        aboutP1: 'أنا مهندس شبكات وقواعد بيانات أُركّز بعمق على بناء أنظمة ذكية ومستقلة تجسر الفجوة بين العوالم المادية والرقمية. بوصفي الرئيس التنفيذي لشركة <strong class="text-white">Khos</strong>، أقود فريقاً تقنياً متخصصاً في تطوير حلول طائرات مسيّرة مدعومة بالذكاء الاصطناعي للقطاع الزراعي، لا سيما في مواجهة وباء سوسة النخيل الحمراء.',
        aboutP2: 'تمتد خبرتي عبر المنظومة التقنية الكاملة: من البرمجيات الثابتة لـ ESP32 و Raspberry Pi، إلى البنية التحتية السحابية على AWS و Oracle Cloud، ومن دمج وحدات تحكم الطيران (بيكسهاوك، JIYI K++) إلى استنتاج الذكاء الاصطناعي الطرفي على NVIDIA Jetson Nano.',
        aboutP3: 'خارج نطاق Khos، طبّقت مهاراتي في أتمتة اللوجستيات، ومنصات تدقيق الأمن السيبراني، وأنظمة الحضور البيومتري، وتطوير الويب متكامل الأطراف.',
        skillsLabel: '02 — المهارات', skillsTitle: 'الخبرات التقنية',
        skillCat1: 'البرمجة والويب', skillCat2: 'الخوادم والسحابة',
        skillCat3: 'الأنظمة المدمجة والذكاء الطرفي', skillCat4: 'الأمن السيبراني', skillCat5: 'تقنيات الطائرات المسيّرة',
        projectsLabel: '03 — المشاريع', projectsTitle: 'أبرز الأعمال',
        proj1Title: 'نظام خوص (Khos)',
        proj1Short: 'نظام ذكي لمكافحة سوسة النخيل الحمراء يدمج مستشعرات متعددة الطبقات وكاميرات ذكاء اصطناعي وطائرات مسيّرة ذاتية.',
        proj2Title: 'موقع Potron',
        proj2Short: 'منصة ويب شاملة تستخدم أدوات الذكاء الاصطناعي لتدقيق المواقع آلياً.',
        proj4Title: 'نظام الحضور بالتعرف على الوجه',
        proj4Short: 'نظام تتبع حضور بيومتري آلي منشور على خوادم مدرسية محلية.',
        proj5Title: 'نظام الطائرات اللوجستي',
        proj5Short: 'طائرات مسيّرة مخصصة مزودة بمسكات كهرومغناطيسية لنقل فخاخ الحشرات ذاتياً.',
        achLabel: '04 — الإنجازات', achTitle: 'التكريمات',
        ach1Badge: '2026', ach1Rank: 'المركز الأول', ach1Title: 'هاكاثون منتدى ESG',
        ach1Desc: 'الفوز بالمركز الأول في هاكاثون منتدى ESG 2026 لنظام Khos، تقديراً لأثره البيئي وابتكاره التقني في مجال الزراعة المستدامة.',
        ach2Badge: 'UTAS', ach2Rank: 'المركز الأول', ach2Title: 'مسابقة ريادة الأعمال',
        ach2Desc: 'المركز الأول في مسابقة ريادة الأعمال بجامعة التقنية والعلوم التطبيقية، إثباتاً للجدوى التجارية وقابلية توسعة مشروع Khos.',
        ach3Badge: 'ريادة', ach3Rank: 'المركز الأول', ach3Title: 'جائزة "ريادة" للمشاريع',
        ach3Desc: 'الحصول على جائزة "ريادة" المرموقة، تكريماً للتميز في تطوير الشركات الناشئة والابتكار ضمن المنظومة الاقتصادية العُمانية.',
        ach4Badge: 'تقني', ach4Rank: 'المركز الثاني', ach4Title: 'مسابقة تطوير الأنظمة الذكية',
        ach4Desc: 'المركز الثاني في مسابقة تطوير الأنظمة الذكية، تقديراً للتنفيذ التقني المتقدم وقابلية تطبيق الأنظمة المطوّرة عملياً.',
        ach5Badge: 'MoHERI', ach5Rank: 'منحة بحثية', ach5Title: 'منحة وزارة التعليم العالي',
        ach5Desc: 'الحصول على منحة بحثية تنافسية من وزارة التعليم العالي والبحث العلمي والابتكار (MoHERI) لمواصلة البحث والتطوير في حلول مكافحة سوسة النخيل.',
        eduLabel: '05 — التعليم', eduTitle: 'المؤهلات',
        edu1Type: 'درجة البكالوريوس', edu1Title: 'أنظمة الشبكات وقواعد البيانات', edu1Inst: 'جامعة صحار، عُمان',
        edu2Type: 'شهادة', edu2Title: 'خريج AWS Academy', edu2Inst: 'أساسيات السحابة — Amazon Web Services',
        edu3Type: 'شهادة', edu3Title: 'إدارة نظام Red Hat I', edu3Inst: 'RH124 — Red Hat Enterprise Linux',
        contactLabel: '06 — التواصل', contactTitle: 'لنتواصل',
        contactIntro: 'متاح للتعاون والاستشارات وفرص التحدث. دعنا نبني شيئاً استثنائياً معاً.',
        contactLinkEmail: 'البريد الإلكتروني', contactLinkPhone: 'الهاتف', contactLinkLinkedin: 'LinkedIn',
        contactLinkedinName: 'علي حسين العجمي',
        contactLinkGithub: 'GitHub', contactGithubName: 'accelerator007',
        formName: 'الاسم الكامل', formNamePh: 'اسمك الكامل',
        formEmail: 'البريد الإلكتروني', formEmailPh: 'your@email.com',
        formSubject: 'الموضوع', formSubjectPh: 'موضوع رسالتك',
        formMessage: 'الرسالة', formMessagePh: 'أخبرني عن مشروعك أو فكرتك…',
        formSubmit: 'إرسال الرسالة',
        successTitle: 'تم الإرسال!',
        successMsg: 'شكراً على تواصلك. سأرد عليك في أقرب وقت ممكن.',
        footerTagline: 'مهندس شبكات وقواعد البيانات · الرئيس التنفيذي لـ Khos',
        footerCopy: '© 2026 علي حسين علي العجمي. جميع الحقوق محفوظة.'
      }
    };

    var typingWords = {
      en: ['Networking', 'Databases', 'IoT', 'AI', 'Edge AI', 'Drones'],
      ar: ['الشبكات', 'قواعد البيانات', 'إنترنت الأشياء', 'الذكاء الاصطناعي', 'الذكاء الطرفي', 'الطائرات المسيّرة']
    };

    var currentLang = localStorage.getItem('lang') || 'en';
    var currentWords = typingWords[currentLang];
    var typingIdx = 0, charIdx = 0, isDeleting = false;
    var typingTimer = null;
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var isTouch = window.matchMedia('(pointer: coarse)').matches;

    function setLanguage(lang) {
      var t = i18n[lang];
      var html = document.documentElement;
      currentLang = lang;
      currentWords = typingWords[lang];
      localStorage.setItem('lang', lang);
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
      document.querySelectorAll('.lang-en').forEach(function (el) {
        el.classList.toggle('text-neon', lang === 'en');
        el.classList.toggle('font-bold', lang === 'en');
      });
      document.querySelectorAll('.lang-ar').forEach(function (el) {
        el.classList.toggle('text-neon', lang === 'ar');
        el.classList.toggle('font-bold', lang === 'ar');
      });
      charIdx = 0; isDeleting = false; typingIdx = 0;
      clearTimeout(typingTimer);
      typeEffect();
    }

    function typeEffect() {
      var el = document.getElementById('typingText');
      if (!el) return;
      var word = currentWords[typingIdx % currentWords.length];
      if (isDeleting) {
        el.textContent = word.substring(0, charIdx - 1);
        charIdx--;
      } else {
        el.textContent = word.substring(0, charIdx + 1);
        charIdx++;
      }
      var speed = isDeleting ? 40 : 80;
      if (!isDeleting && charIdx === word.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        typingIdx++;
        speed = 400;
      }
      typingTimer = setTimeout(typeEffect, speed);
    }

    /* Custom Cursor */
    function initCursor() {
      if (isTouch || reducedMotion) return;
      var dot = document.getElementById('cursorDot');
      var ring = document.getElementById('cursorRing');
      if (!dot || !ring) return;
      document.body.classList.add('has-cursor');
      var mx = 0, my = 0, rx = 0, ry = 0;
      document.addEventListener('mousemove', function (e) {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
      });
      function animateRing() {
        rx += (mx - rx) * 0.15;
        ry += (my - ry) * 0.15;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        requestAnimationFrame(animateRing);
      }
      animateRing();
      var hoverables = 'a, button, .tilt, input, textarea, .nav-link, .mobile-nav';
      document.addEventListener('mouseover', function (e) {
        if (e.target.closest(hoverables)) ring.classList.add('hover');
      });
      document.addEventListener('mouseout', function (e) {
        if (e.target.closest(hoverables)) ring.classList.remove('hover');
      });
    }

    /* Scroll Reveal */
    function initReveal() {
      var els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      if (reducedMotion) {
        els.forEach(function (el) { el.classList.add('in-view'); });
        return;
      }
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            if (entry.target.querySelector('.counter')) animateCounters(entry.target);
            if (entry.target.querySelector('.skill-bar-fill')) fillSkillBars(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      els.forEach(function (el) { observer.observe(el); });
      document.querySelectorAll('#skills').forEach(function (section) {
        var obs = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting) {
            section.querySelectorAll('.skill-bar-fill').forEach(function (bar) {
              bar.style.setProperty('--w', bar.getAttribute('data-width') + '%');
              bar.classList.add('filled');
            });
          }
        }, { threshold: 0.2 });
        obs.observe(section);
      });
    }

    function animateCounters(container) {
      container.querySelectorAll('.counter').forEach(function (el) {
        if (el.dataset.animated) return;
        el.dataset.animated = '1';
        var target = parseInt(el.getAttribute('data-target'), 10);
        var current = 0;
        var step = Math.max(1, Math.ceil(target / 30));
        var timer = setInterval(function () {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = current;
        }, 40);
      });
    }

    function fillSkillBars(container) {
      container.querySelectorAll('.skill-bar-fill').forEach(function (bar) {
        bar.style.setProperty('--w', bar.getAttribute('data-width') + '%');
        bar.classList.add('filled');
      });
    }

    /* 3D Tilt */
    function initTilt() {
      if (isTouch || reducedMotion) return;
      document.querySelectorAll('.tilt').forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
          var rect = card.getBoundingClientRect();
          var x = e.clientX - rect.left;
          var y = e.clientY - rect.top;
          var cx = rect.width / 2;
          var cy = rect.height / 2;
          var rotX = ((y - cy) / cy) * -8;
          var rotY = ((x - cx) / cx) * 8;
          card.style.transform = 'perspective(800px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)';
          var glare = card.querySelector('.tilt-glare');
          if (glare) {
            glare.style.setProperty('--gx', (x / rect.width * 100) + '%');
            glare.style.setProperty('--gy', (y / rect.height * 100) + '%');
          }
        });
        card.addEventListener('mouseleave', function () {
          card.style.transform = '';
        });
      });
    }

    /* Sticky Nav */
    function initNav() {
      var nav = document.getElementById('mainNav');
      window.addEventListener('scroll', function () {
        if (window.scrollY > 50) nav.classList.add('nav-scrolled');
        else nav.classList.remove('nav-scrolled');
      }, { passive: true });
      document.getElementById('langToggle').addEventListener('click', function () {
        setLanguage(currentLang === 'en' ? 'ar' : 'en');
      });
      var hamburger = document.getElementById('hamburger');
      var mobileMenu = document.getElementById('mobileMenu');
      hamburger.addEventListener('click', function () {
        var open = mobileMenu.classList.toggle('hidden') === false;
        hamburger.setAttribute('aria-expanded', open);
      });
      document.querySelectorAll('.mobile-nav').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileMenu.classList.add('hidden');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });
      document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          var id = a.getAttribute('href');
          if (id === '#') return;
          var target = document.querySelector(id);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
          }
        });
      });
    }

    /* Contact Form */
    function initForm() {
      var form = document.getElementById('contactForm');
      var success = document.getElementById('contactSuccess');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = true;
        var fields = [
          { id: 'name', err: 'nameError', check: function (v) { return v.trim().length >= 2; }, msg: { en: 'Please enter your name', ar: 'يرجى إدخال اسمك' } },
          { id: 'email', err: 'emailError', check: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }, msg: { en: 'Please enter a valid email', ar: 'يرجى إدخال بريد إلكتروني صحيح' } },
          { id: 'subject', err: 'subjectError', check: function (v) { return v.trim().length >= 2; }, msg: { en: 'Please enter a subject', ar: 'يرجى إدخال الموضوع' } },
          { id: 'message', err: 'messageError', check: function (v) { return v.trim().length >= 10; }, msg: { en: 'Message must be at least 10 characters', ar: 'يجب أن تكون الرسالة 10 أحرف على الأقل' } }
        ];
        fields.forEach(function (f) {
          var input = document.getElementById(f.id);
          var errEl = document.getElementById(f.err);
          if (!f.check(input.value)) {
            valid = false;
            errEl.textContent = f.msg[currentLang];
            errEl.classList.remove('hidden');
            input.classList.add('border-red-400');
          } else {
            errEl.classList.add('hidden');
            input.classList.remove('border-red-400');
          }
        });
        if (valid) {
          form.classList.add('hidden');
          success.classList.remove('hidden');
        }
      });
    }

    /* Init hero reveals on load */
    function initHeroReveal() {
      setTimeout(function () {
        document.querySelectorAll('#hero .reveal').forEach(function (el, i) {
          setTimeout(function () { el.classList.add('in-view'); }, i * 100);
        });
      }, 200);
    }

    function bootPortfolio() {
      setLanguage(currentLang);
      initCursor();
      initReveal();
      initTilt();
      initNav();
      initForm();
      initHeroReveal();
      var aboutSection = document.getElementById('about');
      if (aboutSection) {
        var obs = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting) animateCounters(aboutSection);
        }, { threshold: 0.3 });
        obs.observe(aboutSection);
      }
    }
    bootPortfolio();
}
