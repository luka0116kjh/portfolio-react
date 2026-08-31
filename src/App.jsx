import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

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
  { name: '프론트엔드', items: ['React', 'HTML', 'CSS', 'Jetpack Compose'] },
  { name: '백엔드', items: ['FastAPI', 'Node.js', 'Firebase', 'Docker'] },
  { name: '보안 & AI', items: ['Ghidra', 'AI & ML', 'Robotics', 'GitHub'] },
]

const projects = [
  {
    name: 'GHAS 알리미',
    description: '경기자동차과학고 학생들 위한 생활 지원 앱. 급식, 시간표 제공.',
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=kr.hs.ghas.ghason' },
      { label: 'App Store', url: 'https://apps.apple.com/kr/app/ghas%EC%95%8C%EB%A6%AC%EB%AF%B8/id6779186783' },
    ],
  },
  {
    name: 'WAF Guard',
    description: 'FastAPI 기반 WAF 분석 서버 + Chrome 확장. 웹 위험 실시간 감지.',
    links: [
      { label: 'GitHub', url: 'https://github.com/luka0116kjh/waf' },
    ],
  },
  {
    name: 'GCPT',
    description: 'GPT, Claude, Gemini 토론 시각화. 추론 흐름 분석.',
    links: [
      { label: 'GitHub', url: 'https://github.com/cksdud32/gcpt' },
    ],
  },
]

const awards = [
  { date: '2026', title: 'ASIS CTF Quals 2026, Iran Tech Olympics CTF 2026', badge: '예선 10등' },
  { date: '2026.08.22', title: 'cce 예선전', badge: '예선 15등' },
  { date: '2026.07', title: '정보처리산업기사', badge: '합격' },
  { date: '2026', title: 'COSS 청소년 사이버 해킹방어', badge: '예선 7등' },
]

const activities = [
  { date: '2026', title: 'Null; 해킹팀', badge: '팀 리더' },
  { date: '2026', title: 'Hwalbin 해킹팀', badge: '팀원' },
  { date: '2025-2026', title: '비주얼캠프 도제활동', badge: '교육' },
]

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) return JSON.parse(saved)
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('darkMode', JSON.stringify(isDark))
  }, [isDark])

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-white transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-end">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Cover */}
        <div className="h-48 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-slate-900 dark:via-slate-800 dark:to-dark-bg relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 dark:opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 pb-16">
          {/* Profile */}
          <div className="relative -mt-14 mb-12 flex flex-col items-center">
            <div className="w-24 h-24 rounded-2xl bg-gray-200 dark:bg-gray-800 border-4 border-white dark:border-dark-bg flex items-center justify-center text-3xl font-bold shadow-lg">
              LK
            </div>
          </div>

          {/* Profile Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {profile.koreanName} · {profile.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              소프트웨어 개발 · AI · 보안을 공부하는 학생 개발자
            </p>
          </div>

          {/* Info Grid */}
          <div className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-8 mb-8">
            <div className="space-y-5 text-sm">
              <div className="flex items-center gap-5">
                <span className="text-lg">🎓</span>
                <span className="text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-widest text-xs">School</span>
                <span className="text-gray-900 dark:text-white font-medium">{profile.school}</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-lg">💻</span>
                <span className="text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-widest text-xs">Major</span>
                <span className="text-gray-900 dark:text-white font-medium">{profile.major}</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-lg">🎯</span>
                <span className="text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-widest text-xs">Goal</span>
                <span className="text-gray-900 dark:text-white font-medium">{profile.goal}</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-lg">⌘</span>
                <span className="text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-widest text-xs">GitHub</span>
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-600 font-medium border-b-2 border-blue-500">
                  @luka0116kjh
                </a>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-lg">✉️</span>
                <span className="text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-widest text-xs">Contact</span>
                <a href={`mailto:${profile.email}`} className="text-blue-500 hover:text-blue-600 font-medium border-b-2 border-blue-500">
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Intro Callout */}
          <div className="bg-gray-900 dark:bg-gray-800 border-2 border-gray-700 dark:border-gray-700 rounded-2xl p-8 mb-12 hover:border-blue-500 transition-colors">
            <div className="flex gap-5 items-start">
              <span className="text-2xl text-blue-400 flex-shrink-0 mt-1">◇</span>
              <p className="text-gray-200 dark:text-gray-300 text-base leading-relaxed font-medium">
                {profile.bio}
              </p>
            </div>
          </div>

          {/* Projects */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">프로젝트</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((p) => (
                <div key={p.name} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-5xl">
                    📱
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">{p.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{p.description}</p>
                    <div className="flex gap-2">
                      {p.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 border border-gray-300 dark:border-gray-700 hover:border-blue-500 transition-all"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">기술 스택</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((cat) => (
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
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">대회 · 자격</h2>
            <div className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 gap-6 px-6 py-5 items-center border-b border-gray-200 dark:border-gray-800 last:border-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                    i === 0 ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500' : ''
                  }`}
                >
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{award.date}</span>
                  <span className="text-sm text-gray-900 dark:text-white font-medium">{award.title}</span>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700 text-right">
                    {award.badge}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Activities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">활동</h2>
            <div className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
              {activities.map((act, i) => (
                <div key={i} className="grid grid-cols-3 gap-6 px-6 py-5 items-center border-b border-gray-200 dark:border-gray-800 last:border-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{act.date}</span>
                  <span className="text-sm text-gray-900 dark:text-white font-medium">{act.title}</span>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border border-purple-300 dark:border-purple-700 text-right">
                    {act.badge}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Blog */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">최근 글</h2>
            <a
              href={profile.velog}
              target="_blank"
              rel="noreferrer"
              className="flex gap-5 items-start p-6 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:translate-x-1"
            >
              <span className="text-4xl flex-shrink-0">📝</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Velog 기술 블로그</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">개발, 보안, AI 관련 기술 글</p>
              </div>
            </a>
          </section>

          {/* Footer */}
          <footer className="text-center py-16 border-t border-gray-200 dark:border-gray-800">
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
