import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Lock, Eye, Code, Zap, ArrowRight, ChevronDown, Mail } from 'lucide-react';
import './App.css'; // kept empty just in case
import './index.css';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const ParallaxSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark-main/80" />
      </motion.div>
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-dark-main text-text-main min-h-screen selection:bg-brand-blue/30 selection:text-white font-sans break-keep">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel md:px-10 px-6 py-4 flex justify-between items-center transition-all bg-dark-secondary/70">
        <div className="text-xl font-semibold tracking-tight text-text-main">
          GHAS.<span className="text-brand-blue">Security Luka</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-text-secondary">
          <a href="#problem" className="hover:text-white transition-colors">Philosophy</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#skills" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        </div>
        <a href="#contact" className="bg-text-main text-dark-main px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
          연락하기
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px] opacity-20 pointer-events-none" />

        <FadeIn className="text-center max-w-4xl z-10 w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-gradient py-2 leading-tight">
            보안을 구축하는 것을 넘어,<br />새롭게 설계합니다.
          </h1>
          <p className="text-lg md:text-2xl text-text-secondary mb-12 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            사용자 경험을 최우선으로, 강력하고 완벽한 환경을 엔지니어링하는 보안 중심의 디자이너 & 개발자입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#work" className="bg-text-main text-dark-main px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all flex items-center gap-2">
              작업 살펴보기 <ArrowRight size={20} />
            </a>
          </div>
        </FadeIn>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-text-secondary"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} opacity={0.5} />
        </motion.div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-32 px-6 flex flex-col items-center justify-center min-h-[70vh] bg-dark-secondary">
        <FadeIn className="text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            웹은 빠릅니다.<br />
            <span className="text-brand-blue">하지만 보안은 그렇지 않죠.</span>
          </h2>
          <p className="text-base md:text-xl text-text-secondary leading-relaxed font-light">
            대부분의 보안은 장벽처럼 느껴집니다. 우리는 나중에 이를 덧붙이고, 복잡한 UI로 포장한 채 모든 것이 안전하기만을 바라곤 합니다.
            하지만 복잡한 도구는 결코 안전을 만들지 않습니다. 진정한 안전함은 명확함에서 나옵니다.
          </p>
        </FadeIn>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-6 flex flex-col items-center justify-center min-h-[70vh]">
        <FadeIn className="text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-gradient leading-tight">
            매끄러운 디자인. 그리고 빈틈없는 엔지니어링.
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div>
              <Shield className="text-brand-blue mb-6" size={40} />
              <h3 className="text-xl font-semibold mb-4 text-text-main">보이지 않는 장막</h3>
              <p className="text-text-secondary leading-relaxed font-light">사용자 흐름에 자연스럽게 녹아든 방어 시스템. 어떠한 타협이나 플로우의 끊김도 존재하지 않습니다.</p>
            </div>
            <div>
              <Eye className="text-brand-blue mb-6" size={40} />
              <h3 className="text-xl font-semibold mb-4 text-text-main">가시적 위협 탐지</h3>
              <p className="text-text-secondary leading-relaxed font-light">데이터를 한눈에 파악하고 즉각적으로 대처할 수 있도록 설계된 실시간 위협 탐지 시스템을 제공합니다.</p>
            </div>
            <div>
              <Zap className="text-brand-blue mb-6" size={40} />
              <h3 className="text-xl font-semibold mb-4 text-text-main">압도적인 퍼포먼스</h3>
              <p className="text-text-secondary leading-relaxed font-light">로컬 환경에서 실행되는 최적화된 WAF 알고리즘을 통해 번개처럼 빠른 응답과 방어를 보장합니다.</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Featured Project */}
      <ParallaxSection className="bg-dark-secondary text-white border-y border-white/5 py-40">
        <div id="work" className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-20 text-center">
            <h2 className="text-sm font-semibold tracking-widest text-brand-blue uppercase mb-4">주요 프로젝트</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">ShieldGuard WAF</h3>
            <p className="text-xl md:text-2xl text-text-secondary mt-6 font-light">실시간 브라우저 기반 위협 탐지 프레임워크.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <FadeIn delay={0.2}>
              <div className="aspect-[4/3] rounded-2xl glass-panel relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent"></div>
                {/* Abstract visualization of a product */}
                <div className="relative z-10 flex flex-col items-center">
                  <Shield size={100} className="text-brand-blue drop-shadow-[0_0_15px_rgba(10,132,255,0.5)]" />
                  <div className="mt-8 flex gap-4">
                    <div className="h-2 w-16 bg-brand-blue rounded-full animate-pulse"></div>
                    <div className="h-2 w-4 bg-red-500 rounded-full"></div>
                    <div className="h-2 w-8 bg-brand-blue rounded-full"></div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <div className="flex flex-col gap-12">
              <FadeIn delay={0.3}>
                <h4 className="text-2xl font-bold mb-3 text-text-main">문제점</h4>
                <p className="text-text-secondary text-lg font-light leading-relaxed">기존의 방화벽(WAF)은 서버 측에서 실행되기 때문에 필연적으로 지연이 발생하며, XSS 및 제로데이 인젝션 공격에 대한 클라이언트 측의 가시성이 현저히 떨어집니다.</p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <h4 className="text-2xl font-bold mb-3 text-text-main">해결책</h4>
                <p className="text-text-secondary text-lg font-light leading-relaxed">실시간 DOM 변이와 네트워크 요청을 브라우저 단에서 즉시 검사하고 안전하게 필터링하는 경량화된 WAF 모델 기반의 크롬 확장 프로그램입니다.</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Secondary Projects */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">더 많은 혁신들</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.1} className="glass-panel p-10 rounded-3xl hover:bg-white/[0.05] transition-colors cursor-pointer group">
            <Lock className="text-brand-blue mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4">학교 소식 및 블로그</h3>
            <p className="text-text-secondary mb-8 font-light leading-relaxed">학교 소식 및 블로그 글 정보를 빠르고 직관적으로 확인할 수 있는 학생용 웹 서비스</p>
            <a href="https://ghasblog-8099b-47309.web.app/" target="_blank" rel="noreferrer" className="text-brand-blue font-medium group-hover:underline flex items-center gap-2 transition-all">자세히 보기 <ArrowRight size={16} /></a>
          </FadeIn>
          <FadeIn delay={0.2} className="glass-panel p-10 rounded-3xl hover:bg-white/[0.05] transition-colors cursor-pointer group">
            <Code className="text-brand-blue mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4">개인 운영 시스템</h3>
            <p className="text-text-secondary mb-8 font-light leading-relaxed">AI 기반으로 목표를 실행 가능한 단위로 분해하고 일일 행동까지 연결하는 개인 운영 시스템</p>
            <a href="https://github.com/luka0116kjh/LifeOS-" target="_blank" rel="noreferrer" className="text-brand-blue font-medium group-hover:underline flex items-center gap-2 transition-all">자세히 보기 <ArrowRight size={16} /></a>
          </FadeIn>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-dark-secondary">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-16 tracking-tight">핵심 역량</h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['React & Next.js', 'TypeScript', 'Web Application Security', 'Framer Motion', 'Tailwind CSS', 'Red Teaming', 'Cryptographic Protocols', 'UI/UX Design'].map((skill, i) => (
              <FadeIn key={skill} delay={i * 0.05} className="px-6 py-3 glass-panel rounded-full text-text-secondary font-medium tracking-wide">
                {skill}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6 max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight text-center">대외 활동 및 경험</h2>
        </FadeIn>
        <div className="space-y-8">
          <FadeIn delay={0.1} className="glass-panel p-8 md:p-10 rounded-3xl hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-2xl font-bold text-text-main">비주얼캠프 (VisualCamp) Trainee</h3>
              <span className="text-brand-blue font-medium mt-2 md:mt-0 tracking-wider">Ongoing</span>
            </div>
            <p className="text-text-secondary font-light leading-relaxed mb-6">
              보안 관점의 문제 해석과 프론트엔드 구현을 병행하며, 알고리즘 학습과 문서화를 수행. 기능 구현을 넘어 구조화 및 설명 가능성을 중시하는 개발 역량을 강화하고 있습니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1 bg-white/5 rounded-full text-text-secondary border border-white/10">알고리즘 및 자료구조</span>
              <span className="text-xs px-3 py-1 bg-white/5 rounded-full text-text-secondary border border-white/10">보안 사고방식 결합</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="glass-panel p-8 md:p-10 rounded-3xl hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-white/20 group-hover:bg-brand-blue group-hover:opacity-100 transition-all"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-2xl font-bold text-text-main">학교 활동 및 CTF / 메이커 프로젝트</h3>
              <span className="text-text-secondary font-medium mt-2 md:mt-0">Experience</span>
            </div>
            <p className="text-text-secondary font-light leading-relaxed mb-6">
              학내외 해킹 방어 대회(CTF) 참여, 로보틱스 기반의 메이커 프로젝트를 수행했습니다. 아이디어를 실제 프로덕트로 설계하고 결함을 방어하는 과정을 깊이 체득했습니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1 bg-white/5 rounded-full text-text-secondary border border-white/10">해킹 방어 대회 (CTF)</span>
              <span className="text-xs px-3 py-1 bg-white/5 rounded-full text-text-secondary border border-white/10">메이커 프로젝트 (로보틱스)</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-40 px-6 flex items-center justify-center min-h-[60vh] border-y border-white/5">
        <FadeIn className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gradient italic mb-8 leading-tight">
            "보안은 단순한 기능이 아닙니다.<br />하나의 경험입니다."
          </h2>
        </FadeIn>
      </section>

      {/* Contact */}
      <section id="contact" className="py-40 px-6 flex flex-col items-center justify-center text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">안전한 미래를 구축할 준비가 되셨나요?</h2>
          <p className="text-text-secondary text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed">
            전면적인 보안 개편이 필요하든, 제로 트러스트 원칙을 바탕으로 한 새로운 제품 설계가 필요하든, 언제든 이야기해 봅시다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:hello@example.com" className="bg-text-main text-dark-main px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
              <Mail size={20} /> Luka메일
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="glass-panel text-text-main px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <GithubIcon size={20} /> GitHub 확인하기
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center text-text-secondary border-t border-white/5 mt-20">
        <p className="text-sm font-light">© {new Date().getFullYear()} Luka portfolio</p>
      </footer>
    </div>
  );
}
