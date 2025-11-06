'use client'

import { useState, useEffect, useRef } from 'react'
import { PERSONAL_INFO } from '@/lib/data/personal-info'
import { SOCIAL_LINKS, EMAIL } from '@/lib/data/social-links'
import { experiences } from '@/lib/data/experiences'

interface CommandOutput {
  command: string
  output: React.ReactNode
}

const WELCOME_MESSAGE = `
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   Welcome to ${PERSONAL_INFO.name}'s Portfolio Terminal        ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝

Type 'help' to see available commands
`

function getHelp() {
  return `
Available commands:

  about      - Learn more about me
  skills     - View my technical skills
  experience - Show work experience
  projects   - Display my projects
  education  - Show education background
  contact    - Get contact information
  social     - View social media links
  clear      - Clear the terminal
  help       - Show this help message
`
}

function getAbout() {
  return `
${PERSONAL_INFO.name}
${PERSONAL_INFO.titles.join(' • ')}

${PERSONAL_INFO.bio}

Currently at: ${PERSONAL_INFO.school}
Company: ${PERSONAL_INFO.company}
Location: ${PERSONAL_INFO.location}
`
}

function getSkills() {
  const allTags = new Set<string>()
  experiences.forEach(exp => exp.tags.forEach(tag => allTags.add(tag)))

  return `
Technical Skills:

${Array.from(allTags).sort().map(skill => `  • ${skill}`).join('\n')}
`
}

function getExperience() {
  const workExperience = experiences.filter(exp => exp.type === 'experience')

  return (
    <div className="space-y-6">
      {workExperience.map((exp, i) => (
        <div key={i} className="border-l-2 border-green-500/30 pl-4">
          <div className="text-green-400 font-bold">{exp.title}</div>
          <div className="text-blue-400">{exp.company} | {exp.period}</div>
          <ul className="mt-2 space-y-1 text-gray-300">
            {exp.description.map((desc, j) => (
              <li key={j} className="text-sm">→ {desc}</li>
            ))}
          </ul>
          {exp.link && (
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 inline-block"
            >
              🔗 {exp.link}
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

function getProjects() {
  const projects = experiences.filter(exp => exp.type === 'project')

  return (
    <div className="space-y-6">
      {projects.map((proj, i) => (
        <div key={i} className="border-l-2 border-cyan-500/30 pl-4">
          <div className="text-cyan-400 font-bold">{proj.title}</div>
          {proj.badge && <span className="text-yellow-400 text-sm">⭐ {proj.badge}</span>}
          <div className="text-gray-400 text-sm">{proj.period}</div>
          <ul className="mt-2 space-y-1 text-gray-300">
            {proj.description.map((desc, j) => (
              <li key={j} className="text-sm">→ {desc}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
            {proj.tags.map(tag => (
              <span key={tag} className="text-xs text-purple-400">#{tag}</span>
            ))}
          </div>
          {proj.link && (
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 inline-block"
            >
              🔗 {proj.link}
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

function getEducation() {
  return `
Education:

  University of British Columbia (UBC)
  Bachelor of Computer Science

  Relevant Coursework:
  • Data Structures & Algorithms
  • Machine Learning & AI
  • Web Development
  • Database Systems
`
}

function getContact() {
  return `
Contact Information:

  Email: ${EMAIL}
  Location: ${PERSONAL_INFO.location}
  Company: ${PERSONAL_INFO.company}
  Website: ${PERSONAL_INFO.companyUrl}

Type 'social' to see all social media links
`
}

function getSocial() {
  return `
Social Media:

${Object.entries(SOCIAL_LINKS).map(([key, { label, href }]) =>
  `  ${label.padEnd(10)} → ${href}`
).join('\n')}
`
}

export function Terminal() {
  const [history, setHistory] = useState<CommandOutput[]>([
    { command: '', output: <pre className="text-green-400">{WELCOME_MESSAGE}</pre> }
  ])
  const [input, setInput] = useState('')
  const [isMinimized, setIsMinimized] = useState(false)
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const windowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isMinimized) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [history, isMinimized])

  useEffect(() => {
    if (!isMinimized) {
      inputRef.current?.focus()
    }
  }, [isMinimized])

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        })
      }
    }

    function handleMouseUp() {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragOffset])

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
      setIsDragging(true)
    }
  }

  function handleCommand(cmd: string) {
    const trimmedCmd = cmd.trim().toLowerCase()
    let output: React.ReactNode

    switch (trimmedCmd) {
      case 'help':
        output = <pre className="text-gray-300">{getHelp()}</pre>
        break
      case 'about':
        output = <pre className="text-gray-300">{getAbout()}</pre>
        break
      case 'skills':
        output = <pre className="text-gray-300">{getSkills()}</pre>
        break
      case 'experience':
        output = getExperience()
        break
      case 'projects':
        output = getProjects()
        break
      case 'education':
        output = <pre className="text-gray-300">{getEducation()}</pre>
        break
      case 'contact':
        output = <pre className="text-gray-300">{getContact()}</pre>
        break
      case 'social':
        output = <pre className="text-gray-300">{getSocial()}</pre>
        break
      case 'clear':
        setHistory([
          { command: '', output: <pre className="text-green-400">{WELCOME_MESSAGE}</pre> }
        ])
        setInput('')
        return
      case '':
        return
      default:
        output = (
          <div className="text-red-400">
            Command not found: {trimmedCmd}
            <br />
            Type 'help' to see available commands
          </div>
        )
    }

    setHistory(prev => [...prev, { command: cmd, output }])
    setInput('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 overflow-hidden">
      <div
        ref={windowRef}
        className="fixed rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl bg-black/40 border border-white/10"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isMinimized ? '300px' : 'min(900px, calc(100vw - 100px))',
          height: isMinimized ? 'auto' : 'min(600px, calc(100vh - 100px))',
          transition: isDragging ? 'none' : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* Window Title Bar */}
        <div
          className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-800/90 to-gray-900/90 border-b border-white/10 cursor-move select-none"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <button
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  // Could add close functionality
                }}
              />
              <button
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsMinimized(!isMinimized)
                }}
              />
              <button
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  // Could add maximize functionality
                }}
              />
            </div>
            <span className="text-sm text-gray-300 ml-2 font-mono">portfolio.terminal</span>
          </div>
          <div className="text-xs text-gray-500 font-mono">bash</div>
        </div>

        {/* Terminal Content */}
        {!isMinimized && (
          <div
            className="h-full overflow-y-auto font-mono text-sm p-4 cursor-text"
            onClick={() => inputRef.current?.focus()}
            style={{ height: 'calc(100% - 48px)' }}
          >
            <div className="space-y-4">
              {history.map((item, i) => (
                <div key={i}>
                  {item.command && (
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-blue-400">visitor@portfolio</span>
                      <span className="text-white">:</span>
                      <span className="text-purple-400">~</span>
                      <span className="text-white">$</span>
                      <span className="text-gray-300">{item.command}</span>
                    </div>
                  )}
                  <div className="mt-1">{item.output}</div>
                </div>
              ))}

              <div className="flex gap-2 flex-wrap">
                <span className="text-blue-400">visitor@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-white">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleCommand(input)
                    }
                  }}
                  className="flex-1 bg-transparent outline-none text-gray-300 min-w-[200px]"
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>

              <div ref={bottomRef} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
