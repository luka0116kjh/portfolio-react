import { ArrowUpRight, ArrowDown } from 'lucide-react'
import timetableImage from './assets/projects/ghas-timetable.jpg'
import scheduleImage from './assets/projects/ghas-schedule.jpg'
import wafImage from './assets/정보.png'

function ProjectDetails({ project, number }) {
  return (
    <div className="project-details">
      <p className="project-category"><span>{number}</span>{project.category}</p>
      <h3 id={`project-${project.id}-heading`}>{project.name}</h3>
      <p className="project-summary">{project.description}</p>
      <ul className="project-tags" aria-label={`${project.name} 기술 및 분야`}>
        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <div className="project-actions">
        {project.links.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noreferrer" aria-label={`${project.name} ${link.label} (새 탭)`}>
            {link.label}<ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  )
}

function ProjectVisual({ id }) {
  if (id === 'ghas') {
    return (
      <div className="project-visual ghas-visual">
        <div className="ghas-preview-label"><span>GHAS 알리미</span><span>학교생활을 한곳에.</span></div>
        <div className="ghas-screenshots">
          <figure>
            <img src={timetableImage} alt="GHAS 알리미 앱의 오늘 시간표 화면" width={444} height={960} decoding="async" />
            <figcaption>오늘의 시간표</figcaption>
          </figure>
          <figure>
            <img src={scheduleImage} alt="GHAS 알리미 앱의 월별 학사 일정 화면" width={444} height={960} decoding="async" />
            <figcaption>이번 달 일정</figcaption>
          </figure>
        </div>
      </div>
    )
  }

  if (id === 'waf') {
    return (
      <figure className="project-visual waf-visual">
        <div className="project-preview-bar"><span className="preview-status" aria-hidden="true" />ZeroScan Sentinel</div>
        <div className="waf-screenshot"><img src={wafImage} alt="웹페이지 상단에 위험 감지 경고를 표시하는 ZeroScan Sentinel 확장 프로그램" width={1077} height={1782} loading="lazy" decoding="async" /></div>
        <figcaption>브라우저에서 확인하는 웹 위험 알림</figcaption>
      </figure>
    )
  }

  return (
    <figure className="project-visual gcpt-visual">
      <div className="project-preview-bar"><span className="preview-status" aria-hidden="true" />GCPT / 프로젝트 흐름</div>
      <div className="gcpt-flow">
        <div className="gcpt-models"><span>GPT</span><span>Claude</span><span>Gemini</span></div>
        <div className="gcpt-connector" aria-hidden="true"><ArrowDown size={18} /></div>
        <p className="gcpt-discussion">서로 다른 관점의 토론</p>
        <ArrowDown size={18} className="gcpt-flow-arrow" aria-hidden="true" />
        <p className="gcpt-result">추론 흐름 분석<span>생각이 발전하는 과정을 시각화</span></p>
      </div>
      <figcaption>여러 AI의 답변을 연결하고 탐구합니다.</figcaption>
    </figure>
  )
}

export default function ProjectShowcase({ projects, github }) {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="portfolio-section">
      <div className="section-heading">
        <div><p className="section-eyebrow">SELECTED WORK</p><h2 id="projects-heading">직접 만들고, 함께 만든 것들</h2></div>
        <a href={github} target="_blank" rel="noreferrer" className="text-link">GitHub에서 더 보기<ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
      <div className="work-grid">
        {projects.map((project, index) => (
          <article id={`project-${project.id}`} aria-labelledby={`project-${project.id}-heading`} key={project.id} className={`work-card${index === 0 ? ' work-card-featured' : ''}`}>
            <ProjectVisual id={project.id} />
            <ProjectDetails project={project} number={`0${index + 1}`} />
          </article>
        ))}
      </div>
    </section>
  )
}
