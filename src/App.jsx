import { useState, useEffect } from 'react'
import { ArrowDown, ArrowUpRight, ChevronUp, Plus, Moon, Sun } from 'lucide-react'
import MacTerminal from './MacTerminal.jsx'
import ProjectShowcase from './ProjectShowcase.jsx'
import './Portfolio.css'

const profile = {
  name: 'Luka',
  koreanName: '김진형',
  role: 'Programmer & Builder & Hacker',
  bio: '안녕하세요. 만들고, 부수고, 다시 배우며 성장하는 김진형입니다. 웹부터 AI, 로봇, 보안까지 궁금한 것을 직접 프로젝트로 만들어 봅니다.',
  github: 'https://github.com/luka0116kjh',
  velog: 'https://velog.io/@luka0116kjh/posts',
  email: 'kjh08116@naver.com',
  school: '경기자동차과학고등학교 3학년',
  major: '미래자동차과',
  goal: '소프트웨어 엔지니어 / AI 엔지니어 / 해커',
}

const skillCategories = [
  { name: '언어', items: ['Python', 'JavaScript', 'TypeScript', 'Java'] },
  { name: '웹 프론트엔드', items: ['React', 'HTML', 'CSS'] },
  { name: '앱 개발', items: ['Jetpack Compose'] },
  { name: '백엔드', items: ['FastAPI', 'Node.js', 'Firebase'] },
  { name: '보안 & AI', items: ['Ghidra', 'AI & ML', 'Robotics'] },
  { name: '개발 도구', items: ['Docker', 'GitHub'] },
]

const projects = [
  {
    id: 'ghas',
    name: 'GHAS 알리미',
    description: '경기자동차과학고 학생들을 위한 생활 지원 앱입니다. 급식과 시간표를 한곳에서 확인할 수 있습니다.',
    category: '학교생활 · 모바일 앱',
    tags: ['Android', 'iOS', 'NEIS API'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=kr.hs.ghas.ghason' },
      { label: 'App Store', url: 'https://apps.apple.com/kr/app/ghas%EC%95%8C%EB%A6%AC%EB%AF%B8/id6779186783' },
    ],
  },
  {
    id: 'lhlinux',
    name: 'lhLinux',
    description: '누구나 설치하고 개선할 수 있는 Ubuntu 24.04 LTS 기반 오픈소스 WSL2 CLI 배포판 프로젝트입니다.',
    category: 'linux · CLI · ubuntu',
    tags: ['WSL2', 'CLI', 'Ubuntu'],
    links: [
      { label: 'GitHub', url: 'https://github.com/luka0116kjh/lhlinux' },
    ],
  },
  {
    id: 'gcpt',
    name: 'GCPT',
    description: 'GPT, Claude, Gemini의 토론을 시각화하고 추론 흐름을 분석합니다. 디자인과 일부 기능 구현에 참여했습니다.',
    category: 'AI · 협업 프로젝트',
    tags: ['AI Debate', '시각화'],
    links: [
      { label: 'GitHub', url: 'https://github.com/cksdud32/gcpt' },
    ],
  },
]

const awards = [
  { date: '2026', title: 'ASIS CTF Quals 2026, Iran Tech Olympics CTF 2026', badge: '예선 10등' },
  { date: '2026.08.22', title: 'CCE 예선전', badge: '예선 15등' },
  { date: '2026.07', title: '정보처리산업기사', badge: '합격' },
  { date: '2026', title: 'COSS 청소년 사이버 해킹방어', badge: '예선 7등' },
]

const moreAwards = [
  { date: '2026', title: '사이버가디언즈 CMX', badge: '팀별 18등' },
  { date: '2026', title: 'SCA CTF', badge: '본선 20등' },
  { title: '총장배 로봇 프로그래밍 경진대회', badge: '3등' },
  { title: '현대오토에버 화이트해커 경진대회', badge: '입상' },
  { title: '미래를 그리는 알고리즘 경진대회', badge: '2등' },
  { title: '교내 포트폴리오 경진대회', badge: '3등', detail: '1·2학년 연속 수상' },
  { title: '봉사 부문 표창', badge: '수상' },
]

const activities = [
  { date: '2026', title: 'Null; 해킹팀', badge: '팀 리더' },
  { date: '2026', title: 'Hwalbin 해킹팀', badge: '팀원' },
  { date: '2025-2026', title: '비주얼캠프 도제활동', badge: '교육' },
]

const moreActivities = [
  { date: '2026', title: '흐르르 애플리케이션 플랫폼', badge: '개발' },
  { date: '2026', title: '경기 청소년 사이버 보안 캠프', badge: '참여' },
  { date: '2026', title: 'The Ignition 2026 :: YHHS X Hashed', badge: '컨퍼런스' },
  { date: '2026', title: '.HACK 컨퍼런스', badge: '컨퍼런스' },
  { date: '2025', title: '현대오토에버 고교생 IT 꿈나무 화이트해커', badge: '교육' },
  { date: '2024–2026', title: '학생기자단과 학교 블로그', badge: '기자단' },
  { date: '2024–2025', title: '청소년운영위원회 정책부', badge: '위원' },
  { date: '2024', title: '인공지능 창업체험과 특강', badge: '교육' },
  { date: '2024', title: '네이버 청소년 크리에이터 스쿨', badge: '교육' },
  { date: '2024', title: '앱인벤터·메이커 활동', badge: '프로젝트' },
]

function RecordList({ items }) {
  return (
    <ul className="record-list">
      {items.map((item) => (
        <li key={item.title} className="record-row">
          <span className="record-date" aria-label={item.date ? undefined : '연도 미기재'}>{item.date || '—'}</span>
          <div className="record-title"><p>{item.title}</p>{item.detail && <p className="record-detail">{item.detail}</p>}</div>
          <span className="record-badge">{item.badge}</span>
        </li>
      ))}
    </ul>
  )
}

function SectionHeading({ id, children, aside }) {
  return <div className="section-heading"><h2 id={id}>{children}</h2><span className="heading-line" aria-hidden="true" />{aside}</div>
}

function MoreButton({ expanded, onClick, target, count, label }) {
  return (
    <button type="button" className="more-button" aria-expanded={expanded} aria-controls={target}
      aria-label={expanded ? `추가 ${label} 기록 접기` : `추가 ${label} 기록 ${count}개 더 보기`} onClick={onClick}>
      {expanded ? <ChevronUp size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
      {expanded ? '접기' : `더 보기 (${count})`}
    </button>
  )
}

export default function App() {
  const [showMoreAwards, setShowMoreAwards] = useState(false)
  const [showMoreActivities, setShowMoreActivities] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('darkMode')
      if (saved === 'true' || saved === 'false') return saved === 'true'
    } catch { /* Theme switching works without storage. */ }
    return true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#0a0a0a' : '#fafafa')
    try { localStorage.setItem('darkMode', JSON.stringify(isDark)) } catch { /* Storage is optional. */ }
  }, [isDark])

  return (
    <div className="portfolio-page">
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <header className="site-header">
        <div className="portfolio-container header-inner">
          <a href="#top" className="site-logo" aria-label="Luka 홈"><span aria-hidden="true">◆</span> luka</a>
          <nav aria-label="주요 메뉴">
            <a href="#about">소개</a><a href="#stack">기술</a><a href="#projects">프로젝트</a><a href="#contact">연락처</a>
          </nav>
          <button type="button" className="theme-toggle" onClick={() => setIsDark((current) => !current)}
            aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'} title={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}>
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>
      <main id="main" tabIndex={-1} className="portfolio-container">
        <section id="top" className="portfolio-hero" aria-labelledby="hero-heading">
          <p className="hero-kicker">안녕하세요, 저는</p>
          <h1 id="hero-heading">Luka<span>예요.</span></h1>
          <p className="hero-tagline">만들고, 탐구하고, 배웁니다<span className="hero-period">.</span></p>
          <p className="hero-description">생활 속 작은 불편을 코드로 해결하는 학생 개발자 김진형입니다.{' '}<br className="desktop-break" />
            <strong>직접 쓸 수 있는 도구</strong>를 만들고, <strong>웹 보안과 AI</strong>를 탐구하며<br className="desktop-break" /> 배운 것들을 프로젝트와 글로 남깁니다.</p>
          <div className="hero-actions">
            <a href="#projects" className="primary-link">프로젝트 보기<ArrowDown size={16} aria-hidden="true" /></a>
            <a href="#contact" className="outline-link">contact <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="portfolio-section about-section">
          <SectionHeading id="about-heading">소개</SectionHeading>
          <div className="about-intro">
            <div className="about-prose"><p>{profile.bio}</p><p>학교생활을 돕는 <strong>GHAS 알리미</strong>부터 오픈소스 Linux 환경, AI 토론 시각화까지. 궁금한 것을 직접 만들며 제 관심사의 범위를 넓혀가고 있습니다.</p><p className="about-location">South Korea <span>·</span> UTC+9</p></div>
            <dl className="about-facts"><div><dt>학교</dt><dd>{profile.school}</dd></div><div><dt>전공</dt><dd>{profile.major}</dd></div><div><dt>목표</dt><dd>{profile.goal}</dd></div></dl>
          </div>
          <MacTerminal profile={profile} skillCategories={skillCategories} />
        </section>

        <section id="stack" aria-labelledby="stack-heading" className="portfolio-section">
          <SectionHeading id="stack-heading">주로 쓰는 기술</SectionHeading>
          <div className="stack-grid">{skillCategories.map((category) => (
            <div className="stack-group" key={category.name}><h3>{category.name}</h3><ul className="stack-items">{category.items.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
          ))}</div>
        </section>

        <ProjectShowcase projects={projects} github={profile.github} />

        <section id="awards" aria-labelledby="awards-heading" className="portfolio-section">
          <SectionHeading id="awards-heading" aside={<MoreButton expanded={showMoreAwards} onClick={() => setShowMoreAwards((v) => !v)} target="more-awards" count={moreAwards.length} label="대회·수상" />}>대회 · 자격</SectionHeading>
          <RecordList items={awards} />
          <div id="more-awards" role="region" aria-label="더 많은 대회·수상 기록" hidden={!showMoreAwards}><RecordList items={moreAwards} /></div>
        </section>

        <section id="activities" aria-labelledby="activities-heading" className="portfolio-section">
          <SectionHeading id="activities-heading" aside={<MoreButton expanded={showMoreActivities} onClick={() => setShowMoreActivities((v) => !v)} target="more-activities" count={moreActivities.length} label="활동" />}>활동</SectionHeading>
          <RecordList items={activities} />
          <div id="more-activities" role="region" aria-label="더 많은 활동·경험 기록" hidden={!showMoreActivities}><RecordList items={moreActivities} /></div>
        </section>

        <section className="portfolio-section" aria-labelledby="journal-heading">
          <SectionHeading id="journal-heading">배우고 기록하기</SectionHeading>
          <a href={profile.velog} target="_blank" rel="noreferrer" className="journal-link"><div><h3>Velog 기술 블로그</h3><p>개발, 보안, AI를 탐구하며 배운 것들을 기록합니다.</p></div><ArrowUpRight size={20} aria-hidden="true" /></a>
        </section>

        <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-heading">
          <SectionHeading id="contact-heading">연락하기</SectionHeading>
          <p className="contact-copy">함께 만들고 싶은 프로젝트가 있나요?<br />개발 이야기부터 가벼운 인사까지, 편하게 연락해 주세요.</p>
          <a className="outline-link contact-cta" href={`mailto:${profile.email}`}>인사 보내기 <span aria-hidden="true">→</span></a>
          <ul className="social-links">
            <li><a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><span>@luka0116kjh</span><ArrowUpRight size={17} aria-hidden="true" /></a></li>
            <li><a href={`mailto:${profile.email}`}><span>Email</span><span>{profile.email}</span><ArrowUpRight size={17} aria-hidden="true" /></a></li>
            <li><a href={profile.velog} target="_blank" rel="noreferrer"><span>Velog</span><span>@luka0116kjh</span><ArrowUpRight size={17} aria-hidden="true" /></a></li>
          </ul>
        </section>
      </main>
      <footer className="site-footer"><div className="portfolio-container"><p>© {new Date().getFullYear()} Luka</p><p>Made with curiosity. Always learning.</p><a href="#top">맨 위로 ↑</a></div></footer>
    </div>
  )
}
