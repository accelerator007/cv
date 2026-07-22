'use client';

import { useEffect, useState } from 'react';

type Lang = 'en' | 'ar';

const copy = {
  en: {
    nav: ['About', 'Expertise', 'Work', 'Recognition'], contact: 'Let’s talk', eyebrow: 'ENGINEER · BUILDER · FOUNDER',
    hello: 'Ali Hussein', surname: 'Ali Al-Ajmi', role: 'I design intelligent systems that move from an idea to the field.',
    intro: 'Networking & Database Engineer and CEO of Khos, building at the intersection of autonomous drones, edge AI, IoT, and resilient cloud infrastructure.',
    work: 'Explore selected work', github: 'View GitHub', status: 'Based in Oman · Available for ambitious collaborations',
    aboutKicker: '01 / PROFILE', aboutTitle: 'Engineering that leaves the lab.',
    aboutBody: 'I build practical systems across hardware, software, and operations. My work spans embedded devices and flight controllers, edge inference, secure networks, cloud infrastructure, and the interfaces that make complex technology usable.',
    metrics: [['5+', 'Deployed projects'], ['3×', 'First-place awards'], ['1', 'Research grant']],
    expertiseKicker: '02 / CAPABILITIES', expertiseTitle: 'One engineer. The whole system.',
    projectsKicker: '03 / SELECTED WORK', projectsTitle: 'Built for real-world impact.',
    awardsKicker: '04 / RECOGNITION', awardsTitle: 'Ideas validated by outcomes.',
    contactKicker: '05 / CONTACT', contactTitle: 'Have a difficult problem?', contactBody: 'Let’s turn it into a system that works.', email: 'Start a conversation',
  },
  ar: {
    nav: ['عني', 'الخبرات', 'الأعمال', 'الإنجازات'], contact: 'لنتحدث', eyebrow: 'مهندس · مطوّر · مؤسس',
    hello: 'علي حسين', surname: 'علي العجمي', role: 'أصمم أنظمة ذكية تنتقل من الفكرة إلى أرض الواقع.',
    intro: 'مهندس شبكات وقواعد بيانات والرئيس التنفيذي لـ Khos، أبني حلولاً تجمع الطائرات المسيّرة والذكاء الطرفي وإنترنت الأشياء والبنية السحابية الموثوقة.',
    work: 'استعرض أبرز الأعمال', github: 'GitHub', status: 'مقيم في عُمان · متاح للتعاون في المشاريع الطموحة',
    aboutKicker: '01 / نبذة', aboutTitle: 'هندسة تتجاوز حدود المختبر.',
    aboutBody: 'أبني أنظمة عملية تمتد عبر العتاد والبرمجيات والتشغيل؛ من الأجهزة المدمجة ووحدات تحكم الطيران، إلى الذكاء الطرفي والشبكات الآمنة والبنية السحابية والواجهات التي تجعل التقنية المعقدة سهلة الاستخدام.',
    metrics: [['+5', 'مشاريع منفذة'], ['3×', 'جوائز مركز أول'], ['1', 'منحة بحثية']],
    expertiseKicker: '02 / القدرات', expertiseTitle: 'مهندس واحد. منظومة متكاملة.',
    projectsKicker: '03 / أعمال مختارة', projectsTitle: 'حلول مصممة لأثر حقيقي.',
    awardsKicker: '04 / الإنجازات', awardsTitle: 'أفكار أثبتتها النتائج.',
    contactKicker: '05 / التواصل', contactTitle: 'لديك تحدٍ معقد؟', contactBody: 'لنحوّله إلى نظام يعمل.', email: 'ابدأ محادثة',
  },
};

const expertise = [
  { n: '01', title: 'Autonomous Systems', ar: 'الأنظمة الذاتية', text: 'Drone integration · Pixhawk · JIYI K++ · Mission systems' },
  { n: '02', title: 'Edge AI & IoT', ar: 'الذكاء الطرفي وإنترنت الأشياء', text: 'NVIDIA Jetson · Raspberry Pi · ESP32 · Computer vision' },
  { n: '03', title: 'Cloud & Data', ar: 'السحابة والبيانات', text: 'AWS · Oracle Cloud · Linux · SQL · Resilient infrastructure' },
  { n: '04', title: 'Security & Web', ar: 'الأمن والويب', text: 'Security auditing · Full-stack products · System interfaces' },
];

const projects = [
  { code: 'KHOS / 01', title: 'Khos System', ar: 'نظام خوص', text: 'AI-powered detection and autonomous response system targeting the Red Palm Weevil epidemic.', tags: ['Edge AI', 'IoT', 'Drones'], tone: 'green', image: '/project-khos.jpg' },
  { code: 'LOGISTICS / 02', title: 'Autonomous Logistics', ar: 'الخدمات اللوجستية الذاتية', text: 'Custom drones and electromagnetic grippers for autonomous transport and trap replacement.', tags: ['Robotics', 'Flight control'], tone: 'blue', image: '/project-logistics.jpg' },
  { code: 'VISION / 03', title: 'Biometric Attendance', ar: 'الحضور بالتعرف على الوجه', text: 'Local-first facial recognition attendance system designed for school infrastructure.', tags: ['Computer vision', 'On-premise'], tone: 'violet', image: '/project-biometric.jpg' },
  { code: 'POTRON / 04', title: 'Automated Web Audit', ar: 'تدقيق المواقع الآلي', text: 'AI-assisted platform for performance, accessibility, SEO, and security auditing.', tags: ['AI', 'Web platform'], tone: 'amber', image: '/project-potron.jpg' },
];

const awards = [
  ['2026', '1st Place · ESG Forum Hackathon', 'المركز الأول · هاكاثون منتدى ESG'],
  ['UTAS', '1st Place · Entrepreneurship Competition', 'المركز الأول · مسابقة ريادة الأعمال'],
  ['RIYADA', '1st Place · Startup Award', 'المركز الأول · جائزة ريادة'],
  ['MOHERI', 'Competitive Research Grant', 'منحة بحثية تنافسية'],
];

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>('en');
  const [menu, setMenu] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'));
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navIds = ['about', 'expertise', 'projects', 'recognition'];

  return <main>
    <header className="nav-wrap">
      <a className="mark" href="#top" aria-label="Home"><span>A</span>HA</a>
      <nav className={menu ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {t.nav.map((label, i) => <a key={label} href={`#${navIds[i]}`} onClick={() => setMenu(false)}>{label}</a>)}
      </nav>
      <div className="nav-actions">
        <button className="language" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} aria-label="Switch language">{lang === 'en' ? 'ع' : 'EN'}</button>
        <a className="nav-cta" href="mailto:alialajmi524@gmail.com">{t.contact}<span>↗</span></a>
        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu"><i/><i/></button>
      </div>
    </header>

    <section className="hero" id="top">
      <div className="hero-visual" aria-hidden="true"><div className="orb orb-one"/><div className="orb orb-two"/><div className="scan"/></div>
      <div className="hero-copy" data-reveal>
        <p className="eyebrow"><span/> {t.eyebrow}</p>
        <h1><span>{t.hello}</span><br/>{t.surname}</h1>
        <h2>{t.role}</h2>
        <p className="hero-intro">{t.intro}</p>
        <div className="hero-actions">
          <a className="primary" href="#projects">{t.work}<b>↓</b></a>
          <a className="secondary" href="https://github.com/accelerator007" target="_blank" rel="noreferrer">{t.github}<b>↗</b></a>
        </div>
      </div>
      <div className="status"><i/>{t.status}</div>
      <div className="hero-index">PORTFOLIO / 2026</div>
    </section>

    <section className="section profile" id="about">
      <div className="section-head" data-reveal><p>{t.aboutKicker}</p><h2>{t.aboutTitle}</h2></div>
      <div className="profile-grid">
        <p className="profile-copy" data-reveal>{t.aboutBody}</p>
        <div className="metrics">{t.metrics.map(([value,label]) => <div key={label} data-reveal><strong>{value}</strong><span>{label}</span></div>)}</div>
      </div>
    </section>

    <section className="section" id="expertise">
      <div className="section-head" data-reveal><p>{t.expertiseKicker}</p><h2>{t.expertiseTitle}</h2></div>
      <div className="expertise-list">{expertise.map((item) => <article key={item.n} data-reveal><span>{item.n}</span><h3>{lang === 'ar' ? item.ar : item.title}</h3><p>{item.text}</p><i>↗</i></article>)}</div>
    </section>

    <section className="section projects" id="projects">
      <div className="section-head" data-reveal><p>{t.projectsKicker}</p><h2>{t.projectsTitle}</h2></div>
      <div className="project-grid">{projects.map((project, i) => <article className={`project-card ${project.tone}`} key={project.code} data-reveal>
        <div className="project-art"><img src={project.image} alt={lang === 'ar' ? `صورة مشروع ${project.ar}` : `${project.title} project`} loading="lazy"/><span className="project-shade"/><span className="project-scan" aria-hidden="true"/></div>
        <div className="project-body"><small>{project.code}</small><h3>{lang === 'ar' ? project.ar : project.title}</h3><p>{project.text}</p><div>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><b>0{i + 1}</b></div>
      </article>)}</div>
    </section>

    <section className="section" id="recognition">
      <div className="section-head" data-reveal><p>{t.awardsKicker}</p><h2>{t.awardsTitle}</h2></div>
      <div className="awards">{awards.map(([year,en,ar], i) => <div key={en} data-reveal><span>{year}</span><h3>{lang === 'ar' ? ar : en}</h3><b>0{i + 1}</b></div>)}</div>
    </section>

    <footer id="contact">
      <div data-reveal><p>{t.contactKicker}</p><h2>{t.contactTitle}<br/><em>{t.contactBody}</em></h2></div>
      <a className="contact-link" href="mailto:alialajmi524@gmail.com"><span>{t.email}</span><b>↗</b></a>
      <div className="footer-bottom"><span>© 2026 Ali Hussein Ali Al-Ajmi</span><div><a href="https://www.linkedin.com/in/ali-alajmi-a79a9a350" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/accelerator007" target="_blank" rel="noreferrer">GitHub</a></div><span>Muscat, Oman</span></div>
    </footer>
  </main>;
}
