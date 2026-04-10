import { useEffect, useState } from "react";
import "./App.css";

import lifeos from "./assets/lifeos.png";
import snake from "./assets/snake.png";
import githubIcon from "./assets/github.png";
import algorithmCard from "./assets/pro.png";
import securityReport from "./assets/蹂닿퀬??png";
import lunch from "./assets/lunch.png";
import devDNA from "./assets/DNA.png";
import tistoryCover from "./assets/t.png";
import zeroScan from "./assets/?뺣낫.png";

const profile = {
  name: "Luka",
  title: "Frontend Developer | Security Engineering | AI Prototyping",
  headline: "肄붾뱶 ?덈㉧??媛?μ꽦???먭뎄?섎ŉ, ?덉쟾?섍퀬 李쎌쓽?곸씤 ?붿????몄긽???ㅺ퀎?⑸땲??,
  summary:
    "蹂댁븞 ?ш퀬諛⑹떇?쇰줈 ?쒖뒪?쒖쓽 鍮덊땲???댄뵾怨? ?꾨줎?몄뿏??湲곗닠濡??꾩씠?붿뼱瑜??쒓컖?뷀빀?덈떎. ?⑥닚??援ы쁽???섏뼱 '????湲곗닠?멸??'? '?대뼡 媛移섎? 二쇰뒗媛?'??????듭쓣 李얜뒗 怨쇱젙??利먭퉩?덈떎. 湲곗닠? ?쒓쾶 ?몄긽?????섏? 諛⑺뼢?쇰줈 諛붽씀??媛??媛뺣젰???꾧뎄?낅땲??",
  location: "Korea",
  email: "mailto:kjh08116@naver.com",
  github: "https://github.com/luka0116kjh",
  blog: "https://luka04.tistory.com/",
  velog: "https://velog.io/@luka0116kjh/posts",
};

const philosophy = [
  {
    title: "The Maker Mindset",
    text: "癒몃┸?띿쓽 ?꾩씠?붿뼱瑜??щ윭媛吏 ?ㅽ뻾???섎㈃??留뚯빟???닿쾶 ?ㅽ뻾???쒕떎硫??대뼥源? ?쇰뒗 ?앷컖??媛吏怨??ㅽ뙣瑜??먮젮?뚰븯吏 ?딄퀬 ?쇰떒 留뚮뱾?대낫硫?諛곗썎?덈떎.",
  },
  {
    title: "Security First",
    text: "湲곕뒫???뚯븘媛??寃껊쭔?쇱씠???덉쟾?섍쾶 ?뚯븘媛??寃껋씠 以묒슂?⑸땲?? 媛쒕컻 珥덇린 ?④퀎遺??蹂댁븞??愿?먯쓣 寃고빀??吏??媛?ν븳 ?쒕퉬?ㅻ? 吏?ν빀?덈떎.",
  },
  {
    title: "Continuous Explorer",
    text: "AI, 3D ?? 蹂댁븞 ??寃쎄퀎瑜??먯? ?딄퀬 ?덈줈??湲곗닠???숈뒿?⑸땲?? ?쒕줈 ?ㅻⅨ 遺꾩빞瑜??곌껐???낇듅??寃곌낵臾쇱쓣 留뚮뱾?대궡??寃껋쓣 醫뗭븘?⑸땲??",
  },
];


const quickFacts = [
  {
    label: "????꾨줈?앺듃",
    value: "7+",
    note: "?? 蹂댁븞, ?곗씠???쒓컖?? 寃뚯엫",
  },
  {
    label: "諛고룷 諛⑹떇",
    value: "CI/CD",
    note: "GitHub Actions -> GitHub Pages ?먮룞 諛고룷",
  },
  {
    label: "?듭떖 ??웾",
    value: "臾몄젣 ?닿껐",
    note: "援ы쁽 ?댁쑀? 援ъ“ ?좏깮???④퍡 ?ㅻ챸?섎뒗 媛쒕컻",
  },
];

const strengths = [
  {
    title: "?뺣낫瑜?援ъ“?뷀븯???꾨줎?몄뿏??,
    description:
      "?ъ슜?먭? ?먰븯???뺣낫瑜?鍮좊Ⅴ寃?李얠쓣 ???덈룄濡?肄섑뀗痢좊? 諛곗뿴 湲곕컲 ?곗씠?곕줈 ?뺣━?섍퀬, ?뱀뀡 ?⑥쐞 ?먯깋 ?먮쫫???ㅺ퀎?⑸땲??",
  },
  {
    title: "蹂댁븞 愿?먯쓽 臾몄젣 ?댁꽍",
    description:
      "痍⑥빟??遺꾩꽍怨?怨듦꺽 ?쒕굹由ъ삤瑜?湲곕뒫 ?ㅺ퀎? ?④퍡 諛붾씪遊낅땲?? ?쒕퉬??援ы쁽肉??꾨땲???꾪뿕 ?붿냼瑜?以꾩씠??諛⑺뼢?쇰줈 ?묎렐?⑸땲??",
  },
  {
    title: "鍮좊Ⅸ ?꾨줈?좏??댄븨怨??ㅼ쟾??媛쒖꽑",
    description:
      "?꾩씠?붿뼱瑜??붾㈃怨??숈옉?쇰줈 鍮좊Ⅴ寃???린怨? ?댄썑 援ъ“ 遺꾨━? 諛섎났 媛?ν븳 諛고룷 ?먮쫫源뚯? ?뺣━???댁쁺 媛?ν븳 ?곹깭濡??뚯뼱?щ┰?덈떎.",
  },
];

const skillGroups = [
  {
    name: "Frontend",
    reason:
      "?ы듃?대━?ㅼ? ?곗씠???쒓컖???꾨줈?앺듃?먯꽌 ?붾㈃ 援ъ“瑜?鍮좊Ⅴ寃?議고빀?섍퀬 諛섎났 UI瑜??좎?蹂댁닔 媛?ν븳 ?뺥깭濡?愿由ы븯湲??꾪빐 ?ъ슜?덉뒿?덈떎.",
    items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Vite"],
  },
  {
    name: "Backend / Data",
    reason:
      "API ?곕룞, ?곗씠??媛怨? 蹂댁븞 湲곕뒫 ?ㅽ뿕???꾩슂???꾨줈?앺듃?먯꽌 ?쒕쾭 濡쒖쭅怨??곗씠??泥섎━ ?먮쫫??寃利앺븯湲??꾪빐 ?ъ슜?덉뒿?덈떎.",
    items: ["Python", "FastAPI", "Flask", "SQL", "Oracle SQL"],
  },
  {
    name: "Security / Infra",
    reason:
      "痍⑥빟??遺꾩꽍怨??쒕퉬???댁쁺 愿?먯쓽 ?ㅽ뿕???꾪빐 濡쒖뺄 ?섍꼍, 諛고룷, 怨듦꺽 ?⑦꽩 ?댄빐瑜??④퍡 ?ㅻ쨾?듬땲??",
    items: ["OWASP Top 10", "Linux", "GitHub Actions", "Git/GitHub", "ASM"],
  },
  {
    name: "Problem Solving",
    reason:
      "湲곕뒫 援ы쁽 ?댁쟾??臾몄젣瑜?遺꾪빐?섍퀬 ?곸젅???먮즺援ъ“? ?먮쫫???좏깮?댁빞 ?꾨줈?앺듃 ?꾩꽦?꾧? ?щ씪媛꾨떎怨??먮떒??袁몄????ㅼ죱?듬땲??",
    items: ["Algorithms", "Data Structures", "Python", "Java"],
  },
];

const featuredProjects = [
  {
    title: "ZeroScan WAF",
    subtitle: "釉뚮씪?곗? ?섍꼍?먯꽌 ??怨듦꺽???ㅼ떆媛꾩쑝濡??먯??섍퀬 李⑤떒?섎뒗 ?뺤옣??蹂댁븞 ?쒖뒪??,
    image: zeroScan,
    tags: ["Python", "FastAPI", "Security"],
    problem:
      "?쇰컲 ?ъ슜?먮뒗 ?뱀궗?댄듃 ?댁슜 以?SQL Injection, XSS? 媛숈? 怨듦꺽???몄텧?섎뜑?쇰룄 ?대? ?몄??섍굅????묓븯湲??대졄?듬땲??",
    solution:
      "釉뚮씪?곗? ?뺤옣 ?꾨줈洹몃옩 ?뺥깭濡??붿껌???ㅼ떆媛?遺꾩꽍?섍퀬, SQL Injection 諛?XSS ?⑦꽩 湲곕컲 ?먯? 濡쒖쭅??援ы쁽?덉뒿?덈떎. ?꾪뿕 ?붿껌??媛먯??섎㈃ 寃쎄퀬 ?뚮┝???쒓났?섍퀬 李⑤떒 ?섏씠吏濡?由щ떎?대젆?몃릺?꾨줉 ?ㅺ퀎?덉뒿?덈떎.",
    result:
      "?ъ슜?먭? 蹂댁븞 ?꾪삊??利됱떆 ?몄??????덈룄濡??덇퀬, ?대씪?댁뼵???덈꺼?먯꽌 ?ㅼ떆媛?諛⑹뼱 援ъ“瑜?援ы쁽?덉뒿?덈떎.",
    link: "https://github.com/luka0116kjh/waf",
    linkText: "GitHub 蹂닿린",
  },
  {
    title: "DevDNA",
    subtitle: "GitHub ?쒕룞 ?곗씠?곕? 遺꾩꽍??媛쒕컻?먯쓽 ?⑦꽩怨?湲곗닠 ?깊뼢???쒓컖?뷀븯???쒕퉬??,
    image: devDNA,
    tags: ["React", "Three.js", "Data Visualization"],
    problem:
      "GitHub???붾뵒 洹몃옒?꾨뒗 ?⑥닚???쒕룞?됰쭔 ?쒓났?섎ŉ, 媛쒕컻?먯쓽 湲곗닠 ?깊뼢?대굹 ?쒕룞 ?⑦꽩???뚯븙?섍린 ?대졄?듬땲??",
    solution:
      "GitHub API 湲곕컲?쇰줈 ?쒕룞 ?곗씠?곕? ?섏쭛?섍퀬, 2D/3D ?쒓컖??諛⑹떇?쇰줈 而ㅻ컠 諛??쒕룞 ?먮쫫???쒗쁽?덉뒿?덈떎. ?쒕룞 ?⑦꽩怨?湲곗닠 ?ъ슜 寃쏀뼢??遺꾩꽍?섎뒗 援ъ“???④퍡 ?ㅺ퀎?덉뒿?덈떎.",
    result:
      "媛쒕컻?먯쓽 ?쒕룞 ?ㅽ??쇨낵 湲곗닠 ?먮쫫??吏곴??곸쑝濡??뚯븙?????덇쾶 ?덇퀬, ?ы듃?대━???뺤옣 ?붿냼濡쒕룄 ?쒖슜?????덈룄濡?援ъ꽦?덉뒿?덈떎.",
    link: "https://github.com/luka0116kjh/DevDNA",
    linkText: "GitHub 蹂닿린",
  },
  {
    title: "GHAS Lunch",
    subtitle: "?숆탳 湲됱떇 ?뺣낫瑜?鍮좊Ⅴ怨?吏곴??곸쑝濡??뺤씤?????덈뒗 ?숈깮?????쒕퉬??,
    image: lunch,
    tags: ["HTML", "JavaScript", "Public API"],
    problem:
      "湲곗〈 ?숆탳 ?덊럹?댁???湲됱떇 ?뺣낫瑜??뺤씤?섍린源뚯????묎렐 怨쇱젙??蹂듭옟?섍퀬 鍮꾪슚?⑥쟻?낅땲??",
    solution:
      "湲됱떇 ?뺣낫瑜????붾㈃?먯꽌 ?뺤씤?????덈뒗 UI瑜??ㅺ퀎?섍퀬, 遺덊븘?뷀븳 ?대┃ ?④퀎瑜??쒓굅???묎렐?깆쓣 ?믪??듬땲?? 鍮좊Ⅸ 濡쒕뵫 援ъ“瑜??곸슜???숈깮??諛붾줈 ?뺣낫瑜??뺤씤?????덈룄濡?留뚮뱾?덉뒿?덈떎.",
    result:
      "?ㅼ젣 ?숈깮?ㅼ씠 吏?띿쟻?쇰줈 ?ъ슜?섎뒗 ?쒕퉬?ㅻ줈 ?댁뼱議뚭퀬, ?ъ슜??以묒떖 UI 媛쒖꽑 ?④낵瑜?寃利앺븷 ???덉뿀?듬땲??",
    link: "https://luka0116kjh.github.io/ghaslunch1/",
    linkText: "?쒕퉬??蹂닿린",
  },
  {
    title: "Life OS",
    subtitle: "AI 湲곕컲?쇰줈 紐⑺몴瑜??ㅽ뻾 媛?ν븳 ?⑥쐞濡?遺꾪빐?섍퀬 ?쇱씪 ?됰룞源뚯? ?곌껐?섎뒗 媛쒖씤 ?댁쁺 ?쒖뒪??,
    image: lifeos,
    tags: ["Web", "TypeScript", "Mobile"],
    problem:
      "?щ엺?ㅼ? ?κ린?곸씤 紐⑺몴瑜??몄슦?붾씪???대? 援ъ껜?곸씤 ?됰룞?쇰줈 ?곌껐?섏? 紐삵빐 ?ㅽ뻾?μ씠 ?⑥뼱吏묐땲??",
    solution:
      "AI瑜??쒖슜??紐⑺몴瑜??? ?? ???⑥쐞濡??먮룞 遺꾪빐?섍퀬 ?κ린, 以묎린, ?④린 怨꾪쉷???듯빀 愿由ы븯??援ъ“瑜??ㅺ퀎?덉뒿?덈떎. ?섎（ ?⑥쐞 ?ㅽ뻾 怨꾪쉷???먮룞 ?앹꽦?섎룄濡?援ъ꽦???ㅼ쿇源뚯? ?댁뼱吏寃??덉뒿?덈떎.",
    result:
      "紐⑺몴瑜??ㅼ젣 ?됰룞?쇰줈 ?곌껐?섎뒗 援ъ“瑜?援ы쁽?덇퀬, 怨꾪쉷 以묒떖???꾨땶 ?ㅽ뻾 以묒떖??媛쒖씤 ?댁쁺 ?쒖뒪?쒖쑝濡?諛쒖쟾?쒖섟?듬땲??",
    link: "https://github.com/luka0116kjh/LifeOS-",
    linkText: "GitHub 蹂닿린",
  },
];

const projectArchive = [
  {
    title: "Snake Game",
    image: snake,
    summary:
      "Python pygame 湲곕컲?쇰줈 ?쒖옉??寃뚯엫 ?꾨줈?앺듃?낅땲?? 湲곕낯 洹쒖튃 ?꾩뿉 ?먯닔 援ъ“? ?뚮젅???먮쫫??吏곸젒 ?ㅺ퀎?섎ŉ ?곹깭 愿由ъ? 寃뚯엫 猷⑦봽瑜??듯삍?듬땲??",
    tags: ["Python", "pygame", "Game Development"],
    link: "https://github.com/luka0116kjh/Snake-game",
  },
  {
    title: "Security Vulnerability Report",
    image: securityReport,
    summary:
      "?숆탳 ?덊럹?댁? 媛쒗렪 ?댄썑 API ?듯빀 怨쇱젙?먯꽌 諛쒓껄??蹂댁븞 痍⑥빟?먯쓣 遺꾩꽍?섍퀬, ?꾪뿕 ?붿냼? 媛쒖꽑 沅뚭퀬?덉쓣 臾몄꽌?뷀븳 蹂닿퀬?쒖엯?덈떎.",
    tags: ["Security", "Report", "Analysis"],
    link: "https://docs.google.com/document/d/1Yui7xDmhvp7FbTuMO3sLaGFI1_H-jHLo0Uzidonn1fk/edit?usp=sharing",
  },
  {
    title: "Study Archive",
    image: tistoryCover,
    summary:
      "?숈뒿???댁슜??湲濡??뺣━?섎ŉ 湲곗닠 ?좏깮 ?댁쑀? 援ы쁽 怨쇱젙???④린??釉붾줈洹몄엯?덈떎. ?⑥닚 湲곕줉???꾨땲??吏???뺤젣 ?꾧뎄濡??댁쁺?섍퀬 ?덉뒿?덈떎.",
    tags: ["Tistory", "Writing", "Documentation"],
    link: "https://luka04.tistory.com/",
  },
];

const processCards = [
  {
    title: "肄섑뀗痢좊? 援ъ“?뷀빐??愿由?,
    detail:
      "?꾨줈?앺듃, 湲곗닠, 寃쏀뿕 ?곗씠?곕? 媛앹껜 諛곗뿴濡?遺꾨━???뱀뀡???섏뼱?섎룄 媛숈? ?⑦꽩?쇰줈 ?뺤옣?????덈룄濡?援ъ꽦?덉뒿?덈떎.",
  },
  {
    title: "?ъ슜???먯깋 ?먮쫫???곗꽑 ?ㅺ퀎",
    detail:
      "?곷떒 怨좎젙 ?대퉬寃뚯씠?섍낵 ?ㅻТ???ㅽ겕濡ㅼ쓣 ?곸슜??湲??⑥씪 ?섏씠吏?먯꽌???먰븯???곸뿭源뚯? 鍮좊Ⅴ寃??대룞?????덇쾶 留뚮뱾?덉뒿?덈떎.",
  },
  {
    title: "?댁쁺 媛?ν븳 ?뺤쟻 ?쒕퉬?ㅻ줈 諛고룷",
    detail:
      "main 釉뚮옖移?諛섏쁺 ??GitHub Actions媛 ?먮룞?쇰줈 鍮뚮뱶?섍퀬 GitHub Pages??諛고룷?섎룄濡??곌껐??諛고룷 怨쇱젙???쒖??뷀뻽?듬땲??",
  },
];

const experience = [
  {
    title: "VisualCamp Trainee",
    period: "Ongoing",
    description:
      "蹂댁븞 愿?먯쓽 臾몄젣 ?댁꽍怨??꾨줎?몄뿏??援ы쁽 ?덈젴??蹂묓뻾?섎ŉ, ?뚭퀬由ъ쬁 ?숈뒿怨?臾몄꽌?붾? ?④퍡 ?섑뻾?섍퀬 ?덉뒿?덈떎.",
    points: [
      "臾몄젣 ?닿껐 怨쇱젙??肄붾뱶? 臾몄꽌濡??숈떆???뺣━",
      "蹂댁븞 ?ш퀬諛⑹떇??湲곕뒫 援ы쁽 愿?먭낵 ?곌껐",
      "湲곗큹 援ы쁽蹂대떎 援ъ“? ?ㅻ챸 媛?μ꽦??以묒떆?섎뒗 ?듦? 媛뺥솕",
    ],
  },
  {
    title: "Security / Robotics / School Activities",
    period: "Experience",
    description:
      "??? ? ?쒕룞, 諛쒗몴 寃쏀뿕???듯빐 援ы쁽 寃곌낵臾쇰쭔???꾨땲???묒뾽怨??꾨떖 諛⑹떇??以묒슂?깆쓣 ?④퍡 ?듯삍?듬땲??",
    points: [
      "CTF 諛?蹂댁븞 ?쒕룞 李몄뿬",
      "濡쒕낫?깆뒪, 硫붿씠而ㅽ삎 ?꾨줈?앺듃 寃쏀뿕",
      "湲곕줉怨?諛쒗몴瑜??듯븳 ?숈뒿 寃곌낵 ?뺣━",
    ],
  },
];

const engineeringNotes = [
  "?ㅽ겕紐⑤뱶 ?곹깭瑜?localStorage????ν빐 ?щ갑臾????숈씪??UI ?곹깭瑜??좎??⑸땲??",
  "?꾨줈?앺듃 移대뱶 ?대?吏??lazy loading?쇰줈 泥섎━??湲??섏씠吏??珥덇린 濡쒕뵫 遺?댁쓣 以꾩??듬땲??",
  "?뺤쟻 ?ъ씠??援ъ“瑜??좎????댁쁺 蹂듭옟?꾨? ??텛怨? 肄섑뀗痢??꾨떖??吏묒쨷?덉뒿?덈떎.",
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
                ?붾㈃? 蹂닿린 醫뗪쾶 留뚮뱶??寃껋쑝濡??앸굹吏 ?딅뒗?ㅺ퀬 ?앷컖?⑸땲?? ?대뼡 ?뺣낫瑜??욎뿉 ?먭퀬,
                ?대뼡 ?먮쫫?쇰줈 ?쏀엳寃?留뚮뱾吏源뚯? ?ㅺ퀎?댁빞 ?ㅼ젣 ?쒕퉬?ㅺ? ?⑸땲??
              </p>

              <div className="miniPanel">
                <img className="miniPanelIcon" src={githubIcon} alt="GitHub icon" loading="lazy" />
                <div>
                  <p className="miniLabel">Work Style</p>
                  <strong>臾몄젣 ?뺤쓽 - 援ъ“ ?ㅺ퀎 - 援ы쁽 - 諛고룷</strong>
                  <p>?묐룞?섎뒗 ?붾㈃怨??ㅻ챸 媛?ν븳 援ъ“瑜??④퍡 ?④퉩?덈떎.</p>
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
                  <p>鍮좊Ⅴ寃?留뚮뱾怨? ?댄썑 ?좎?蹂댁닔 媛?ν븳 ?뺥깭濡??ㅻ벉???묒뾽???좏샇?⑸땲??</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="contentSection">
          <div className="container">
            <SectionHeading
              eyebrow="Identity"
              title="?대뼡 怨좊????섎ŉ 臾댁뾿??吏?ν븯?붿? ?뚭컻?⑸땲??
              description="?⑥닚??湲곗닠 ?ㅽ깮???섏뿴?섍린蹂대떎, ?쒓? 媛쒕컻????섎뒗 ?쒕룄? ?몄긽??諛붾씪蹂대뒗 愿?먯쓣 ?댁븯?듬땲??"
            />

            <div className="philosophyGrid">
              {philosophy.map((item) => (
                <article className="panel philosophyCard" key={item.title}>
                  <p className="panelEyebrow">My Philosophy</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="strengthGrid sectionSpacing">
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
                <h3>React 湲곕컲 ?뺤쟻 ?ы듃?대━??+ GitHub Actions ?먮룞 諛고룷</h3>
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
              title="湲곕뒫 ?ㅻ챸蹂대떎 臾몄젣 ?닿껐 ?먮쫫??蹂댁씠?꾨줉 ?뺣━?????寃곌낵臾?
              description="紐⑤뱺 ?꾨줈?앺듃??臾댁뾿??留뚮뱾?덈뒗吏蹂대떎 ?대뼡 臾몄젣瑜??뺤쓽?덇퀬, ?대뼸寃??닿껐?덈뒗吏瑜?以묒떖?쇰줈 ?뺣━?덉뒿?덈떎."
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
                      ?먯꽭??蹂닿린
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
              title="湲곗닠???섏뿴?섏? ?딄퀬, ???좏깮?덈뒗吏源뚯? ?ㅻ챸?섎뒗 ?ㅽ깮"
              description="?꾧뎄??紐⑹쟻???곕씪 ?좏깮?덉뒿?덈떎. 鍮좊Ⅸ ?꾨줈?좏??댄븨, 援ъ“ ?좎?蹂댁닔, 蹂댁븞 ?ㅽ뿕, ?곗씠??泥섎━?쇰뒗 湲곗??쇰줈 ?ㅽ깮???ъ슜?덉뒿?덈떎."
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
              title="?ㅽ뻾 寃쏀뿕怨??숈뒿 諛⑹떇???④퍡 ?쒕윭?섎뒗 ?대젰"
              description="?⑥닚 李몄뿬 ?대젰???꾨땲?? ?대뼡 愿?먭낵 諛⑹떇?쇰줈 ?깆옣?덈뒗吏 蹂댁씠?꾨줉 ?뺣━?덉뒿?덈떎."
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
                <h3>???ы듃?대━???먯껜???섎굹???쒗뭹?쇰줈 ?ㅻ쨾?듬땲??</h3>
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
              <h2>臾몄젣瑜??쎄퀬 寃곌낵臾쇰줈 ?곌껐?섎뒗 媛쒕컻?먮? 李얘퀬 ?덈떎硫?/h2>
              <p className="sectionDescription">
                ?꾨줎?몄뿏??援ы쁽, 蹂댁븞 愿?먯쓽 湲곕뒫 ?ㅺ퀎, 鍮좊Ⅸ ?꾨줈?좏??댄븨???꾩슂???섍꼍?먯꽌 媛뺤젏??                諛쒗쐶?????덉뒿?덈떎.
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
