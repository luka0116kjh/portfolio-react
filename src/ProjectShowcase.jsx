import { ArrowUpRight, ArrowDown, ShieldCheck } from 'lucide-react'
import timetableImage from './assets/projects/ghas-timetable.jpg'
import scheduleImage from './assets/projects/ghas-schedule.jpg'
import lhlinuxLogo from './assets/projects/lhlinux-logo.png'

function ProjectDetails({ project, number, language = 'ko' }) {
  return (
    <div className="project-details">
      <p className="project-category"><span>{number}</span>{project.category}</p>
      <h3 id={`project-${project.id}-heading`}>{project.name}</h3>
      <p className="project-summary">{project.description}</p>
      <ul className="project-tags" aria-label={`${project.name} ${language === 'en' ? 'technologies and areas' : '기술 및 분야'}`}>
        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <div className="project-actions">
        {project.links.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noreferrer" aria-label={`${project.name} ${link.label} (${language === 'en' ? 'opens in a new tab' : '새 탭'})`}>
            {link.label}<ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  )
}

function ProjectVisual({ id, language = 'ko' }) {
  const copy = language === 'en'
      ? { app: 'GHAS Alimi', tagline: 'School life in one place.', timetable: "Today's timetable", schedule: 'This month\'s schedule', linux: 'Open-source WSL2 CLI environment based on Ubuntu', web: 'Real-time web threat detection', gcptBar: 'GCPT / project flow', discussion: 'A discussion from different perspectives', result: 'Reasoning flow analysis', resultDetail: 'Visualizing how ideas develop', gcptCaption: 'Connecting and exploring answers from multiple AIs.' }
    : { app: 'GHAS 알리미', tagline: '학교생활을 한곳에.', timetable: '오늘의 시간표', schedule: '이번 달 일정', linux: 'Ubuntu 기반 오픈소스 WSL2 CLI 환경', web: '웹 위험을 실시간으로 감지', gcptBar: 'GCPT / 프로젝트 흐름', discussion: '서로 다른 관점의 토론', result: '추론 흐름 분석', resultDetail: '생각이 발전하는 과정을 시각화', gcptCaption: '여러 AI의 답변을 연결하고 탐구합니다.' }
  if (id === 'ghas') {
    return (
      <div className="project-visual ghas-visual">
        <div className="ghas-preview-label"><span>{copy.app}</span><span>{copy.tagline}</span></div>
        <div className="ghas-screenshots">
          <figure>
            <img src={timetableImage} alt="GHAS 알리미 앱의 오늘 시간표 화면" width={444} height={960} decoding="async" />
            <figcaption>{copy.timetable}</figcaption>
          </figure>
          <figure>
            <img src={scheduleImage} alt="GHAS 알리미 앱의 월별 학사 일정 화면" width={444} height={960} decoding="async" />
            <figcaption>{copy.schedule}</figcaption>
          </figure>
        </div>
      </div>
    )
  }

  if (id === 'lhlinux') {
    return (
      <figure className="project-visual lhlinux-visual">
        <img src={lhlinuxLogo} alt="lhlinux 로고" width={2172} height={724} loading="lazy" decoding="async" />
        <figcaption>{copy.linux}</figcaption>
      </figure>
    )
  }

  if (id === 'waf') {
    return (
      <figure className="project-visual lhlinux-visual waf-visual">
        <ShieldCheck size={72} strokeWidth={1.2} aria-hidden="true" />
        <figcaption>{copy.web}</figcaption>
      </figure>
    )
  }

  return (
    <figure className="project-visual gcpt-visual">
      <div className="project-preview-bar"><span className="preview-status" aria-hidden="true" />{copy.gcptBar}</div>
      <div className="gcpt-flow">
        <div className="gcpt-models"><span>GPT</span><span>Claude</span><span>Gemini</span></div>
        <div className="gcpt-connector" aria-hidden="true"><ArrowDown size={18} /></div>
        <p className="gcpt-discussion">{copy.discussion}</p>
        <ArrowDown size={18} className="gcpt-flow-arrow" aria-hidden="true" />
        <p className="gcpt-result">{copy.result}<span>{copy.resultDetail}</span></p>
      </div>
      <figcaption>{copy.gcptCaption}</figcaption>
    </figure>
  )
}

export default function ProjectShowcase({ projects, github, labels = {}, language = 'ko' }) {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="portfolio-section">
      <div className="section-heading">
        <div><p className="section-eyebrow">{language === 'en' ? 'SELECTED WORK' : 'SELECTED WORK'}</p><h2 id="projects-heading">{labels.showcaseTitle || '직접 만들고, 함께 만든 것들'}</h2></div>
        <a href={github} target="_blank" rel="noreferrer" className="text-link">{labels.githubMore || 'GitHub에서 더 보기'}<ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
      <div className="work-grid">
        {projects.map((project, index) => (
          <article id={`project-${project.id}`} aria-labelledby={`project-${project.id}-heading`} key={project.id} className={`work-card${index === 0 ? ' work-card-featured' : ''}`}>
            <ProjectVisual id={project.id} language={language} />
            <ProjectDetails project={project} number={`0${index + 1}`} language={language} />
          </article>
        ))}
      </div>
    </section>
  )
}
