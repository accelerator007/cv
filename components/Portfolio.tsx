'use client';

import { useEffect, useState } from 'react';

type Lang = 'en' | 'ar';

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

const content = {
  en: {
    nav: ['About', 'Expertise', 'Projects', 'Recognition', 'Contact'],
    role: 'Ali Al-Ajmi — Systems Engineer & Founder',
    headline: <>Building systems that <em>move</em><br/>from idea to impact.</>,
    intro: 'Networking & Database Engineer based in Oman. I design connected products across autonomous drones, edge AI, IoT, and cloud infrastructure.',
    cta: 'View selected work', status: 'Available for ambitious collaborations',
    hi: "Hi, I'm Ali.", bioTitle: 'I build the complete system — not just one layer.',
    bio: 'My work starts with a real operational problem and follows it through hardware, software, data, deployment, and the people who use it. As CEO of Khos, I lead the development of autonomous technology for sustainable agriculture in Oman.',
    principle: 'Useful technology should feel clear, dependable, and alive.',
    expertise: 'What I bring to the table', work: 'Selected Work', recognition: 'Recognition',
    workIntro: 'Four systems built around real problems, real environments, and measurable outcomes.',
    githubEyebrow: 'LIVE FROM GITHUB', githubTitle: 'The full repository archive.',
    githubIntro: 'Every public project I own, synced automatically from GitHub.',
    githubLoading: 'Syncing repositories…', githubError: 'The live archive is temporarily unavailable.',
    githubFallback: 'View all on GitHub', githubEmpty: 'No public repositories to show yet.', githubUpdated: 'Updated',
    motionLabel: 'Built in Oman · Designed for the field', motionTitle: 'Where physical systems meet intelligent software.',
    contactTitle: <>Let’s build something <em>real.</em></>, contactBody: 'Have a difficult system, product, or field problem? I’m open to the conversation.', contactCta: 'Start a conversation',
    talk: 'Let’s talk', expertiseLabel: '01 / EXPERTISE', projectsLabel: '02 / PROJECTS', recognitionLabel: '03 / RECOGNITION',
    stats: ['Deployed projects', 'First-place awards', 'Second-place award'],
    footerRole: 'Systems Engineer · CEO of Khos', footerPlace: 'Muscat, Sultanate of Oman',
  },
  ar: {
    nav: ['عني', 'الخبرات', 'المشاريع', 'الإنجازات', 'تواصل'],
    role: 'علي العجمي — مهندس أنظمة ومؤسس',
    headline: <>أحوّل <em>الفكرة</em><br/>إلى نظام يصنع أثراً.</>,
    intro: 'مهندس شبكات وقواعد بيانات من عُمان. أصمم منتجات مترابطة تجمع الطائرات المسيّرة والذكاء الطرفي وإنترنت الأشياء والبنية السحابية.',
    cta: 'استعرض الأعمال', status: 'متاح للتعاون في المشاريع الطموحة',
    hi: 'مرحباً، أنا علي.', bioTitle: 'أبني المنظومة كاملة — وليس طبقة واحدة فقط.',
    bio: 'يبدأ عملي من مشكلة تشغيلية حقيقية ويمتد عبر العتاد والبرمجيات والبيانات والنشر والأشخاص الذين يستخدمون النظام. بصفتي الرئيس التنفيذي لـ Khos، أقود تطوير تقنيات ذاتية للزراعة المستدامة في عُمان.',
    principle: 'التقنية المفيدة يجب أن تكون واضحة، موثوقة، وحيوية.',
    expertise: 'خبرات أبني بها أنظمة متكاملة', work: 'مشاريع مختارة', recognition: 'الإنجازات',
    workIntro: 'أربعة أنظمة بُنيت حول مشاكل واقعية وبيئات حقيقية ونتائج قابلة للقياس.',
    githubEyebrow: 'مباشر من GITHUB', githubTitle: 'أرشيف المستودعات الكامل.',
    githubIntro: 'كل مشاريعي العامة التي أملكها، متزامنة تلقائياً من GitHub.',
    githubLoading: 'جاري مزامنة المستودعات…', githubError: 'الأرشيف المباشر غير متاح مؤقتاً.',
    githubFallback: 'عرض الكل في GitHub', githubEmpty: 'لا توجد مستودعات عامة لعرضها حالياً.', githubUpdated: 'آخر تحديث',
    motionLabel: 'صُنع في عُمان · صُمم للميدان', motionTitle: 'حيث تلتقي الأنظمة المادية بالبرمجيات الذكية.',
    contactTitle: <>لنبنِ شيئاً <em>حقيقياً.</em></>, contactBody: 'لديك نظام معقد أو منتج أو مشكلة ميدانية؟ أنا مستعد للنقاش.', contactCta: 'ابدأ المحادثة',
    talk: 'تواصل معي', expertiseLabel: '01 / الخبرات', projectsLabel: '02 / المشاريع', recognitionLabel: '03 / الإنجازات',
    stats: ['مشاريع منفّذة', 'جوائز بالمركز الأول', 'جائزة بالمركز الثاني'],
    footerRole: 'مهندس أنظمة · الرئيس التنفيذي لخوص', footerPlace: 'مسقط، سلطنة عُمان',
  },
};

const expertise = [
  { en:'Autonomous Systems', ar:'الأنظمة الذاتية', text:'Flight controllers, mission design, drone integration, field reliability.', arText:'متحكمات الطيران، تصميم المهام، تكامل الطائرات المسيّرة والموثوقية الميدانية.' },
  { en:'Edge AI & IoT', ar:'الذكاء الطرفي وإنترنت الأشياء', text:'Jetson, Raspberry Pi, ESP32, computer vision, distributed sensors.', arText:'Jetson وRaspberry Pi وESP32 والرؤية الحاسوبية وشبكات المستشعرات الموزعة.' },
  { en:'Cloud & Data', ar:'السحابة والبيانات', text:'AWS, Oracle Cloud, Linux, SQL, secure data infrastructure.', arText:'AWS وOracle Cloud وLinux وSQL وبنية بيانات آمنة وقابلة للتوسع.' },
];

const projects = [
  { title:'Khos System', ar:'نظام خوص', text:'Autonomous detection and response for the Red Palm Weevil epidemic.', arText:'نظام ذاتي للكشف المبكر والاستجابة لآفة سوسة النخيل الحمراء.', image:'/project-khos.jpg', tags:'EDGE AI · IOT · DRONES', arTags:'ذكاء طرفي · إنترنت الأشياء · طائرات مسيّرة' },
  { title:'Autonomous Logistics', ar:'الخدمات اللوجستية الذاتية', text:'Field drones with electromagnetic grippers for transport and trap replacement.', arText:'طائرات ميدانية بقوابض كهرومغناطيسية للنقل واستبدال المصائد.', image:'/project-logistics.jpg', tags:'ROBOTICS · FLIGHT CONTROL', arTags:'روبوتات · تحكم بالطيران' },
  { title:'Biometric Attendance', ar:'نظام الحضور البيومتري', text:'A privacy-first, local facial recognition system for school infrastructure.', arText:'نظام تعرّف محلي على الوجوه يضع الخصوصية أولاً ومصمم للبنية المدرسية.', image:'/project-biometric.jpg', tags:'COMPUTER VISION · ON-PREMISE', arTags:'رؤية حاسوبية · تشغيل محلي' },
  { title:'Potron Web Audit', ar:'منصة Potron', text:'Automated performance, accessibility, SEO, and security auditing.', arText:'تدقيق آلي للأداء وإمكانية الوصول وتحسين محركات البحث والأمان.', image:'/project-potron.jpg', tags:'AI · WEB PLATFORM', arTags:'ذكاء اصطناعي · منصة ويب' },
];

const awards = [
  ['2026', '1st Place · ESG Forum Hackathon', 'المركز الأول · هاكاثون منتدى ESG'],
  ['2026', '1st Place · CardioTech Competition', 'المركز الأول · مسابقة كارديوتك'],
  ['2025', '2nd Place · Sohar University Innovation Competition', 'المركز الثاني · مسابقة الابتكار بجامعة صحار'],
  ['UTAS', '1st Place · Entrepreneurship Competition', 'المركز الأول · مسابقة ريادة الأعمال'],
  ['RIYADA', '1st Place · Startup Award', 'المركز الأول · جائزة ريادة'],
];

function GitHubProjects({ lang }: { lang: Lang }) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading');
  const t = content[lang];

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        const cached = sessionStorage.getItem('ali-github-repos');
        if (cached) {
          setRepos(JSON.parse(cached));
          setState('ready');
          return;
        }

        const response = await fetch('https://api.github.com/users/accelerator007/repos?per_page=100&sort=updated&type=owner', {
          headers: { Accept: 'application/vnd.github+json' },
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('GitHub request failed');

        const data = (await response.json()) as GitHubRepo[];
        const ownedProjects = data.filter(repo => !repo.fork && !repo.archived);
        sessionStorage.setItem('ali-github-repos', JSON.stringify(ownedProjects));
        setRepos(ownedProjects);
        setState('ready');
      } catch (error) {
        if ((error as Error).name !== 'AbortError') setState('error');
      }
    }

    loadRepos();
    return () => controller.abort();
  }, []);

  return <div className="github-archive" data-reveal>
    <div className="github-heading">
      <div><small>{t.githubEyebrow}</small><h3>{t.githubTitle}</h3><p>{t.githubIntro}</p></div>
      <a href="https://github.com/accelerator007?tab=repositories" target="_blank" rel="noreferrer">{t.githubFallback} ↗</a>
    </div>

    {state === 'loading' && <div className="github-state"><i />{t.githubLoading}</div>}
    {state === 'error' && <div className="github-state error"><span>{t.githubError}</span><a href="https://github.com/accelerator007?tab=repositories">{t.githubFallback} ↗</a></div>}
    {state === 'ready' && repos.length === 0 && <div className="github-state">{t.githubEmpty}</div>}
    {state === 'ready' && repos.length > 0 && <div className="repo-grid">
      {repos.map(repo => <a className="repo-card" key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer">
        <div className="repo-top"><span className="repo-icon" aria-hidden="true">⌁</span><b>↗</b></div>
        <h4>{repo.name}</h4>
        <p>{repo.description || (lang === 'ar' ? 'مستودع عام على GitHub.' : 'Public repository on GitHub.')}</p>
        <div className="repo-meta">
          {repo.language && <span><i />{repo.language}</span>}
          {repo.stargazers_count > 0 && <span>★ {repo.stargazers_count}</span>}
          <span>{t.githubUpdated} {new Intl.DateTimeFormat(lang === 'ar' ? 'ar-OM' : 'en', { month:'short', year:'numeric' }).format(new Date(repo.updated_at))}</span>
        </div>
      </a>)}
    </div>}
  </div>;
}

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>('en');
  const [menu, setMenu] = useState(false);
  const t = content[lang];

  useEffect(() => { document.documentElement.lang=lang; document.documentElement.dir=lang==='ar'?'rtl':'ltr'; }, [lang]);
  useEffect(() => {
    const obs = new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});
    document.querySelectorAll('[data-reveal]').forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  },[]);

  return <main>
    <header className="topbar">
      <a className="identity" href="#top"><span className="avatar">AA</span><strong>{lang==='ar'?'علي العجمي':'Ali Al-Ajmi'}</strong></a>
      <nav className={menu?'nav open':'nav'}>{t.nav.map((n,i)=><a key={n} href={`#${['about','expertise','projects','recognition','contact'][i]}`} onClick={()=>setMenu(false)}>{n}</a>)}</nav>
      <div className="controls"><button className="lang-switch" onClick={()=>setLang(lang==='en'?'ar':'en')} aria-label={lang==='en'?'التبديل إلى العربية':'Switch to English'}>{lang==='en'?'ع':'EN'}</button><a href="mailto:alialajmi524@gmail.com">{lang==='ar'?t.talk:'Let’s talk'} ↗</a><button className="hamb" onClick={()=>setMenu(!menu)} aria-label="Menu"><i/><i/></button></div>
    </header>

    <section className="hero" id="top">
      <div className="hero-orbit" aria-hidden="true"><span/><span/><span/></div>
      <p className="role" data-reveal>{t.role}</p>
      <h1 data-reveal>{t.headline}</h1>
      <p className="lead" data-reveal>{t.intro}</p>
      <a className="text-link" href="#projects" data-reveal>{t.cta} <b>→</b></a>
      <p className="availability"><i/>{t.status}</p>
    </section>

    <section className="about wrap" id="about">
      <div className="about-copy" data-reveal><h2>{t.hi}</h2><h3>{t.bioTitle}</h3><p>{t.bio}</p><blockquote>{t.principle}</blockquote></div>
      <div className="numbers" data-reveal><div><strong>5+</strong><span>{t.stats[0]}</span></div><div><strong>4×</strong><span>{t.stats[1]}</span></div><div><strong>01</strong><span>{t.stats[2]}</span></div></div>
    </section>

    <section className="motion" aria-label="Oman engineering visual">
      <div className="motion-image"><div className="signal s1"/><div className="signal s2"/><div className="flight-path"/></div>
      <div className="motion-copy" data-reveal><p>{t.motionLabel}</p><h2>{t.motionTitle}</h2></div>
    </section>

    <section className="expertise wrap" id="expertise">
      <div className="section-title" data-reveal><small>{lang==='ar'?t.expertiseLabel:'01 / EXPERTISE'}</small><h2>{t.expertise}</h2></div>
      <div className="expertise-grid">{expertise.map((item,i)=><article key={item.en} data-reveal><span>0{i+1}</span><h3>{lang==='ar'?item.ar:item.en}</h3><p>{lang==='ar'?item.arText:item.text}</p><i>↗</i></article>)}</div>
    </section>

    <section className="work wrap" id="projects">
      <div className="section-title centered" data-reveal><small>{lang==='ar'?t.projectsLabel:'02 / PROJECTS'}</small><h2><em>{t.work.split(' ')[0]}</em> {t.work.split(' ').slice(1).join(' ')}</h2><p>{t.workIntro}</p></div>
      <div className="project-grid">{projects.map((p,i)=><article key={p.title} data-reveal>
        <div className="project-image"><img src={p.image} alt={lang==='ar'?p.ar:p.title}/><span>0{i+1}</span></div>
        <small>{lang==='ar'?p.arTags:p.tags}</small><h3>{lang==='ar'?p.ar:p.title}</h3><p>{lang==='ar'?p.arText:p.text}</p>
      </article>)}</div>
      <GitHubProjects lang={lang} />
    </section>

    <section className="recognition wrap" id="recognition">
      <div className="section-title" data-reveal><small>{lang==='ar'?t.recognitionLabel:'03 / RECOGNITION'}</small><h2>{t.recognition}</h2></div>
      <div className="award-list">{awards.map(([year,en,ar])=><div key={en} data-reveal><span>{year}</span><h3>{lang==='ar'?ar:en}</h3><b>↗</b></div>)}</div>
    </section>

    <footer id="contact">
      <div data-reveal><h2>{t.contactTitle}</h2><p>{t.contactBody}</p><a href="mailto:alialajmi524@gmail.com">{t.contactCta} →</a></div>
      <aside><strong>{lang==='ar'?'علي العجمي':'Ali Al-Ajmi'}</strong><p>{lang==='ar'?t.footerRole:'Systems Engineer · CEO of Khos'}</p><p>{lang==='ar'?t.footerPlace:'Muscat, Sultanate of Oman'}</p><a className="contact-phone" href="tel:+96896709444" dir="ltr">+968 9670 9444</a></aside>
      <div className="foot"><span>{lang==='ar'?'© 2026 علي حسين علي العجمي':'© 2026 Ali Hussein Ali Al-Ajmi'}</span><nav><a href="https://github.com/accelerator007" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/ali-alajmi-a79a9a350" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/1ul3g" target="_blank" rel="noreferrer">Instagram</a></nav></div>
    </footer>
  </main>;
}
