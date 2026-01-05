import { useEffect, useMemo, useState } from "react";
import "./App.css";
import notionImg from "./assets/notion.png";

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
        "SQL(MySQL)",
        "ASM",
      ],

      highschool: {
        inside: [
          "학생기자단",
          "학교 블로그 글 업로드",
          "서기",
          "스마트 도우미",
          "인공지능 창업체험 참여",
          "앱인벤터 교육",
          "인공지능 특강 참여",
          "토론 대회 예선전 출전",
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
          title: "Web Development",
          desc: "HTML, CSS, JavaScript로 반응형 웹사이트를 제작합니다. 지금은 간단하게라도 제작하며 퀄리티를 높여갑니다.",
          img: "https://luka0116kjh.github.io/portfolio/img/se.png",
        },
        {
          title: "AI & Machine Learning",
          desc: "머신러닝/딥러닝 등 AI 관련 학습을 지속합니다.",
          img: "https://luka0116kjh.github.io/portfolio/img/ai.png",
        },
        {
          title: "Security & Hacking",
          desc: "화이트해커 교육을 계기로 웹해킹/포렌식/리버싱/네트워크를 공부를 합니다.",
          img: "https://luka0116kjh.github.io/portfolio/img/bl.png",
        },
        {
          title: "Algorithms & Data Structures",
          desc: "효율적인 알고리즘 설계와 자료구조 활용에 집중하며 최적화를 연습합니다.",
          img: "https://luka0116kjh.github.io/portfolio/img/algorithms.png",
        }, {
          title: "Robotics & Automation",
          desc: "LEGO EV3 기반 로봇 프로그래밍을 통해 센서/모터 제어와 미션 수행 로직을 구현했습니다. 대회 환경에서 디버깅과 최적화를 반복하며 안정적인 동작을 완성했습니다.",
          img: "https://luka0116kjh.github.io/portfolio/img/ev3.jpg"
          ,
        },

      ],

      projects: [
        {
          title: "Concept Web Creation",
          subtitle: "Notion blog study",
          desc: "노션을 활용해 블로그 형식의 개인 연구 공간을 만들고, 공부/연구 내용을 기록할 계획입니다.",
          linkText: "blog 이동",
          link: "https://typhoon-ursinia-b26.notion.site/luka-blog-2b1a01a0e28580939f1df409b010bf76",
          img: notionImg,
          tags: ["Notion", "Writing", "Study Log"],
        }
        ,
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

        desc: "비주얼캠프 도제활동을 통해 애플리케이션 보안과 프론트엔드 개발을 함께 학습하며, 실습/문제 해결/정리까지 연결하는 방식으로 역량을 키우고 있습니다.",

        role: "Application Security + Frontend Trainee",

        tags: ["Security", "Frontend", "Algorithms", "Documentation"],

        fields: [
          "애플리케이션 보안 및 프론트엔드 개발 실습"
        ],

        works: [
          "알고리즘 최적화 및 자료구조 이해 학습",
          "입력 검증/에러 처리/권한 흐름 등 보안 고려한 구현 연습",
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
          "보안 관점 체크리스트 기반으로 구현 습관 강화(검증/권한/흐름)",
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
            <button onClick={() => scrollToId("projects")}>Projects</button>
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
        <section id="projects" className="section">
          <div className="container">
            <h2 className="h2">Projects</h2>
            <p className="muted">고등학교에서 참여한 대회 및 성과</p>

            <div className="grid3">
              {data.projects.map((p) => (
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

