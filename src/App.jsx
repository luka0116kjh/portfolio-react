import { useEffect, useState } from "react";
import "./App.css";

import lifeos from "./assets/lifeos.png";
import snake from "./assets/snake.png";
import githubIcon from "./assets/github.png";
import algorithmCard from "./assets/pro.png";
import securityReport from "./assets/보고서.png";
import lunch from "./assets/lunch.png";
import devDNA from "./assets/DNA.png";
import tistoryCover from "./assets/t.png";
import zeroScan from "./assets/정보.png";

const profile = {
  name: "Luka",
  title: "Frontend Developer | Security Engineering | AI Prototyping",
  headline: "문제를 읽고, 구조를 설계하고, 동작하는 결과물까지 연결하는 개발자",
  summary:
    "사용자가 바로 이해할 수 있는 화면과, 유지보수 가능한 구조를 함께 만드는 데 집중합니다. 포트폴리오 역시 단순 소개 페이지가 아니라 결과물을 검증할 수 있는 서비스로 설계했습니다.",
  location: "Korea",
  email: "mailto:kjh08116@naver.com",
  github: "https://github.com/luka0116kjh",
  blog: "https://luka04.tistory.com/",
  velog: "https://velog.io/@luka0116kjh/posts",
};

const quickFacts = [
  {
    label: "대표 프로젝트",
    value: "7+",
    note: "웹, 보안, 데이터 시각화, 게임",
  },
  {
    label: "배포 방식",
    value: "CI/CD",
    note: "GitHub Actions -> GitHub Pages 자동 배포",
  },
  {
    label: "핵심 역량",
    value: "문제 해결",
    note: "구현 이유와 구조 선택을 함께 설명하는 개발",
  },
];

const strengths = [
  {
    title: "정보를 구조화하는 프론트엔드",
    description:
      "사용자가 원하는 정보를 빠르게 찾을 수 있도록 콘텐츠를 배열 기반 데이터로 정리하고, 섹션 단위 탐색 흐름을 설계합니다.",
  },
  {
    title: "보안 관점의 문제 해석",
    description:
      "취약점 분석과 공격 시나리오를 기능 설계와 함께 바라봅니다. 서비스 구현뿐 아니라 위험 요소를 줄이는 방향으로 접근합니다.",
  },
  {
    title: "빠른 프로토타이핑과 실전형 개선",
    description:
      "아이디어를 화면과 동작으로 빠르게 옮기고, 이후 구조 분리와 반복 가능한 배포 흐름까지 정리해 운영 가능한 상태로 끌어올립니다.",
  },
];

const skillGroups = [
  {
    name: "Frontend",
    reason:
      "포트폴리오와 데이터 시각화 프로젝트에서 화면 구조를 빠르게 조합하고 반복 UI를 유지보수 가능한 형태로 관리하기 위해 사용했습니다.",
    items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Vite"],
  },
  {
    name: "Backend / Data",
    reason:
      "API 연동, 데이터 가공, 보안 기능 실험이 필요한 프로젝트에서 서버 로직과 데이터 처리 흐름을 검증하기 위해 사용했습니다.",
    items: ["Python", "FastAPI", "Flask", "SQL", "Oracle SQL"],
  },
  {
    name: "Security / Infra",
    reason:
      "취약점 분석과 서비스 운영 관점의 실험을 위해 로컬 환경, 배포, 공격 패턴 이해를 함께 다뤘습니다.",
    items: ["OWASP Top 10", "Linux", "GitHub Actions", "Git/GitHub"],
  },
  {
    name: "Problem Solving",
    reason:
      "기능 구현 이전에 문제를 분해하고 적절한 자료구조와 흐름을 선택해야 프로젝트 완성도가 올라간다고 판단해 꾸준히 다졌습니다.",
    items: ["Algorithms", "Data Structures", "Python", "Java", "ASM"],
  },
];

const featuredProjects = [
  {
    title: "ZeroScan WAF",
    subtitle: "URL 접근 시점에 위험 신호를 분석하는 보안 프로젝트",
    image: zeroScan,
    tags: ["Python", "FastAPI", "Security"],
    problem:
      "사용자는 악성 URL 여부를 매번 직접 판단하기 어렵고, 단순 차단 목록만으로는 실시간 대응이 제한됩니다.",
    solution:
      "FastAPI 기반 분석 서버와 브라우저 확장 프로그램을 연결해 접속 URL을 분석하고, SQL Injection과 XSS 패턴 기반 위험 요소를 경고하도록 구성했습니다.",
    result:
      "보안 기능을 단순 이론이 아니라 사용자의 브라우징 흐름 안에서 동작하는 형태로 구현했습니다.",
    link: "https://github.com/luka0116kjh/waf",
    linkText: "GitHub 보기",
  },
  {
    title: "DevDNA",
    subtitle: "GitHub 활동을 개발 성향 데이터로 시각화한 서비스",
    image: devDNA,
    tags: ["React", "Three.js", "Data Visualization"],
    problem:
      "GitHub 프로필은 저장소와 잔디는 보여주지만, 개발자의 활동 패턴과 기술 성향을 한눈에 읽기 어렵습니다.",
    solution:
      "GitHub 데이터를 수집해 시각화 가능한 형태로 정리하고, React 기반 UI와 3D 시각 표현을 결합해 탐색형 결과 화면으로 설계했습니다.",
    result:
      "정적인 활동 기록을 해석 가능한 인터랙티브 데이터 경험으로 전환해, 정보 전달력을 높였습니다.",
    link: "https://github.com/luka0116kjh/DevDNA",
    linkText: "GitHub 보기",
  },
  {
    title: "GHAS Lunch",
    subtitle: "학교 급식 정보를 빠르게 확인하는 경량 웹 서비스",
    image: lunch,
    tags: ["HTML", "JavaScript", "Public API"],
    problem:
      "급식 정보는 여러 단계의 탐색이 필요해 학생 입장에서 확인 과정이 번거롭습니다.",
    solution:
      "NEIS API 기반으로 오늘과 이번 주 급식 메뉴를 한 화면에서 조회할 수 있는 페이지를 구성했습니다.",
    result:
      "정보 접근 단계를 줄여 반복적으로 사용하는 생활형 서비스 형태로 만들었습니다.",
    link: "https://luka0116kjh.github.io/ghaslunch1/",
    linkText: "서비스 보기",
  },
  {
    title: "Life OS",
    subtitle: "목표와 실행을 연결하는 개인 생산성 프로젝트",
    image: lifeos,
    tags: ["Web", "TypeScript", "Mobile"],
    problem:
      "목표 관리 도구는 많지만, 계획과 실행 상태를 한 흐름에서 관리하지 못하면 지속 사용성이 떨어집니다.",
    solution:
      "개인 생산성 흐름에 맞춰 목표, 실행, 관리 단계를 하나의 화면 체계로 묶는 방향으로 기능을 설계했습니다.",
    result:
      "단순 할 일 목록이 아니라 일상 운영 도구에 가까운 구조를 실험할 수 있었습니다.",
    link: "https://github.com/luka0116kjh/LifeOS-",
    linkText: "GitHub 보기",
  },
];

const projectArchive = [
  {
    title: "Snake Game",
    image: snake,
    summary:
      "Python pygame 기반으로 제작한 게임 프로젝트입니다. 기본 규칙 위에 점수 구조와 플레이 흐름을 직접 설계하며 상태 관리와 게임 루프를 익혔습니다.",
    tags: ["Python", "pygame", "Game Development"],
    link: "https://github.com/luka0116kjh/Snake-game",
  },
  {
    title: "Security Vulnerability Report",
    image: securityReport,
    summary:
      "학교 홈페이지 개편 이후 API 통합 과정에서 발견한 보안 취약점을 분석하고, 위험 요소와 개선 권고안을 문서화한 보고서입니다.",
    tags: ["Security", "Report", "Analysis"],
    link: "https://docs.google.com/document/d/1Yui7xDmhvp7FbTuMO3sLaGFI1_H-jHLo0Uzidonn1fk/edit?usp=sharing",
  },
  {
    title: "Study Archive",
    image: tistoryCover,
    summary:
      "학습한 내용을 글로 정리하며 기술 선택 이유와 구현 과정을 남기는 블로그입니다. 단순 기록이 아니라 지식 정제 도구로 운영하고 있습니다.",
    tags: ["Tistory", "Writing", "Documentation"],
    link: "https://luka04.tistory.com/",
  },
];

const processCards = [
  {
    title: "콘텐츠를 구조화해서 관리",
    detail:
      "프로젝트, 기술, 경험 데이터를 객체 배열로 분리해 섹션이 늘어나도 같은 패턴으로 확장할 수 있도록 구성했습니다.",
  },
  {
    title: "사용자 탐색 흐름을 우선 설계",
    detail:
      "상단 고정 내비게이션과 스무스 스크롤을 적용해 긴 단일 페이지에서도 원하는 영역까지 빠르게 이동할 수 있게 만들었습니다.",
  },
  {
    title: "운영 가능한 정적 서비스로 배포",
    detail:
      "main 브랜치 반영 시 GitHub Actions가 자동으로 빌드하고 GitHub Pages에 배포되도록 연결해 배포 과정을 표준화했습니다.",
  },
];

const experience = [
  {
    title: "VisualCamp Trainee",
    period: "Ongoing",
    description:
      "보안 관점의 문제 해석과 프론트엔드 구현 훈련을 병행하며, 알고리즘 학습과 문서화를 함께 수행하고 있습니다.",
    points: [
      "문제 해결 과정을 코드와 문서로 동시에 정리",
      "보안 사고방식을 기능 구현 관점과 연결",
      "기초 구현보다 구조와 설명 가능성을 중시하는 습관 강화",
    ],
  },
  {
    title: "Security / Robotics / School Activities",
    period: "Experience",
    description:
      "대회, 팀 활동, 발표 경험을 통해 구현 결과물만이 아니라 협업과 전달 방식의 중요성을 함께 익혔습니다.",
    points: [
      "CTF 및 보안 활동 참여",
      "로보틱스, 메이커형 프로젝트 경험",
      "기록과 발표를 통한 학습 결과 정리",
    ],
  },
];

const engineeringNotes = [
  "다크모드 상태를 localStorage에 저장해 재방문 시 동일한 UI 상태를 유지합니다.",
  "프로젝트 카드 이미지는 lazy loading으로 처리해 긴 페이지의 초기 로딩 부담을 줄였습니다.",
  "정적 사이트 구조를 유지해 운영 복잡도를 낮추고, 콘텐츠 전달에 집중했습니다.",
];

function scrollToId(id) {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="sectionHeading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="sectionDescription">{description}</p> : null}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="panel projectCard">
      <img className="projectImage" src={project.image} alt={project.title} loading="lazy" />
      <div className="cardBody">
        <div className="cardTop">
          <p className="cardLabel">{project.subtitle}</p>
          <h3>{project.title}</h3>
          <div className="tagRow">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="storyBlock">
          <div>
            <span className="storyLabel">Problem</span>
            <p>{project.problem}</p>
          </div>
          <div>
            <span className="storyLabel">Solution</span>
            <p>{project.solution}</p>
          </div>
          <div>
            <span className="storyLabel">Result</span>
            <p>{project.result}</p>
          </div>
        </div>

        <a className="textLink" href={project.link} target="_blank" rel="noreferrer">
          {project.linkText}
        </a>
      </div>
    </article>
  );
}

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className={dark ? "app dark" : "app"}>
      <header className="siteHeader">
        <div className="container headerInner">
          <button className="brandButton" onClick={() => scrollToId("top")}>
            {profile.name}
          </button>

          <nav className="navMenu" aria-label="Primary">
            <button onClick={() => scrollToId("about")}>About</button>
            <button onClick={() => scrollToId("projects")}>Projects</button>
            <button onClick={() => scrollToId("skills")}>Skills</button>
            <button onClick={() => scrollToId("experience")}>Experience</button>
            <button onClick={() => scrollToId("contact")}>Contact</button>
          </nav>

          <button className="themeToggle" onClick={() => setDark((current) => !current)}>
            {dark ? "Dark" : "Light"}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="heroSection">
          <div className="container heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">Portfolio Service</p>
              <h1>{profile.headline}</h1>
              <p className="heroTitle">{profile.title}</p>
              <p className="heroSummary">{profile.summary}</p>

              <div className="ctaRow">
                <a className="primaryButton" href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="secondaryButton" href={profile.blog} target="_blank" rel="noreferrer">
                  Tistory
                </a>
                <a className="secondaryButton" href={profile.velog} target="_blank" rel="noreferrer">
                  Velog
                </a>
                <a className="secondaryButton" href={profile.email}>
                  Contact
                </a>
              </div>

              <div className="factGrid">
                {quickFacts.map((fact) => (
                  <div className="factCard" key={fact.label}>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                    <p>{fact.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="panel heroPanel">
              <div className="heroPanelTop">
                <div>
                  <p className="panelEyebrow">Developer Snapshot</p>
                  <h2>{profile.name}</h2>
                </div>
                <span className="statusChip">Open to Build</span>
              </div>

              <p className="heroPanelText">
                화면은 보기 좋게 만드는 것으로 끝나지 않는다고 생각합니다. 어떤 정보를 앞에 두고,
                어떤 흐름으로 읽히게 만들지까지 설계해야 실제 서비스가 됩니다.
              </p>

              <div className="miniPanel">
                <img className="miniPanelIcon" src={githubIcon} alt="GitHub icon" loading="lazy" />
                <div>
                  <p className="miniLabel">Work Style</p>
                  <strong>문제 정의 - 구조 설계 - 구현 - 배포</strong>
                  <p>작동하는 화면과 설명 가능한 구조를 함께 남깁니다.</p>
                </div>
              </div>

              <div className="miniPanel">
                <img
                  className="miniPanelIcon"
                  src={algorithmCard}
                  alt="Algorithm visual"
                  loading="lazy"
                />
                <div>
                  <p className="miniLabel">Focus</p>
                  <strong>Frontend, Security, AI Prototype</strong>
                  <p>빠르게 만들고, 이후 유지보수 가능한 형태로 다듬는 작업을 선호합니다.</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="contentSection">
          <div className="container">
            <SectionHeading
              eyebrow="About"
              title="채용 담당자가 빠르게 판단할 수 있게 설계한 포트폴리오"
              description="이 페이지는 자기소개를 길게 늘어놓기보다, 어떤 문제를 어떤 방식으로 풀었는지 바로 확인할 수 있도록 구성했습니다."
            />

            <div className="strengthGrid">
              {strengths.map((item) => (
                <article className="panel" key={item.title}>
                  <p className="panelEyebrow">Core Strength</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className="architectureBanner">
              <div>
                <p className="panelEyebrow">Architecture</p>
                <h3>React 기반 정적 포트폴리오 + GitHub Actions 자동 배포</h3>
              </div>
              <pre className="architectureCode">
{`Browser -> React UI -> Structured Portfolio Data
main push -> GitHub Actions -> vite build -> GitHub Pages`}
              </pre>
            </div>
          </div>
        </section>

        <section id="projects" className="contentSection">
          <div className="container">
            <SectionHeading
              eyebrow="Projects"
              title="기능 설명보다 문제 해결 흐름이 보이도록 정리한 대표 결과물"
              description="모든 프로젝트는 무엇을 만들었는지보다 어떤 문제를 정의했고, 어떻게 해결했는지를 중심으로 정리했습니다."
            />

            <div className="projectGrid">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>

            <div className="archiveGrid">
              {projectArchive.map((project) => (
                <article className="panel archiveCard" key={project.title}>
                  <img className="archiveImage" src={project.image} alt={project.title} loading="lazy" />
                  <div className="cardBody">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="tagRow">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a className="textLink" href={project.link} target="_blank" rel="noreferrer">
                      자세히 보기
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="contentSection">
          <div className="container">
            <SectionHeading
              eyebrow="Skills"
              title="기술을 나열하지 않고, 왜 선택했는지까지 설명하는 스택"
              description="도구는 목적에 따라 선택했습니다. 빠른 프로토타이핑, 구조 유지보수, 보안 실험, 데이터 처리라는 기준으로 스택을 사용했습니다."
            />

            <div className="skillsGrid">
              {skillGroups.map((group) => (
                <article className="panel skillCard" key={group.name}>
                  <p className="panelEyebrow">{group.name}</p>
                  <p className="skillReason">{group.reason}</p>
                  <div className="tagRow">
                    {group.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="notesGrid">
              {processCards.map((card) => (
                <article className="panel noteCard" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="contentSection">
          <div className="container">
            <SectionHeading
              eyebrow="Experience"
              title="실행 경험과 학습 방식이 함께 드러나는 이력"
              description="단순 참여 이력이 아니라, 어떤 관점과 방식으로 성장했는지 보이도록 정리했습니다."
            />

            <div className="experienceGrid">
              <div className="timeline">
                {experience.map((item) => (
                  <article className="panel timelineItem" key={item.title}>
                    <div className="timelineHeader">
                      <div>
                        <p className="panelEyebrow">{item.period}</p>
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                    <p>{item.description}</p>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <aside className="panel engineeringPanel">
                <p className="panelEyebrow">Engineering Notes</p>
                <h3>이 포트폴리오 자체도 하나의 제품으로 다뤘습니다.</h3>
                <ul>
                  {engineeringNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section id="contact" className="contentSection contactSection">
          <div className="container contactWrap">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>문제를 읽고 결과물로 연결하는 개발자를 찾고 있다면</h2>
              <p className="sectionDescription">
                프론트엔드 구현, 보안 관점의 기능 설계, 빠른 프로토타이핑이 필요한 환경에서 강점을
                발휘할 수 있습니다.
              </p>
            </div>

            <div className="contactActions">
              <a className="primaryButton" href={profile.email}>
                Email
              </a>
              <a className="secondaryButton" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="secondaryButton" href={profile.blog} target="_blank" rel="noreferrer">
                Tistory
              </a>
              <a className="secondaryButton" href={profile.velog} target="_blank" rel="noreferrer">
                Velog
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
