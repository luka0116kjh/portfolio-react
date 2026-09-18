import { useState, useEffect } from 'react'
import { ArrowDown, ArrowUpRight, BrainCircuit, ChevronUp, Ellipsis, Moon, Smartphone, Sun, Terminal } from 'lucide-react'
import MacTerminal from './MacTerminal.jsx'
import ProjectShowcase from './ProjectShowcase.jsx'
import './Portfolio.css'

const translations = {
  ko: {
    languageLabel: 'English version',
    languageButton: 'EN',
    skipLink: '본문으로 바로가기',
    navLabel: '주요 메뉴',
    nav: { projects: '프로젝트', awards: '대회·자격', activities: '활동' },
    profile: {
      name: 'Luka', koreanName: '김진형',
      role: 'Programmer & Builder & Hacker',
      github: 'https://github.com/luka0116kjh', velog: 'https://velog.io/@luka0116kjh/posts', email: 'kjh08116@naver.com',
      bio: '안녕하세요. 만들고, 부수고, 다시 배우며 성장하는 김진형입니다. 웹부터 AI, 로봇, 보안까지 궁금한 것을 직접 프로젝트로 만들어 봅니다.',
      subtitle: '소프트웨어 개발 · AI · 보안을 공부하는 학생 개발자',
      schoolLabel: '학교', school: '경기자동차과학고등학교 3학년',
      majorLabel: '전공', major: '미래자동차과',
      goalLabel: '목표', goal: '소프트웨어 엔지니어 / AI 엔지니어',
      githubLabel: 'GitHub', emailLabel: '이메일',
    },
    sections: {
      projects: '프로젝트', projectsDescription: '생활 속 불편을 해결하는 앱부터 웹 보안과 AI 실험까지, 직접 만들고 참여한 작업입니다.', showcaseTitle: '직접 만들고, 함께 만든 것들', githubMore: 'GitHub에서 더 보기',
      stack: '기술 스택', awards: '대회 · 자격', activities: '활동', blog: '배우고 기록하기',
      blogTitle: 'Velog 기술 블로그', blogDescription: '개발, 보안, AI 관련 기술 글',
    },
    skills: [
      { name: '언어', items: ['Python', 'JavaScript', 'TypeScript', 'Java'] },
      { name: '웹 프론트엔드', items: ['React', 'HTML', 'CSS'] },
      { name: '앱 개발', items: ['Jetpack Compose'] },
      { name: '백엔드', items: ['FastAPI', 'Node.js', 'Firebase'] },
      { name: '보안 & AI', items: ['Ghidra', 'AI & ML', 'Robotics'] },
      { name: '개발 도구', items: ['Docker', 'GitHub'] },
    ],
    projects: [
      { id: 'ghas', name: 'GHAS 알리미', description: '경기자동차과학고 학생들을 위한 생활 지원 앱입니다. 급식과 시간표를 한곳에서 확인할 수 있습니다.', category: '학교생활 · 모바일 앱', icon: Smartphone, color: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300', tags: ['Android', 'iOS', 'NEIS API'], links: [{ label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=kr.hs.ghas.ghason' }, { label: 'App Store', url: 'https://apps.apple.com/kr/app/ghas%EC%95%8C%EB%A6%AC%EB%AF%B8/id6779186783' }] },
      { id: 'lhlinux', name: 'lhLinux', description: 'Ubuntu 24.04 LTS 기반의 오픈소스 WSL2 CLI 배포판으로, 누구나 설치하고 개선할 수 있는 개발 환경 프로젝트입니다.', category: 'Linux · CLI · Ubuntu', icon: Terminal, color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200', tags: ['WSL2', 'CLI', 'Ubuntu'], links: [{ label: 'GitHub', url: 'https://github.com/luka0116kjh/lhlinux' }] },
      { id: 'gcpt', name: 'GCPT', description: 'GPT, Claude, Gemini의 토론을 시각화하고 추론 흐름을 분석합니다. 디자인과 일부 기능 구현에 참여했습니다.', category: 'AI · 협업 프로젝트', icon: BrainCircuit, color: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300', tags: ['AI Debate', '시각화'], links: [{ label: 'GitHub', url: 'https://github.com/cksdud32/gcpt' }] },
    ],
    awards: [
      { date: '2026', title: 'ASIS CTF Quals 2026, Iran Tech Olympics CTF 2026', badge: '예선 10등' },
      { date: '2026.08.22', title: 'CCE 예선전', badge: '예선 15등' },
      { date: '2026.07', title: '정보처리산업기사', badge: '합격' },
      { date: '2026', title: 'COSS 청소년 사이버 해킹방어', badge: '예선 7등' },
    ],
    moreAwards: [
      { date: '2026', title: '사이버가디언즈 CMX', badge: '팀별 18등' }, { date: '2026', title: 'SCA CTF', badge: '본선 20등' },
      { title: '총장배 로봇 프로그래밍 경진대회', badge: '3등' }, { title: '현대오토에버 화이트해커 경진대회', badge: '입상' },
      { title: '미래를 그리는 알고리즘 경진대회', badge: '2등' }, { title: '교내 포트폴리오 경진대회', badge: '3등', detail: '1·2학년 연속 수상' }, { title: '봉사 부문 표창', badge: '수상' },
    ],
    activities: [
      { date: '2026', title: 'Null; 해킹팀', badge: '팀 리더' }, { date: '2026', title: 'Hwalbin 해킹팀', badge: '팀원' }, { date: '2025-2026', title: '비주얼캠프 도제활동', badge: '교육' },
    ],
    moreActivities: [
      { date: '2026', title: '흐르르 애플리케이션 플랫폼', badge: '개발' }, { date: '2026', title: '경기 청소년 사이버 보안 캠프', badge: '참여' },
      { date: '2026', title: 'The Ignition 2026 :: YHHS X Hashed', badge: '컨퍼런스' }, { date: '2026', title: '.HACK 컨퍼런스', badge: '컨퍼런스' },
      { date: '2025', title: '현대오토에버 고교생 IT 꿈나무 화이트해커', badge: '교육' }, { date: '2024–2026', title: '학생기자단과 학교 블로그', badge: '기자단' },
      { date: '2024–2025', title: '청소년운영위원회 정책부', badge: '위원' }, { date: '2024', title: '인공지능 창업체험과 특강', badge: '교육' },
      { date: '2024', title: '네이버 청소년 크리에이터 스쿨', badge: '교육' }, { date: '2024', title: '앱인벤터·메이커 활동', badge: '프로젝트' },
    ],
    labels: { moreAwards: '더 많은 대회·수상 기록', moreActivities: '더 많은 활동·경험 기록', more: '더 보기', collapse: '접기', unknownDate: '연도 미기재', newTab: '새 탭' },
  },
  en: {
    languageLabel: '한국어 버전',
    languageButton: '한',
    skipLink: 'Skip to main content',
    navLabel: 'Primary navigation',
    nav: { projects: 'Projects', awards: 'Awards & Certifications', activities: 'Activities' },
    profile: {
      name: 'Luka', koreanName: 'Jinhyeong Kim',
      role: 'Programmer & Builder & Hacker',
      github: 'https://github.com/luka0116kjh', velog: 'https://velog.io/@luka0116kjh/posts', email: 'kjh08116@naver.com',
      bio: 'Hi, I’m Jinhyeong Kim. I grow by building, breaking, and learning again. I turn my curiosity about the web, AI, robotics, and security into hands-on projects.',
      subtitle: 'Student developer exploring software, AI, and cybersecurity',
      schoolLabel: 'School', school: 'Gyeonggi Automotive Science High School · Senior',
      majorLabel: 'Major', major: 'Future Automotive Engineering',
      goalLabel: 'Goal', goal: 'Software Engineer / AI Engineer',
      githubLabel: 'GitHub', emailLabel: 'Email',
    },
    sections: {
      projects: 'Projects', projectsDescription: 'A selection of things I have built or contributed to—from apps that solve everyday problems to web security and AI experiments.', showcaseTitle: 'Things I have built and contributed to', githubMore: 'More on GitHub',
      stack: 'Tech Stack', awards: 'Awards & Certifications', activities: 'Activities', blog: 'Learn & Share',
      blogTitle: 'Velog Tech Blog', blogDescription: 'Technical writing on development, security, and AI',
    },
    skills: [
      { name: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java'] }, { name: 'Web Frontend', items: ['React', 'HTML', 'CSS'] },
      { name: 'App Development', items: ['Jetpack Compose'] }, { name: 'Backend', items: ['FastAPI', 'Node.js', 'Firebase'] },
      { name: 'Security & AI', items: ['Ghidra', 'AI & ML', 'Robotics'] }, { name: 'Developer Tools', items: ['Docker', 'GitHub'] },
    ],
    projects: [
      { id: 'ghas', name: 'GHAS Alimi', description: 'A daily-life support app for students at Gyeonggi Automotive Science High School, bringing school meals and schedules together.', category: 'Student life · Mobile app', icon: Smartphone, color: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300', tags: ['Android', 'iOS', 'NEIS API'], links: [{ label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=kr.hs.ghas.ghason' }, { label: 'App Store', url: 'https://apps.apple.com/kr/app/ghas%EC%95%8C%EB%A6%AC%EB%AF%B8/id6779186783' }] },
      { id: 'lhlinux', name: 'lhLinux', description: 'An open-source WSL2 CLI distribution based on Ubuntu 24.04 LTS, designed as a development environment anyone can install and improve.', category: 'Linux · CLI · Ubuntu', icon: Terminal, color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200', tags: ['WSL2', 'CLI', 'Ubuntu'], links: [{ label: 'GitHub', url: 'https://github.com/luka0116kjh/lhlinux' }] },
      { id: 'gcpt', name: 'GCPT', description: 'Visualizes debates between GPT, Claude, and Gemini and analyzes their reasoning flows. I contributed to the design and parts of the implementation.', category: 'AI · Collaboration', icon: BrainCircuit, color: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300', tags: ['AI Debate', 'Visualization'], links: [{ label: 'GitHub', url: 'https://github.com/cksdud32/gcpt' }] },
    ],
    awards: [
      { date: '2026', title: 'ASIS CTF Quals 2026, Iran Tech Olympics CTF 2026', badge: '10th in qualifiers' }, { date: '2026.08.22', title: 'CCE Qualifiers', badge: '15th in qualifiers' },
      { date: '2026.07', title: 'Industrial Engineer Information Processing', badge: 'Passed' }, { date: '2026', title: 'COSS Youth Cyber Defense', badge: '7th in qualifiers' },
    ],
    moreAwards: [
      { date: '2026', title: 'Cyber Guardians CMX', badge: '18th by team' }, { date: '2026', title: 'SCA CTF', badge: '20th in finals' },
      { title: 'Presidential Robot Programming Contest', badge: '3rd place' }, { title: 'Hyundai AutoEver White Hat Hacker Contest', badge: 'Award winner' },
      { title: 'Future Algorithm Contest', badge: '2nd place' }, { title: 'School Portfolio Contest', badge: '3rd place', detail: 'Awarded in both freshman and sophomore years' }, { title: 'Volunteer Service Award', badge: 'Awarded' },
    ],
    activities: [
      { date: '2026', title: 'Null; Hacking Team', badge: 'Team lead' }, { date: '2026', title: 'Hwalbin Hacking Team', badge: 'Member' }, { date: '2025-2026', title: 'Visualcamp Apprenticeship', badge: 'Training' },
    ],
    moreActivities: [
      { date: '2026', title: 'Heureureu Application Platform', badge: 'Development' }, { date: '2026', title: 'Gyeonggi Youth Cybersecurity Camp', badge: 'Participant' },
      { date: '2026', title: 'The Ignition 2026 :: YHHS X Hashed', badge: 'Conference' }, { date: '2026', title: '.HACK Conference', badge: 'Conference' },
      { date: '2025', title: 'Hyundai AutoEver High School White Hat Hacker Program', badge: 'Training' }, { date: '2024–2026', title: 'Student Press & School Blog', badge: 'Student press' },
      { date: '2024–2025', title: 'Youth Operations Committee · Policy Division', badge: 'Committee member' }, { date: '2024', title: 'AI Startup Experience & Lectures', badge: 'Training' },
      { date: '2024', title: 'Naver Youth Creator School', badge: 'Training' }, { date: '2024', title: 'App Inventor & Maker Activities', badge: 'Project' },
    ],
    labels: { moreAwards: 'More awards & certifications', moreActivities: 'More activities & experience', more: 'Show more', collapse: 'Collapse', unknownDate: 'Date not listed', newTab: 'opens in a new tab' },
  },
}

function RecordList({ items, highlightFirst = false, tone = 'blue', unknownDateLabel }) {
  const badgeColors = tone === 'purple'
    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'

  return (
    <ul className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
      {items.map((award, index) => (
        <li
          key={award.title}
          className={`record-row px-5 sm:px-6 py-5 border-b border-gray-200 dark:border-gray-800 last:border-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
            highlightFirst && index === 0 ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500' : ''
          }`}
        >
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400" aria-label={award.date ? undefined : unknownDateLabel}>{award.date || '—'}</span>
          <div className="record-title text-sm text-gray-900 dark:text-white font-medium">
            <p>{award.title}</p>
            {award.detail && <p className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">{award.detail}</p>}
          </div>
          <span className={`text-xs font-bold px-3 py-1.5 rounded-lg border whitespace-nowrap ${badgeColors}`}>
            {award.badge}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function App() {
  const [showMoreAwards, setShowMoreAwards] = useState(false)
  const [showMoreActivities, setShowMoreActivities] = useState(false)
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('language') === 'en' ? 'en' : 'ko'
    } catch {
      return 'ko'
    }
  })
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('darkMode')
      if (saved === 'true' || saved === 'false') return saved === 'true'
    } catch { /* Fall back to the system theme if storage is unavailable. */ }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#08090b' : '#ffffff')
    try {
      localStorage.setItem('darkMode', JSON.stringify(isDark))
    } catch { /* Theme switching still works without persistent storage. */ }
  }, [isDark])

  const t = translations[language]
  const { profile, projects, skills, awards, moreAwards, activities, moreActivities, sections, labels } = {
    ...t,
    profile: t.profile,
    projects: t.projects,
    skills: t.skills,
    awards: t.awards,
    moreAwards: t.moreAwards,
    activities: t.activities,
    moreActivities: t.moreActivities,
    sections: t.sections,
    labels: t.labels,
  }

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'en' ? 'Jinhyeong Kim · Luka | Developer Portfolio' : '김진형 · Luka | 개발 포트폴리오'
    document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'en'
      ? 'Jinhyeong Kim (Luka)\'s developer portfolio featuring projects in software, AI, web security, and robotics.'
      : '김진형(Luka)의 개발 포트폴리오. GHAS 알리미, 웹 보안, AI 프로젝트와 대회·자격, 활동 기록을 소개합니다.')
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', language === 'en'
      ? 'A student developer turning curiosity into projects across software, AI, and cybersecurity.'
      : '호기심을 프로젝트로 만드는 학생 개발자. 웹·AI·보안 프로젝트와 성장의 기록.')
    try {
      localStorage.setItem('language', language)
    } catch { /* Language switching still works without persistent storage. */ }
  }, [language])

  return (
    <div className="portfolio-page min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-white transition-colors">
      <a className="skip-link" href="#main">{t.skipLink}</a>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 py-3 flex items-center justify-between gap-4 flex-wrap">
          <a href="#top" className="font-bold text-lg tracking-tight min-h-11 inline-flex items-center">Luka<span className="text-blue-600 dark:text-blue-400">.</span></a>
          <nav aria-label={t.navLabel} className="flex items-center gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-300 order-3 w-full justify-between sm:order-none sm:w-auto">
            <a href="#projects" className="py-2 hover:text-blue-600 dark:hover:text-blue-400">{t.nav.projects}</a>
            <a href="#awards" className="py-2 hover:text-blue-600 dark:hover:text-blue-400">{t.nav.awards}</a>
            <a href="#activities" className="py-2 hover:text-blue-600 dark:hover:text-blue-400">{t.nav.activities}</a>
          </nav>
          <button
            type="button"
            onClick={() => setLanguage((current) => current === 'ko' ? 'en' : 'ko')}
            aria-label={t.languageLabel}
            title={t.languageLabel}
            className="min-w-11 min-h-11 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-sm font-bold"
          >
            {t.languageButton}
          </button>
          <button
            type="button"
            onClick={() => setIsDark((current) => !current)}
            aria-label={isDark
              ? (language === 'en' ? 'Switch to light mode' : '라이트 모드로 전환')
              : (language === 'en' ? 'Switch to dark mode' : '다크 모드로 전환')}
            title={isDark
              ? (language === 'en' ? 'Switch to light mode' : '라이트 모드로 전환')
              : (language === 'en' ? 'Switch to dark mode' : '다크 모드로 전환')}
            className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main id="main" tabIndex={-1} className="flex-1">
        {/* Hero Cover */}
        <div id="top" aria-hidden="true" className="h-32 sm:h-40 bg-gradient-to-br from-blue-50 via-gray-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-dark-bg relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 dark:opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 pb-16">
          {/* Profile */}
          <div className="relative -mt-14 mb-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-2xl bg-gray-200 dark:bg-gray-800 border-4 border-white dark:border-dark-bg flex items-center justify-center text-3xl font-bold shadow-lg">
              LK
            </div>
          </div>

          {/* Profile Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {profile.koreanName} · {profile.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              {profile.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 text-sm font-semibold transition-colors">{language === 'en' ? 'View projects' : '프로젝트 보기'} <ArrowDown size={16} aria-hidden="true" /></a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 px-5 py-3 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">{language === 'en' ? 'Get in touch' : '연락하기'} <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>

          {/* Info Grid */}
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 sm:p-8 mb-8">
            <dl className="profile-details space-y-4 text-sm leading-relaxed">
              <div>
                <dt>{profile.schoolLabel}</dt>
                <dd className="font-medium">{profile.school}</dd>
              </div>
              <div>
                <dt>{profile.majorLabel}</dt>
                <dd className="font-medium">{profile.major}</dd>
              </div>
              <div>
                <dt>{profile.goalLabel}</dt>
                <dd className="font-medium">{profile.goal}</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd><a href={profile.github} target="_blank" rel="noreferrer" className="text-blue-700 dark:text-blue-400 underline underline-offset-4 font-medium">
                  @luka0116kjh
                </a></dd>
              </div>
              <div>
                <dt>{profile.emailLabel}</dt>
                <dd><a href={`mailto:${profile.email}`} className="text-blue-700 dark:text-blue-400 underline underline-offset-4 font-medium">
                  {profile.email}
                </a></dd>
              </div>
            </dl>
          </div>

          {/* Intro Callout */}
          <div className="bg-gray-900 dark:bg-gray-800 border border-gray-700 rounded-2xl p-5 sm:p-8 mb-12">
            <div className="flex gap-5 items-start">
              <span className="text-2xl text-blue-400 flex-shrink-0 mt-1">◇</span>
              <p className="text-gray-200 dark:text-gray-300 text-base leading-relaxed font-medium">
                {profile.bio}
              </p>
            </div>
          </div>

          <div className="mb-16">
            <MacTerminal profile={profile} skillCategories={skills} />
          </div>

          <ProjectShowcase projects={projects} github={profile.github} labels={sections} language={language} />

          {/* Tech Stack */}
          <section id="stack" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">{sections.stack}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((cat) => (
                <div key={cat.name}>
                  <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">{cat.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.items.map((skill) => (
                      <span key={skill} className="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-700 text-sm font-medium hover:-translate-y-1 transition-transform cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section id="awards" aria-labelledby="awards-heading" className="mb-16">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
              <h2 id="awards-heading" className="text-3xl font-bold text-gray-900 dark:text-white">{sections.awards}</h2>
              <button
                type="button"
                aria-expanded={showMoreAwards}
                aria-controls="more-awards"
                aria-label={showMoreAwards ? labels.collapse : `${labels.moreAwards} ${moreAwards.length}`}
                onClick={() => setShowMoreAwards((current) => !current)}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {showMoreAwards ? <ChevronUp size={18} aria-hidden="true" /> : <Ellipsis size={18} aria-hidden="true" />}
                {showMoreAwards ? labels.collapse : labels.more}
                <span className="rounded-md bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-xs">{moreAwards.length}</span>
              </button>
            </div>
            <RecordList items={awards} highlightFirst unknownDateLabel={labels.unknownDate} />
            <div id="more-awards" role="region" aria-labelledby="more-awards-heading" hidden={!showMoreAwards} className="mt-6">
              <h3 id="more-awards-heading" className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">{labels.moreAwards}</h3>
              <RecordList items={moreAwards} unknownDateLabel={labels.unknownDate} />
            </div>
          </section>

          {/* Activities */}
          <section id="activities" aria-labelledby="activities-heading" className="mb-16">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
              <h2 id="activities-heading" className="text-3xl font-bold text-gray-900 dark:text-white">{sections.activities}</h2>
              <button
                type="button"
                aria-expanded={showMoreActivities}
                aria-controls="more-activities"
                aria-label={showMoreActivities ? labels.collapse : `${labels.moreActivities} ${moreActivities.length}`}
                onClick={() => setShowMoreActivities((current) => !current)}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {showMoreActivities ? <ChevronUp size={18} aria-hidden="true" /> : <Ellipsis size={18} aria-hidden="true" />}
                {showMoreActivities ? labels.collapse : labels.more}
                <span className="rounded-md bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-xs">{moreActivities.length}</span>
              </button>
            </div>
            <RecordList items={activities} tone="purple" unknownDateLabel={labels.unknownDate} />
            <div id="more-activities" role="region" aria-labelledby="more-activities-heading" hidden={!showMoreActivities} className="mt-6">
              <h3 id="more-activities-heading" className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">{labels.moreActivities}</h3>
              <RecordList items={moreActivities} tone="purple" unknownDateLabel={labels.unknownDate} />
            </div>
          </section>

          {/* Blog */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">{sections.blog}</h2>
            <a
              href={profile.velog}
              target="_blank"
              rel="noreferrer"
              className="flex gap-5 items-start p-6 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:translate-x-1"
            >
              <span className="text-4xl flex-shrink-0">📝</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{sections.blogTitle}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{sections.blogDescription}</p>
              </div>
            </a>
          </section>

          {/* Footer */}
          <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">Made with curiosity. Always learning.</p>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-blue-500 border-b border-blue-500">GitHub</a>
              {' · '}
              <a href={profile.velog} target="_blank" rel="noreferrer" className="hover:text-blue-500 border-b border-blue-500">Velog</a>
              {' · '}
              <a href={`mailto:${profile.email}`} className="hover:text-blue-500 border-b border-blue-500">Email</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
