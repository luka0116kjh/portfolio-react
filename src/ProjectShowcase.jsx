import { ArrowUpRight, Folder } from 'lucide-react'

export default function ProjectShowcase({ projects, github }) {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="portfolio-section">
      <div className="section-heading"><h2 id="projects-heading">직접 만들고, 함께 만든 프로젝트</h2><span className="heading-line" aria-hidden="true" /></div>
      <div className="work-grid">
        {projects.map((project) => (
          <article id={`project-${project.id}`} aria-labelledby={`project-${project.id}-heading`} key={project.id} className="work-card">
            <div className="project-card-head"><Folder size={23} strokeWidth={1.4} aria-hidden="true" /><span>{project.category}</span></div>
            <h3 id={`project-${project.id}-heading`}>{project.name}</h3>
            <p className="project-summary">{project.description}</p>
            <ul className="project-tags" aria-label={`${project.name} 기술 및 분야`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <div className="project-actions">{project.links.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer" aria-label={`${project.name} ${link.label} (새 탭)`}>{link.label}<ArrowUpRight size={14} aria-hidden="true" /></a>
            ))}</div>
          </article>
        ))}
      </div>
      <a href={github} target="_blank" rel="noreferrer" className="projects-footnote">GitHub에서 모든 프로젝트 보기 <span aria-hidden="true">→</span></a>
    </section>
  )
}
