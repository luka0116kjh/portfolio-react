import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import './App.css'

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
      { label: '📱 Android', url: 'https://play.google.com/store/apps/details?id=kr.hs.ghas.ghason&pli=1' },
      { label: '🍎 iOS', url: 'https://apps.apple.com/kr/app/ghas%EC%95%8C%EB%A6%AC%EB%AF%B8/id6779186783' },
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
      { label: '→ GitHub', url: 'https://github.com/luka0116kjh/waf' },
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
      { label: '→ GitHub', url: 'https://github.com/cksdud32/gcpt' },
    ],
  },
]

const awardData = [
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
                      {project.links?.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link-badge"
                        >
                          {link.label}
                        </a>
                      ))}
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
