import { useEffect, useMemo, useState } from "react";
import "./App.css";
import notionImg from "./assets/notion.png";
import webv from "./assets/pythonv.png";
import snake from "./assets/snake.png";
import githubIcon from './assets/github.png';
import bo from "./assets/pro.png";
import qwer from "./assets/보고서.png";
import lunch from "./assets/lunch.png";


function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const data = useMemo(
    () => ({
      name: "Luka",
      headline: "Building, breaking, learning — every day",
      role: "Student · Programmer · AI Engineer",
      oneLiner: "I learn fast, ship faster, and share what I learn.",
      links: {
        mail: "mailto:kjh08116@naver.com",
        github: "https://github.com/luka0116kjh",
        blog: "https://typhoon-ursinia-b26.notion.site/luka-blog-2b1a01a0e28580939f1df409b010bf76",
      },

      introKo: "안녕하세요, 만들고, 부수고, 배우는 김진형 입니다.",

      languages: [
        "Python",
        "Java",
        "JSP",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TypeScript",
        "Vibe Coding",
        "SQL(MySQL)",
        "ASM",
      ],

      highschool: {
        inside: [
          "학생기자단",
          "학교 블로그 글 업로드",
          "스마트 도우미",
          "인공지능 창업체험 참여",
          "앱인벤터 교육",
          "인공지능 특강 참여",
          "토론 대회 예선전 출전",
          "미래를 그리는 알고리즘 경진대회(2등)",
          "표창장(봉사부문)",
          "포토폴리오 경진대회 3등(1,2학년)",
          "도제 프로그램: 비주얼캠프",
        ],
        outside: [
          "네이버 청소년 크리에이터 스쿨 공모전",
          "네이버 청소년 크리에이터 스쿨 수료증",
          "ESG 창업 프로그램 출전",
          "청소년운영위원회 정책부 활동",
          "AI 숏폼 공모전 참여",
          "현대오토에버 화이트해커 교육",
          "현대오토에버 화이트해커 장학금 수상",
          "현대오토에버 해킹대회 출전",
          "현대오토에버 해킹대회 입상",
          "로봇 프로그래밍 경진 대회 3등",
          "YHHS2026 컨퍼런스 참가",
        ],
        imgInside: "https://luka0116kjh.github.io/portfolio/img/rlwkeks.jpg",
        imgOutside: "https://luka0116kjh.github.io/portfolio/img/naver.png",
      },

      techStack: [
        {
          title: "Programming Languages",
          desc: "Python, JavaScript를 중심으로 다양한 언어를 활용/응용하며 공부합니다.",
          img: "https://luka0116kjh.github.io/portfolio/img/python.jpg",
        },
        {
          title: "Algorithms & Data Structures",
          desc: "복잡한 문제를 효율적으로 해결하기 위한 자료구조 활용에 집중합니다.",
          img: bo,
        },
        {
          title: "Web Development",
          desc: "HTML, CSS, JavaScript, React로 반응형 웹사이트를 제작합니다. 지금은 간단하게라도 제작하며 퀄리티를 높여갑니다.",
          img: githubIcon,
        },
        {
          title: "Security & Hacking",
          desc: "현대오토에버 경진대회 입상 경험을 바탕으로 웹 해킹, 리버싱, 네트워크 보안을 연구합니다.",
          img: "https://luka0116kjh.github.io/portfolio/img/bl.png",
        },
        {
          title: "AI & Machine Learning",
          desc: "AI의 머신러닝 딥러닝등으로 AI관련으로 여러 공부를 하면 배우고있습니다.",
          img: "https://luka0116kjh.github.io/portfolio/img/ai.png",
        },
        {
          title: "Robotics & Automation",
          desc: "EV3 로봇 프로그래밍 경진대회에 참가하여 자율주행 로봇에 코딩을 입력하여 동작 제어와 실시간 알고리즘을 구현한 경험이 있습니다.",
          img: "https://luka0116kjh.github.io/portfolio/img/ev3.jpg"
          ,
        },

      ],
      techProjects: [
        {
          title: "Concept Web Creation",
          subtitle: "Notion blog study",
          desc: "노션을 활용해 블로그 형식의 개인 연구 공간을 만들고, 공부/연구 내용을 기록할 계획입니다.",
          linkText: "blog 이동",
          link: "https://typhoon-ursinia-b26.notion.site/luka-blog-2b1a01a0e28580939f1df409b010bf76",
          img: notionImg,
          tags: ["Notion", "Writing", "Study Log"],
        },
        {
          title: "snake game",
          subtitle: "웹 기반 스네이크 게임",
          desc: "python pygame을 사용하여 웹에서 플레이할 수 있는 스네이크 게임을 개발했습니다. 기존 스네이크게임에서 특수규칙을 추가하여 난이도를 높이면서 재미를 더했습니다.",
          linkText: "GitHub 이동",
          link: "https://github.com/luka0116kjh/Snake-game",
          img: snake,
          tags: ["Python", "pygame", "Game Development"],
        },
        {
          title: "경기자동차과학고 급식확인",
          subtitle: "오늘 내일 급식확인",
          desc: "나이스(NEIS) 오픈 API를 연동하여 경기자동차과학고등학교의 실시간 급식 정보를 제공하는 웹 서비스입니다. 오늘과 내일의 급식 메뉴를 확인할 수 있습니다.",
          linkText: "급식확인",
          link: "https://luka0116kjh.github.io/ghaslunch1/",
          img: lunch,
          tags: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "Web Vulnerability Scanner",
          subtitle: "웹사이트 간단 보안 진단 도구",
          desc: "Python Flask를 백엔드로 사용하여 웹사이트의 HTTPS 연결 여부와 서버 응답 속도를 진단하는 도구입니다. CORS 이슈를 해결하기 위해 프록시 서버 구조를 설계했습니다.",
          linkText: "GitHub 이동",
          link: "https://github.com/luka0116kjh/simple-antivirus",
          img: webv,
          tags: ["Python", "Flask", "Security"],
        },
        {
          title: "홈페이지 취약점 분석 보고서",
          subtitle: "경기자동차과학고등학교 보안 패치 권고",
          desc: "학교 홈페이지 개편 이후 API 통합 과정에서 발견된 보안 취약점을 분석한 과정을 담은 보고서입니다.",
          linkText: "보고서 보기",
          link: "https://docs.google.com/document/d/1Yui7xDmhvp7FbTuMO3sLaGFI1_H-jHLo0Uzidonn1fk/edit?usp=sharing",
          img: qwer,
          tags: ["Security", "Vulnerability Analysis", "Report"],
        },
      ],
      awards: [
        {
          title: "총장배 로봇 프로그래밍 경진대회 참가",
          subtitle: "한국공학대 메카트로닉스 EV3",
          desc: "LEGO EV3로 미션을 해결하는 로봇을 프로그래밍하고 자율주행/센서 기반 동작을 시연했습니다. (3등)",
          img: "https://luka0116kjh.github.io/portfolio/img/3.jpg",
          tags: ["EV3", "Robotics", "Python"],
        },
        {
          title: "해킹 경진 대회 출전",
          subtitle: "Security CTF Teamwork",
          desc: "현대오토에버 화이트해커 양성교육을 듣고 화이트해커 경진대회를 나가 입상을 받았습니다.",
          img: "https://luka0116kjh.github.io/portfolio/img/wh.jpg",
          tags: ["CTF", "Web", "Forensics"],
        },
      ],

      visualcamp: {
        title: "VisualCamp Experience",
        status: "진행중",

        summary: "보안 관점으로 웹 기능을 구현하고, 문제 풀이를 문서화해 설명 가능한 결과물로 정리했습니다.",

        desc: "비주얼캠프 도제활동을 통해 애플리케이션, 웹 관련 프론트엔드 개발을 함께 학습하며, 실습/문제 해결/정리까지 연결하는 방식으로 역량을 키우고 있습니다.",

        role: "Application Security + Frontend Trainee",

        tags: ["Security", "Frontend", "Algorithms", "Documentation"],

        fields: [
          "애플리케이션, 웹 및 프론트엔드 개발 실습"
        ],

        works: [
          "알고리즘 최적화 및 자료구조 이해 학습",
          "프론트엔드 개발 환경 설정 및 기본 기능 구현",
          "문제 풀이 과정 및 코드 원리 설명",
        ],

        techStack: [
          "Python",
          "JavaScript",
          "Git/GitHub",
          "OWASP Top 10 (학습)",
          "Algorithms / Data Structures",
        ],

        outcomes: [
          "문제 풀이 후 코드 원리 설명으로 이해도/커뮤니케이션 향상",
          "프론트엔드 개발 환경 설정 및 기본 기능 구현",
          "학습 내용을 재사용 가능한 형태로 정리(템플릿화/정리 방식 고도화)",
        ],

        links: {
          notion: "",
          github: "",
          demo: "",
        },

        logo: "https://luka0116kjh.github.io/portfolio/img/vc.png",
        photo: "https://luka0116kjh.github.io/portfolio/img/fafa.png",
      },

    }),
    []
  );

  return (
    <div className={dark ? "app dark" : "app"}>
      <header className="header">
        <div className="container headerInner">
          <button className="brand" onClick={() => scrollToId("top")}>
            {data.name}
          </button>

          <nav className="nav">
            <button onClick={() => scrollToId("about")}>About</button>
            <button onClick={() => scrollToId("skills")}>Skills</button>
            <button onClick={() => scrollToId("Tech projects")}>Tech Projects</button>
            <button onClick={() => scrollToId("awards")}>Awards</button>
            <button onClick={() => scrollToId("visualcamp")}>VisualCamp</button>
          </nav>

          <button className="themeBtn" onClick={() => setDark((v) => !v)}>
            {dark ? "DARK" : "LIGHT"}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="section hero">
          <div className="container heroGrid">
            <div>
              <p className="kicker">{data.headline}</p>
              <h1 className="h1">{data.name}</h1>
              <p className="sub">{data.role}</p>
              <p className="lead">{data.oneLiner}</p>

              <div className="row">
                <a className="btn" href={data.links.mail}>Mail</a>
                <a className="btn ghost" href={data.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>

            <div className="card heroCard">
              <h3 className="cardTitle">Introduction</h3>
              <p className="p">{data.introKo}</p>
              <div className="divider" />
              <h4 className="miniTitle">Programming Languages</h4>
              <div className="chips">
                {data.languages.map((x) => (
                  <span className="chip" key={x}>{x}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2 className="h2">High School</h2>

            <div className="grid2">
              <div className="card">
                <div className="rowBetween">
                  <h3 className="h3">내부활동</h3>
                </div>
                <ul className="list">
                  {data.highschool.inside.map((x) => <li key={x}>{x}</li>)}
                </ul>
                <img className="img" src={data.highschool.imgInside} alt="교내 활동" loading="lazy" />
              </div>

              <div className="card">
                <div className="rowBetween">
                  <h3 className="h3">외부활동</h3>
                </div>
                <ul className="list">
                  {data.highschool.outside.map((x) => <li key={x}>{x}</li>)}
                </ul>
                <img className="img" src={data.highschool.imgOutside} alt="교외 활동" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2 className="h2">Tech Stack</h2>
            <p className="muted">다양한 기술로 문제를 해결하고, 지속적으로 학습하며 성장합니다.</p>

            <div className="grid3">
              {data.techStack.map((s) => (
                <article className="card stackCard" key={s.title}>
                  <img className="img small" src={s.img} alt={s.title} loading="lazy" />
                  <h3 className="h3">{s.title}</h3>
                  <p className="p">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* 기술 프로젝트 섹션 */}
        <section id="Tech projects" className="section">
          <div className="container">
            <h2 className="h2">Tech Projects</h2>
            <p className="muted">직접 설계하고 구현한 소프트웨어 프로젝트입니다.</p>
            <div className="grid3">
              {data.techProjects.map((p) => (
                <article className="card projectCard" key={p.title}>
                  <img className="img" src={p.img} alt={p.title} loading="lazy" />
                  <h3 className="h3">{p.title}</h3>
                  <p className="muted">{p.subtitle}</p>
                  <div className="chips">
                    {p.tags?.map((t) => <span className="chip" key={t}>{t}</span>)}
                  </div>
                  <p className="p">{p.desc}</p>
                  {p.link && (
                    <a className="link" href={p.link} target="_blank" rel="noreferrer">
                      {p.linkText ?? "Link"}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 수상 및 성과 섹션 */}
        <section id="awards" className="section">
          <div className="container">
            <h2 className="h2">Awards & Experience</h2>
            <p className="muted">대회 수상 및 대외 활동 기록입니다.</p>
            <div className="grid3">
              {data.awards.map((p) => (
                <article className="card projectCard" key={p.title}>
                  <img className="img" src={p.img} alt={p.title} loading="lazy" />
                  <h3 className="h3">{p.title}</h3>
                  <p className="muted">{p.subtitle}</p>
                  <div className="chips">
                    {p.tags?.map((t) => <span className="chip" key={t}>{t}</span>)}
                  </div>
                  <p className="p">{p.desc}</p>
                  {p.link && (
                    <a className="link" href={p.link} target="_blank" rel="noreferrer">
                      {p.linkText ?? "Link"}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="visualcamp" className="section">
          <div className="container">
            <h2 className="h2">VisualCamp Experience</h2>

            <div className="grid2">
              <div className="card">
                <div className="rowBetween">
                  <h3 className="h3">VisualCamp – 도제활동</h3>
                  <span className="badge">{data.visualcamp.status}</span>
                </div>
                <p className="p">{data.visualcamp.desc}</p>

                <div className="divider" />
                <h4 className="miniTitle">참여 분야</h4>
                <ul className="list">
                  {data.visualcamp.fields.map((x) => <li key={x}>{x}</li>)}
                </ul>

                <h4 className="miniTitle">주요 업무</h4>
                <ul className="list">
                  {data.visualcamp.works.map((x) => <li key={x}>{x}</li>)}
                </ul>

                <h4 className="miniTitle">성과</h4>
                <ul className="list">
                  {data.visualcamp.outcomes.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>

              <div className="card">
                <div className="row logoRow">
                  <img className="logo" src={data.visualcamp.logo} alt="visualcamp logo" />
                  <div>
                    <p className="p">visualcamp</p>
                  </div>
                </div>
                <div className="divider" />
                <img className="img" src={data.visualcamp.photo} alt="VisualCamp 활동" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerInner">
            <span>© {new Date().getFullYear()} Luka.</span>
            <span className="muted">소중한 시간 내어 봐주셔서 감사합니다.</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

