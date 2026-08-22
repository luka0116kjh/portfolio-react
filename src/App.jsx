import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import './App.css'

const GithubIcon = ({ size = 18 }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const VelogIcon = ({ size = 18 }) => (
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
    <path d="M6.5 7.5h3.2l2.3 7 2.3-7h3.2" />
    <path d="M9.7 7.5 12 14.5l2.3-7" />
  </svg>
)

const GooglePlayIcon = ({ size = 18 }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M3.609 1.05L13.499 11l9.91-9.95A1.5 1.5 0 0 0 21.5 0H2.5a1.5 1.5 0 0 0-1.5 1.5v21c0 .787.604 1.44 1.375 1.5L13.5 13 3.609 1.05Z" />
    <path d="m13.499 11 9.91 9.95a1.5 1.5 0 0 0 1.09-.55l-9.91-9.4-1.09 0Z" opacity="0.12" />
  </svg>
)

const AppleAppStoreIcon = ({ size = 18 }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C4.25 17.12 2.94 12.29 4.7 9.26c.87-1.58 2.44-2.58 4.12-2.61 1.28-.02 2.5.87 3.35.87.86 0 2.72-1.08 4.56-.91 1.63.12 3.17.71 4.32 1.88-1.34.81-2.15 2.04-2.04 3.44.13 1.65 1.23 2.77 2.75 2.91-1.08 1.53-2.71 2.37-4.37 2.47Z" />
    <path d="M12 2c.78 0 1.52-.12 2.23-.35-.62.82-1.05 1.78-1.05 2.85 0 .42.06.83.16 1.23-.41-.02-.83-.05-1.25-.05-1.72 0-3.37.54-4.75 1.53 1.39-2.33 3.89-3.88 6.66-3.88Z" />
  </svg>
)

const profile = {
  name: 'Luka',
  shortName: 'LK',
  koreanName: '김진형',
  affiliation: 'Student',
  role: 'Programmer & Builder',
  bio: '안녕하세요. 만들고, 부수고, 다시 배우며 성장하는 김진형입니다. 웹부터 AI, 로봇, 보안까지 궁금한 것을 직접 프로젝트로 만들어 봅니다.',
  intro: '프로젝트 아이디어부터 개발, 배포까지 모든 과정을 직접 하는 것을 좋아합니다. 실제 사용자가 사용하는 서비스를 만들고, 보안과 AI를 계속 공부하고 있습니다.',
  github: 'https://github.com/luka0116kjh',
  velog: 'https://velog.io/@luka0116kjh/posts',
  email: 'kjh08116@naver.com',
  school: '경기자동차과학고등학교 3학년',
  major: '미래자동차과과',
  goal: '소프트웨어 엔지니어 / AI 엔지니어 / 보안 전문가',
}

const skillCategories = [
  {
    name: '언어',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Kotlin'],
  },
  {
    name: '프론트엔드',
    items: ['React', 'Jetpack Compose', 'HTML / CSS'],
  },
  {
    name: '백엔드 / 인프라',
    items: ['FastAPI', 'Node.js', 'Firebase', 'Oracle SQL', 'Docker'],
  },
  {
    name: '보안 / AI',
    items: ['Ghidra', 'AI & Machine Learning', 'Robotics', 'Git / GitHub'],
  },
]

const skills = [
  'Python', 'JavaScript', 'React', 'TypeScript', 'Java', 'HTML / CSS',
  'AI & Machine Learning', 'Robotics', 'Git / GitHub', 'FastAPI', 'Node.js',
  'Firebase', 'Oracle SQL', 'Ghidra', 'Docker', 'Kotlin', 'Jetpack Compose',
]

const projects = [
  {
    name: 'GHAS 알리미',
    description: '경기자동차과학고 학생들을 위한 학교 생활 지원 웹 애플리케이션입니다. 급식 및 시간표 기능을 제공하며, Google Play와 App Store에 출시되어 있습니다.',
    stack: ['Application', 'NEIS API', 'Android', 'iOS'],
    storeLinks: [
      { label: 'Android', url: 'https://play.google.com/store/apps/details?id=kr.hs.ghas.ghason&pli=1' },
      { label: 'App Store', url: 'https://apps.apple.com/kr/app/ghas%EC%95%8C%EB%A6%AC%EB%AF%B8/id6779186783' },
    ],
    status: 'complete',
    statusLabel: '출시 완료',
    icon: '📱',
    links: [
      { label: 'Android', url: 'https://play.google.com/store/apps/details?id=kr.hs.ghas.ghason&pli=1', icon: 'GooglePlay' },
      { label: 'iOS', url: 'https://apps.apple.com/kr/app/ghas%EC%95%8C%EB%A6%AC%EB%AF%B8/id6779186783', icon: 'AppStore' },
    ],
  },
  {
    name: 'WAF Guard',
    description: 'FastAPI 기반의 간단한 WAF 분석 서버와 Chrome 확장 프로그램을 결합한 실시간 웹 위험 감지 프로젝트입니다.',
    stack: ['Server', 'FastAPI', 'Web Extension'],
    status: 'ongoing',
    statusLabel: '진행 중',
    icon: '🛡️',
    links: [
      { label: 'GitHub', url: 'https://github.com/luka0116kjh/waf', icon: 'GitHub' },
    ],
  },
  {
    name: 'GCPT',
    description: 'GPT, Claude, Gemini 간의 토론 과정을 시각화하고 추론 흐름을 분석하는 AI 시스템입니다.',
    stack: ['AI Debate', 'Reasoning Analysis', 'GPT / Claude / Gemini'],
    status: 'project',
    statusLabel: '프로젝트',
    icon: '🤖',
    links: [
      { label: 'GitHub', url: 'https://github.com/cksdud32/gcpt', icon: 'GitHub' },
    ],
  },
]

const awardData = [
  {
    date: '2026.08.22',
    title: 'cce 예선전',
    badge: '예선 15등',
    badgeColor: 'red',
    highlight: true,
  },
  {
    date: '2026.07',
    title: '정보처리산업기사 취득',
    badge: '합격',
    badgeColor: 'blue',
    highlight: true,
  },
  {
    date: '2026',
    title: '아주대학교 COSS 청소년 사이버 해킹방어대회',
    badge: '예선 7등',
    badgeColor: 'red',
    highlight: true,
  },
  {
    date: '2026',
    title: '사이버가디언즈 CMX',
    badge: '팀별 18등',
    badgeColor: 'red',
  },
  {
    date: '2026',
    title: 'SCA CTF',
    badge: '본선 20등',
    badgeColor: 'red',
  },
  {
    date: '상시',
    title: '총장배 로봇 프로그래밍 경진대회',
    badge: '3등',
    badgeColor: 'orange',
  },
  {
    date: '상시',
    title: '현대오토에버 화이트해커 경진대회',
    badge: '입상',
    badgeColor: 'red',
  },
  {
    date: '상시',
    title: '미래를 그리는 알고리즘 경진대회',
    badge: '2등',
    badgeColor: 'orange',
  },
  {
    date: '상시',
    title: '교내 포트폴리오 경진대회',
    badge: '3등',
    badgeColor: 'orange',
  },
  {
    date: '상시',
    title: '봉사 부문 표창',
    badge: '수상',
    badgeColor: 'teal',
  },
]

const upcomingCompetitions = [
  {
    date: '2026.08.29 ~ 30',
    title: 'BlackHat MEA CTF 예선',
    time: '8월 29일 오후 4:00 ~ 8월 30일 오후 4:00',
    badge: '준비중',
    badgeColor: 'red',
  },
  {
    date: '2026.08.29 ~ 30',
    title: 'ASIS CTF Quals 2026',
    time: '8월 29일 오후 11:00 ~ 8월 30일 오후 11:00',
    badge: '준비중',
    badgeColor: 'red',
  },
  {
    date: '2026.09.04',
    title: '제 7회 JBU-CTF',
    time: '종일',
    badge: '준비중',
    badgeColor: 'red',
  },
  {
    date: '2026.09.05',
    title: '보안캠프 본선대회',
    time: '종일',
    badge: '준비중',
    badgeColor: 'red',
  },
]

const activityData = [
  {
    date: '2026',
    title: 'Null; 해킹팀 창설',
    badge: '팀 리더',
    badgeColor: 'purple',
  },
  {
    date: '2026',
    title: 'Hwalbin 해킹팀',
    badge: '팀원',
    badgeColor: 'purple',
  },
  {
    date: '2026',
    title: '흐르르 애플리케이션 플랫폼',
    badge: '개발',
    badgeColor: 'green',
  },
  {
    date: '2026',
    title: '경기 청소년 사이버 보안 캠프',
    badge: '참여 중',
    badgeColor: 'blue',
  },
  {
    date: '2026',
    title: 'The Ignition 2026 :: YHHS X Hashed',
    badge: '컨퍼런스',
    badgeColor: 'indigo',
  },
  {
    date: '2026',
    title: '.HACK 컨퍼런스',
    badge: '컨퍼런스',
    badgeColor: 'indigo',
  },
  {
    date: '2025-2026',
    title: '비주얼캠프 도제활동',
    badge: '교육',
    badgeColor: 'green',
  },
  {
    date: '2024-25',
    title: '청소년운영위원회 정책부',
    badge: '위원',
    badgeColor: 'teal',
  },
  {
    date: '2025',
    title: '현대오토에버 고교생 IT 꿈나무 화이트해커',
    badge: '교육',
    badgeColor: 'orange',
  },
  {
    date: '2024',
    title: '인공지능 창업체험과 특강',
    badge: '교육',
    badgeColor: 'green',
  },
  {
    date: '2024',
    title: '네이버 청소년 크리에이터 스쿨',
    badge: '교육',
    badgeColor: 'orange',
  },
  {
    date: '2024',
    title: '앱인벤터·메이커 활동',
    badge: '프로젝트',
    badgeColor: 'blue',
  },
  {
    date: '2024-2026',
    title: '학생기자단과 학교 블로그',
    badge: '기자단',
    badgeColor: 'teal',
  },
]

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) return JSON.parse(saved)
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.title = 'Luka Kim — Developer Portfolio'
  }, [])

  useEffect(() => {
    const appLayout = document.querySelector('.app-layout')
    if (darkMode) {
      appLayout?.classList.add('dark')
      appLayout?.classList.remove('light')
    } else {
      appLayout?.classList.add('light')
      appLayout?.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={`app-layout ${darkMode ? 'dark' : 'light'}`}>
      {/* Header with Theme Toggle */}
      <header className="notion-header">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? 'Light mode' : 'Dark mode'}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Main Content */}
      <main className="notion-main">
        {/* Navy Cover */}
        <div className="notion-cover" />

        {/* Content Container */}
        <div className="notion-container">
          {/* Profile Icon */}
          <div className="profile-icon-wrapper">
            <div className="profile-icon">LK</div>
          </div>

          {/* Profile Header */}
          <section className="profile-header">
            <h1 className="profile-name">{profile.koreanName} · {profile.name}</h1>
            <p className="profile-subtitle">소프트웨어 개발 · AI · 보안을 공부하는 학생 개발자</p>
          </section>

          {/* Profile Information */}
          <section className="profile-info">
            <div className="info-row">
              <span className="info-icon">🏫</span>
              <span className="info-label">학교</span>
              <span className="info-value">{profile.school}</span>
            </div>
            <div className="info-row">
              <span className="info-icon">💻</span>
              <span className="info-label">전공</span>
              <span className="info-value">{profile.major}</span>
            </div>
            <div className="info-row">
              <span className="info-icon">🎯</span>
              <span className="info-label">목표</span>
              <span className="info-value">{profile.goal}</span>
            </div>
            <div className="info-row">
              <span className="info-icon">⌘</span>
              <span className="info-label">GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="info-value link">
                @luka0116kjh
              </a>
            </div>
            <div className="info-row">
              <span className="info-icon">✉️</span>
              <span className="info-label">연락</span>
              <a href={`mailto:${profile.email}`} className="info-value link">
                이메일 연결
              </a>
            </div>
          </section>

          {/* Divider */}
          <div className="divider" />

          {/* Introduction Callout */}
          <section className="callout-section">
            <div className="callout">
              <div className="callout-icon">◇</div>
              <div className="callout-content">
                <p>{profile.intro}</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="projects-section">
            <h2 className="section-title">프로젝트</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="project-card"
                  onClick={() => {
                    if (project.link) window.open(project.link, '_blank')
                    else if (project.storeLinks?.length) window.open(project.storeLinks[0].url, '_blank')
                  }}
                >
                  <div className="project-cover" style={{ background: getProjectColor(project.name) }}>
                    <div className="project-icon">{project.icon}</div>
                  </div>
                  <div className="project-body">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-links">
                      {project.links?.map((link) => {
                        const renderIcon = () => {
                          if (link.icon === 'GitHub') return <GithubIcon size={14} />
                          if (link.icon === 'GooglePlay') return <GooglePlayIcon size={14} />
                          if (link.icon === 'AppStore') return <AppleAppStoreIcon size={14} />
                          return null
                        }
                        return (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link-badge"
                            style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                          >
                            {renderIcon()}
                            {link.label}
                          </a>
                        )
                      })}
                    </div>
                    <div className="project-status">
                      <span className={`status-badge status-${project.status}`}>{project.statusLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="tech-section">
            <h2 className="section-title">기술 스택</h2>
            <div className="tech-categories">
              {skillCategories.map((category) => (
                <div key={category.name} className="tech-category">
                  <h3 className="tech-category-title">{category.name}</h3>
                  <div className="tech-tags">
                    {category.items.map((skill) => (
                      <span key={skill} className={`tech-badge badge-${getTechColor(skill)}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section className="activities-section">
            <h2 className="section-title">대회 · 자격</h2>
            <div className="activities-list">
              {awardData.map((award, index) => (
                <div key={index} className={`activity-row ${award.highlight ? 'highlight' : ''}`}>
                  <span className="activity-date">{award.date}</span>
                  <span className="activity-title">{award.title}</span>
                  <span className={`activity-badge badge-${award.badgeColor}`}>{award.badge}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Activities Section */}
          <section className="activities-section">
            <h2 className="section-title">활동 · 경험</h2>
            <div className="activities-list">
              {activityData.map((activity, index) => (
                <div key={index} className="activity-row">
                  <span className="activity-date">{activity.date}</span>
                  <span className="activity-title">{activity.title}</span>
                  <span className={`activity-badge badge-${activity.badgeColor}`}>{activity.badge}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Competitions Section */}
          <section className="activities-section">
            <h2 className="section-title">준비중 · 참가 예정</h2>
            <div className="activities-list">
              {upcomingCompetitions.map((competition, index) => (
                <div key={index} className="activity-row">
                  <span className="activity-date">{competition.date}</span>
                  <div style={{ flex: 1 }}>
                    <span className="activity-title">{competition.title}</span>
                    <p style={{ fontSize: '12px', opacity: 0.6, marginTop: '2px' }}>{competition.time}</p>
                  </div>
                  <span className={`activity-badge badge-${competition.badgeColor}`}>{competition.badge}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="divider" />

          {/* Recent Posts Section */}
          <section className="recent-posts-section">
            <h2 className="section-title">최근 글</h2>
            <div className="recent-posts">
              <a href={profile.velog} target="_blank" rel="noreferrer" className="recent-post-link">
                <span className="recent-post-icon">📝</span>
                <div className="recent-post-content">
                  <p className="recent-post-title">Velog 기술 블로그</p>
                  <p className="recent-post-desc">개발, 보안, AI 관련 기술 글</p>
                </div>
              </a>
            </div>
          </section>

          {/* Divider */}
          <div className="divider" />

          {/* Footer */}
          <footer className="notion-footer">
            <p>Made with curiosity. Always learning.</p>
            <p style={{ marginTop: '8px', fontSize: '13px', opacity: 0.6 }}>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              {' · '}
              <a href={profile.velog} target="_blank" rel="noreferrer">Velog</a>
              {' · '}
              <a href={`mailto:${profile.email}`}>Email</a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}

function getProjectColor(name) {
  const colors = {
    'GHAS 알리미': '#e8f0ff',
    'WAF Guard': '#f0e8ff',
    '양문고 웹앱': '#ffe8f0',
    'GCPT': '#e8ffe8',
  }
  return colors[name] || '#f0f0f0'
}

function getTechColor(skill) {
  const colorMap = {
    'Python': 'orange',
    'JavaScript': 'yellow',
    'React': 'blue',
    'TypeScript': 'blue',
    'Java': 'red',
    'HTML / CSS': 'green',
    'AI & Machine Learning': 'purple',
    'Robotics': 'pink',
    'Git / GitHub': 'gray',
    'FastAPI': 'green',
    'Node.js': 'green',
    'Firebase': 'orange',
    'Oracle SQL': 'red',
    'Ghidra': 'purple',
    'Docker': 'blue',
    'Kotlin': 'purple',
    'Jetpack Compose': 'blue',
  }
  return colorMap[skill] || 'gray'
}
