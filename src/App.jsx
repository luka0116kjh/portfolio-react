import { useState, useEffect } from 'react'
import { ArrowDown, ArrowUpRight, ChevronUp, Ellipsis, Moon, Sun } from 'lucide-react'
import MacTerminal from './MacTerminal.jsx'
import ProjectShowcase from './ProjectShowcase.jsx'
import './Portfolio.css'

const profile = {
  name: 'Luka',
  koreanName: '김진형',
  role: 'Programmer & Builder',
  bio: '안녕하세요. 만들고, 부수고, 다시 배우며 성장하는 김진형입니다. 웹부터 AI, 로봇, 보안까지 궁금한 것을 직접 프로젝트로 만들어 봅니다.',
  github: 'https://github.com/luka0116kjh',
  velog: 'https://velog.io/@luka0116kjh/posts',
  email: 'kjh08116@naver.com',
  school: '경기자동차과학고등학교 3학년',
  major: '미래자동차과',
  goal: '소프트웨어 엔지니어 / AI 엔지니어',
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
    id: 'waf',
    name: 'WAF Guard',
    description: 'FastAPI 분석 서버와 Chrome 확장 프로그램을 연결해 웹 위험을 실시간으로 감지하는 프로젝트입니다.',
    category: '웹 보안 · 확장 프로그램',
    tags: ['FastAPI', 'Chrome Extension'],
    links: [
      { label: 'GitHub', url: 'https://github.com/luka0116kjh/waf' },
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

function RecordList({ items, highlightFirst = false, tone = 'blue' }) {
  const badgeColors = tone === 'purple'
    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'

  return (
    <ul className="record-list">
      {items.map((award, index) => (
        <li
          key={award.title}
          className={`record-row px-5 sm:px-6 py-5 border-b border-gray-200 dark:border-gray-800 last:border-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
            highlightFirst && index === 0 ? 'record-highlight' : ''
          }`}
        >
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400" aria-label={award.date ? undefined : '연도 미기재'}>{award.date || '—'}</span>
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

  return (
    <div className="portfolio-page min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-white transition-colors">
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="portfolio-container py-3 flex items-center justify-between gap-4 flex-wrap">
          <a href="#top" className="font-bold text-lg tracking-tight min-h-11 inline-flex items-center">Luka<span className="text-blue-600 dark:text-blue-400">.</span></a>
          <nav aria-label="주요 메뉴" className="flex items-center gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-300 order-3 w-full justify-between sm:order-none sm:w-auto">
            <a href="#projects" className="py-2 hover:text-blue-600 dark:hover:text-blue-400">프로젝트</a>
            <a href="#about" className="py-2 hover:text-blue-600 dark:hover:text-blue-400">소개</a>
            <a href="#awards" className="py-2 hover:text-blue-600 dark:hover:text-blue-400">대회·자격</a>
            <a href="#activities" className="py-2 hover:text-blue-600 dark:hover:text-blue-400">활동</a>
          </nav>
          <button
            type="button"
            onClick={() => setIsDark((current) => !current)}
            aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
            title={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
            className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main id="main" tabIndex={-1} className="flex-1">
        <div className="portfolio-container pb-16">
          <section id="top" className="portfolio-hero" aria-labelledby="hero-heading">
            <div className="hero-copy">
              <p className="hero-identity"><span className="identity-dot" aria-hidden="true" />{profile.koreanName} · {profile.name}<span className="hero-role">학생 개발자</span></p>
              <h1 id="hero-heading">생활 속 불편을<br /><span>코드로 해결합니다.</span></h1>
              <p className="hero-description">학교생활을 돕는 앱을 만들고,<br className="hidden sm:block" /> 웹 보안과 AI를 프로젝트로 탐구합니다.</p>
              <div className="hero-actions">
                <a href="#projects" className="primary-link">프로젝트 둘러보기<ArrowDown size={16} aria-hidden="true" /></a>
                <a href={`mailto:${profile.email}`} className="text-link">연락하기<ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </div>
            <aside className="hero-focus" aria-label="관심 분야와 대표 프로젝트">
              <p className="section-eyebrow">BUILD. EXPLORE. LEARN.</p>
              {[
                { id: 'ghas', area: '앱 개발', name: 'GHAS 알리미' },
                { id: 'waf', area: '웹 보안', name: 'WAF Guard' },
                { id: 'gcpt', area: 'AI 실험', name: 'GCPT' },
              ].map((item, index) => (
                <a key={item.id} href={`#project-${item.id}`} className="focus-link">
                  <span className="focus-number">0{index + 1}</span>
                  <span><strong>{item.area}</strong><span>{item.name}</span></span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ))}
            </aside>
          </section>

          <ProjectShowcase projects={projects} github={profile.github} />

          <section id="about" aria-labelledby="about-heading" className="portfolio-section about-section">
            <div className="section-heading">
              <div><p className="section-eyebrow">ABOUT ME</p><h2 id="about-heading">만들면서 배우는 사람</h2></div>
              <span className="section-note">웹 · AI · 보안, 그리고 호기심</span>
            </div>
            <MacTerminal profile={profile} skillCategories={skillCategories} />
            <dl className="about-details">
              <div><dt>학교</dt><dd>{profile.school}</dd></div>
              <div><dt>전공</dt><dd>{profile.major}</dd></div>
              <div><dt>목표</dt><dd>{profile.goal}</dd></div>
              <div><dt>GitHub</dt><dd><a href={profile.github} target="_blank" rel="noreferrer">@luka0116kjh<ArrowUpRight size={14} aria-hidden="true" /></a></dd></div>
              <div><dt>이메일</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={14} aria-hidden="true" /></a></dd></div>
            </dl>
          </section>

          {/* Tech Stack */}
          <section id="stack" aria-labelledby="stack-heading" className="portfolio-section">
            <div className="section-heading"><div><p className="section-eyebrow">TOOLBOX</p><h2 id="stack-heading">프로젝트에 사용하는 도구들</h2></div></div>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((cat) => (
                <div key={cat.name}>
                  <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">{cat.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.items.map((skill) => (
                      <span key={skill} className="stack-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section id="awards" aria-labelledby="awards-heading" className="portfolio-section">
            <div className="section-heading">
              <div><p className="section-eyebrow">MILESTONES</p><h2 id="awards-heading">대회 · 자격</h2></div>
              <button
                type="button"
                aria-expanded={showMoreAwards}
                aria-controls="more-awards"
                aria-label={showMoreAwards ? '추가 대회·수상 기록 접기' : `추가 대회·수상 기록 ${moreAwards.length}개 더 보기`}
                onClick={() => setShowMoreAwards((current) => !current)}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {showMoreAwards ? <ChevronUp size={18} aria-hidden="true" /> : <Ellipsis size={18} aria-hidden="true" />}
                {showMoreAwards ? '접기' : '더 보기'}
                <span className="rounded-md bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-xs">{moreAwards.length}</span>
              </button>
            </div>
            <RecordList items={awards} highlightFirst />
            <div id="more-awards" role="region" aria-labelledby="more-awards-heading" hidden={!showMoreAwards} className="mt-6">
              <h3 id="more-awards-heading" className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">더 많은 대회·수상 기록</h3>
              <RecordList items={moreAwards} />
            </div>
          </section>

          {/* Activities */}
          <section id="activities" aria-labelledby="activities-heading" className="portfolio-section">
            <div className="section-heading">
              <div><p className="section-eyebrow">EXPERIENCE</p><h2 id="activities-heading">활동</h2></div>
              <button
                type="button"
                aria-expanded={showMoreActivities}
                aria-controls="more-activities"
                aria-label={showMoreActivities ? '추가 활동 기록 접기' : `추가 활동 기록 ${moreActivities.length}개 더 보기`}
                onClick={() => setShowMoreActivities((current) => !current)}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {showMoreActivities ? <ChevronUp size={18} aria-hidden="true" /> : <Ellipsis size={18} aria-hidden="true" />}
                {showMoreActivities ? '접기' : '더 보기'}
                <span className="rounded-md bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-xs">{moreActivities.length}</span>
              </button>
            </div>
            <RecordList items={activities} tone="purple" />
            <div id="more-activities" role="region" aria-labelledby="more-activities-heading" hidden={!showMoreActivities} className="mt-6">
              <h3 id="more-activities-heading" className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">더 많은 활동·경험 기록</h3>
              <RecordList items={moreActivities} tone="purple" />
            </div>
          </section>

          {/* Blog */}
          <section className="portfolio-section" aria-labelledby="journal-heading">
            <div className="section-heading"><div><p className="section-eyebrow">NOTES</p><h2 id="journal-heading">배우고 기록하기</h2></div></div>
            <a
              href={profile.velog}
              target="_blank"
              rel="noreferrer"
              className="journal-link"
            >
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Velog 기술 블로그</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">개발, 보안, AI 관련 기술 글</p>
              </div>
              <ArrowUpRight size={24} aria-hidden="true" />
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
