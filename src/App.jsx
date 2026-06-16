import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Menu,
  TerminalSquare,
  Trophy,
  X,
} from 'lucide-react'
import './App.css'

const MotionDiv = motion.div

const GithubIcon = ({ size = 18 }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a12.9 12.9 0 0 0-8 0C6 2 5 2 5 2a6.6 6.6 0 0 0 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5A4.8 4.8 0 0 0 9 18v4" />
    <path d="M9 18c-4.5 2-5-2-7-2" />
  </svg>
)

const profile = {
  name: 'Luka',
  shortName: 'LK',
  affiliation: 'Student',
  role: 'Programmer & Builder',
  bio: '안녕하세요. 만들고, 부수고, 다시 배우며 성장하는 김진형입니다. 웹부터 AI, 로봇, 보안까지 궁금한 것을 직접 프로젝트로 만들어 봅니다.',
  github: 'https://github.com/luka0116kjh',
  email: 'mailto:kjh08116@naver.com',
}

const skills = [
  'Python',
  'JavaScript',
  'React',
  'TypeScript',
  'Java',
  'HTML / CSS',
  'AI & Machine Learning',
  'Robotics',
  'Git / GitHub',
]

const achievementHistory = [
  {
    year: 'AWARDS',
    items: [
      { date: 'ROBOT', title: '총장배 로봇 프로그래밍 경진대회', detail: 'LEGO EV3 자율주행 미션 · 3등', award: true },
      { date: 'CTF', title: '현대오토에버 화이트해커 경진대회', detail: '교육 수료 · 장학금 수상 · 대회 입상', award: true },
    ],
  },
  {
    year: 'SCHOOL',
    items: [
      { date: 'IDEA', title: '미래를 그리는 알고리즘 경진대회', detail: '아이디어와 구현 과정을 인정받아 2등', award: true },
      { date: 'PORT', title: '교내 포트폴리오 경진대회', detail: '1·2학년 연속 3등', award: true },
      { date: 'SERVICE', title: '봉사 부문 표창', detail: '학교 안에서 꾸준히 참여하고 기여한 기록', award: true },
    ],
  },
]

const activities = [
  {
    year: '2026',
    items: [
      { date: '2026', title: '2026 SW미래채움 고교 AI·SW 챌린지 대회', detail: '프로그램 참여중' },
      { date: '2026', title: '경기 청소년 사이버 보안 캠프', detail: '프로그램 참여중' },
      { date: 'RELEASE', title: 'GHAS 알리미 출시', detail: '급식과 시간표 정보를 제공하는 학교생활 웹앱을 Google Play, App Store(곧 출시)에 출시' },
      { date: '2026', title: 'The Ignition 2026 :: YHHS X Hashed', detail: '컨퍼런스 참여' },
      { date: '2026', title: '.HACK 컨퍼런스', detail: '컨퍼런스 참여' },
      { date: '2025-2026', title: '비주얼캠프 도제활동', detail: '웹·애플리케이션 개발, 알고리즘 학습과 문서화' },
    ],
  },
  {
    year: '2025',
    items: [
      { date: '2024—25', title: '청소년운영위원회 정책부', detail: '청소년의 관점으로 의견을 모으고 정책을 고민' },
      { date: '2025', title: '현대오토에버와 함께하는 고교생 IT 꿈나무 화이트해커', detail: '화이트해커 교육 과정 수료' },
    ],
  },
  {
    year: '2024',
    items: [
      { date: '2024', title: '인공지능 창업체험과 특강', detail: '기술을 아이디어와 서비스로 연결하는 경험' },
      { date: '2024', title: '네이버 청소년 크리에이터 스쿨', detail: '공모전 참여와 교육 과정 수료' },
      { date: '2024', title: '앱인벤터·메이커 활동', detail: '작은 아이디어를 실제로 움직이는 결과물로 제작' },
      { date: '2024—26', title: '학생기자단과 학교 블로그', detail: '학교의 이야기를 취재하고 글로 기록' },
    ],
  },
]

const projects = [
  {
    name: 'GHAS 알리미',
    description: '나이스 오픈 API를 연동해 경기자동차과학고의 급식및 시간표 정보를 제공하는 웹 앱 제작했습니다.',
    stack: ['application', 'NEIS API', 'Web'],
    link: 'https://play.google.com/store/apps/details?id=kr.hs.ghas.ghason&hl=ko',
    accent: 'blue',
  },
  {
    name: 'waf',
    description: 'FastAPI 기반의 간단한 WAF 분석 서버와 Chrome 확장 프로그램을 결합한 실시간 웹 위험 감지 프로젝트입니다.',
    stack: ['Server', 'FastAPI', 'Web Extension'],
    link: 'https://github.com/luka0116kjh/waf',
    accent: 'violet',
  },
  {
    name: '양문고 웹앱(제작중)',
    description: '양문고 학생들이 학교 관련 정보를 더욱 편리하게 확인할 수 있도록 기획하고 제작한 웹 애플리케이션입니다.',
    stack: ['Web App', 'JavaScript', 'UI / UX'],
    link: 'https://github.com/luka0116kjh',
    accent: 'cyan',
  },
  {
    name: 'GHAS Blog',
    description: '학교 소식과 기술 기록을 학생들이 쉽고 빠르게 읽을 수 있도록 만든 블로그형 웹 서비스입니다.',
    stack: ['React', 'Firebase', 'Vite'],
    link: 'https://ghasblog-8099b-47309.web.app/',
    accent: 'green',
  },
]

const terminalResponses = {
  help: [
    'Available commands:',
    '  about     who I am',
    '  skills    my technical toolkit',
    '  projects  things I have built',
    '  contact   where to find me',
    '  clear     clear this terminal',
  ],
  about: [
    `${profile.name} — ${profile.affiliation}`,
    profile.role,
    '',
    profile.bio,
  ],
  skills: skills.map((skill, index) => `${String(index + 1).padStart(2, '0')}  ${skill}`),
  projects: projects.map((project) => `→ ${project.name}`),
  contact: [`GitHub  ${profile.github}`, 'Email   kjh08116@naver.com'],
}

function FadeIn({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  return (
    <MotionDiv
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionDiv>
  )
}

function Terminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'system', lines: ['Portfolio shell v1.0.0', 'Type "help" to see available commands.'] },
  ])
  const inputRef = useRef(null)
  const bodyRef = useRef(null)

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [history])

  const runCommand = (event) => {
    event.preventDefault()
    const rawCommand = input.trim()
    const command = rawCommand.toLowerCase()

    if (!rawCommand) return
    if (command === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    const lines = terminalResponses[command] || [`command not found: ${rawCommand}`]
    setHistory((current) => [...current, { type: 'command', command: rawCommand, lines }])
    setInput('')
  }

  return (
    <div className="terminal-shell" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-bar">
        <div className="terminal-dots" aria-hidden="true">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="terminal-title">guest@portfolio: ~</span>
        <TerminalSquare size={15} aria-hidden="true" />
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {history.map((entry, index) => (
          <div className="terminal-entry" key={`${entry.type}-${index}`}>
            {entry.command && (
              <div className="terminal-command">
                <span className="prompt">visitor@luka:~$</span> {entry.command}
              </div>
            )}
            {entry.lines.map((line, lineIndex) => (
              <div
                className={entry.type === 'system' && lineIndex === 0 ? 'terminal-highlight' : 'terminal-output'}
                key={`${line}-${lineIndex}`}
              >
                {line || '\u00a0'}
              </div>
            ))}
          </div>
        ))}
        <form className="terminal-input-row" onSubmit={runCommand}>
          <label className="prompt" htmlFor="terminal-input">visitor@luka:~$</label>
          <input
            id="terminal-input"
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            autoComplete="off"
            autoCapitalize="none"
            spellCheck="false"
            aria-label="Terminal command"
          />
          <span className="terminal-cursor" aria-hidden="true" />
        </form>
      </div>
    </div>
  )
}

function Timeline({ groups, awards = false }) {
  return (
    <div className="timeline">
      {groups.map((group) => (
        <div className="timeline-group" key={group.year}>
          <div className="timeline-year">{group.year}</div>
          <div className="timeline-items">
            {group.items.map((item) => (
              <div className="timeline-item" key={`${item.date}-${item.title}`}>
                <span className="timeline-dot" />
                <time>{item.date}</time>
                <div>
                  <h3 className={item.award ? 'award-title' : ''}>
                    {awards && item.award && <Trophy size={15} aria-hidden="true" />}
                    {item.title}
                  </h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div className="eyebrow"><span>/</span> {eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="background-grid" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Back to top">
          <span className="brand-mark">&lt;{profile.shortName}/&gt;</span>
          <span>{profile.name}</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#history" onClick={closeMenu}>History</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="nav-github">
            <GithubIcon size={17} /> GitHub
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-glow" aria-hidden="true" />
          <FadeIn className="hero-copy">
            <div className="status-pill"><span /> AVAILABLE FOR NEW PROJECTS</div>
            <p className="hero-greeting">Hello, I am</p>
            <h1>{profile.name}<span>.</span></h1>
            <p className="hero-role">
              {profile.affiliation} <span>//</span> {profile.role}
            </p>
            <p className="hero-bio">{profile.bio}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View projects <ArrowDown size={17} />
              </a>
              <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon size={18} /> GitHub
              </a>
            </div>
          </FadeIn>
          <FadeIn className="hero-terminal" delay={0.15}>
            <Terminal />
          </FadeIn>
          <div className="scroll-cue" aria-hidden="true">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </div>
        </section>

        <section className="section intro-section" id="about">
          <FadeIn>
            <SectionHeading
              eyebrow="PROFILE"
              title="호기심을 결과물로."
              description="웹, AI, 로봇, 보안을 한 가지 길로 제한하지 않습니다. 궁금한 것을 배우고 직접 만들며, 그 과정을 기록하는 학생 개발자입니다."
            />
          </FadeIn>
          <FadeIn className="skills-row" delay={0.08}>
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </FadeIn>
        </section>

        <section className="section history-section" id="history">
          <FadeIn>
            <SectionHeading
              eyebrow="01 — ACHIEVEMENTS"
              title="도전하며 남긴 기록"
              description="대회와 학교 활동 속에서 아이디어를 구현하고, 끝까지 다듬으며 얻은 결과들입니다."
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <Timeline groups={achievementHistory} awards />
          </FadeIn>
        </section>

        <section className="section activity-section">
          <FadeIn>
            <SectionHeading
              eyebrow="02 — EXPERIENCE"
              title="활동과 경험"
              description="교육과 컨퍼런스, 기자단, 대외활동에 참여하며 기술뿐 아니라 협업하고 기록하며 생각을 나누는 방법을 배웠습니다."
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <Timeline groups={activities} />
          </FadeIn>
        </section>

        <section className="section projects-section" id="projects">
          <FadeIn>
            <SectionHeading
              eyebrow="03 — SELECTED WORK"
              title="직접 만든 프로젝트"
              description="학교생활의 작은 불편부터 개인적인 목표까지, 필요와 호기심에서 출발해 실제로 작동하는 서비스로 만들었습니다."
            />
          </FadeIn>
          <div className="project-grid">
            {projects.map((project, index) => (
              <FadeIn delay={index * 0.06} key={project.name}>
                <a className="project-card" href={project.link} target="_blank" rel="noreferrer">
                  <div className={`project-icon ${project.accent}`}>
                    <Braces size={24} />
                  </div>
                  <ArrowUpRight className="project-arrow" size={22} />
                  <p className="project-index">PROJECT / {String(index + 1).padStart(2, '0')}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <FadeIn>
            <p className="contact-kicker">LET'S MAKE SOMETHING</p>
            <h2>호기심에서 시작해,<br /><span>작동하는 결과로 만듭니다.</span></h2>
            <p>새로운 프로젝트, 재미있는 아이디어, 함께 배우는 기회라면 언제든 환영합니다.</p>
            <a className="button primary" href={profile.email}>
              Start a conversation <ArrowUpRight size={18} />
            </a>
          </FadeIn>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">&lt;{profile.shortName}/&gt;</span>
          <span>Designed & built with curiosity.</span>
        </div>
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  )
}
