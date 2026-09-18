import { useEffect, useRef, useState } from 'react'
import { CornerDownLeft, Image, Terminal } from 'lucide-react'
import remImage from '../rem.png'
import './MacTerminal.css'

function WindowBar({ title, icon }) {
  const Icon = icon

  return (
    <div className="mac-window-bar">
      <div className="mac-window-dots" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="mac-window-title"><Icon size={14} aria-hidden="true" />{title}</div>
      <span aria-hidden="true" />
    </div>
  )
}

export default function MacTerminal({ profile, skillCategories }) {
  const [command, setCommand] = useState('')
  const [history, setHistory] = useState(() => [
    { id: 0, command: 'whoami', output: `${profile.name} · ${profile.role}` },
    { id: 1, command: 'cat about.txt', output: profile.bio },
  ])
  const logRef = useRef(null)
  const nextId = useRef(2)

  useEffect(() => {
    const log = logRef.current
    log.scrollTop = log.scrollHeight
  }, [history])

  function handleCommand(event) {
    event.preventDefault()
    const value = command.trim()
    if (!value) return

    const normalized = value.toLowerCase()
    setCommand('')

    if (normalized === 'clear') {
      setHistory([])
      return
    }

    let output
    switch (normalized) {
      case 'help':
        output = 'whoami — 자기소개\nabout — 소개 글\nstack — 기술 스택\nclear — 화면 지우기'
        break
      case 'whoami':
        output = `${profile.name} · ${profile.role}`
        break
      case 'about':
      case 'cat about.txt':
        output = profile.bio
        break
      case 'stack':
        output = skillCategories.map(({ name, items }) => `${name}: ${items.join(', ')}`).join('\n')
        break
      default:
        output = `명령어를 찾을 수 없어요: ${value}\nhelp로 사용 가능한 명령어를 확인해 보세요.`
    }

    const entry = { id: nextId.current++, command: value, output }
    setHistory((current) => [...current.slice(-49), entry])
  }

  return (
    <section className="mac-desktop" aria-label="터미널로 만나는 Luka">
      <div className="mac-window mac-terminal">
        <WindowBar title="luka — zsh" icon={Terminal} />
        <div ref={logRef} className="terminal-log" role="log" aria-label="터미널 출력" tabIndex={0}>
          {history.map((entry) => (
            <div key={entry.id} className="terminal-entry">
              <p><span className="terminal-prompt">luka@macbook</span> <span className="terminal-path">~ %</span> {entry.command}</p>
              <p className="terminal-output">{entry.output}</p>
            </div>
          ))}
        </div>
        <div className="terminal-input-area">
          <p id="terminal-hint" className="terminal-hint">help를 입력해 둘러보세요.</p>
          <form className="terminal-form" onSubmit={handleCommand}>
            <span className="terminal-prompt" aria-hidden="true">~ %</span>
            <input
              aria-label="터미널 명령어"
              aria-describedby="terminal-hint"
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              placeholder="help"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              maxLength={200}
              enterKeyHint="send"
            />
            <button type="submit" aria-label="명령어 실행" title="명령어 실행"><CornerDownLeft size={16} aria-hidden="true" /></button>
          </form>
        </div>
      </div>

      <figure className="mac-window mac-preview" aria-label="rem.png 미리보기">
        <WindowBar title="rem.png" icon={Image} />
        <div className="mac-preview-image">
          <img src={remImage} alt="푸른 머리의 렘 캐릭터 일러스트" width={800} height={1136} loading="lazy" decoding="async" />
        </div>
      </figure>
    </section>
  )
}
