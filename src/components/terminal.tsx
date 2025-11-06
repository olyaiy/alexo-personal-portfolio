'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import type { KeyboardEvent, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent, ReactNode } from 'react'
import { PERSONAL_INFO } from '@/lib/data/personal-info'
import { SOCIAL_LINKS, EMAIL } from '@/lib/data/social-links'
import { experiences } from '@/lib/data/experiences'
import { submitContactMessage, type ContactMessageInput } from '@/lib/contact'

type HistoryEntry =
  | { type: 'command'; command: string; output?: ReactNode }
  | { type: 'system'; message: ReactNode }

interface ContactFormState {
  step: 'prompt' | 'name' | 'email' | 'message' | 'complete'
  name: string
  email: string
  message: string
}

const ASCII_ART = `    ___    __             ____  __            _
   /   |  / /__  _  __   / __ \\/ /_  ______ _(_)_  __
  / /| | / / _ \\| |/_/  / / / / / / / / __ \`/ / / / /
 / ___ |/ /  __/>  <   / /_/ / / /_/ / /_/ / / /_/ /
/_/  |_/_/\\___/_/|_|   \\____/_/\\__, /\\__,_/_/\\__, /
                              /____/        /____/`

const WELCOME_TEXT = "Welcome to my website!"
const SUBTITLE_TEXT = PERSONAL_INFO.titles.join(' • ')
const HELP_TEXT = "Type 'help' to see available commands"

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
  return (
    <pre className="text-gray-300">{`
Contact Information:

  Email: ${EMAIL}
  Location: ${PERSONAL_INFO.location}
  Company: ${PERSONAL_INFO.company}
  Website: ${PERSONAL_INFO.companyUrl}

Type 'social' to see all social media links
`}</pre>
  )
}

function getSocial() {
  return `
Social Media:

${Object.entries(SOCIAL_LINKS).map(([key, { label, href }]) =>
  `  ${label.padEnd(10)} → ${href}`
).join('\n')}
`
}

const AVAILABLE_COMMANDS = ['about', 'skills', 'experience', 'projects', 'education', 'contact', 'social', 'clear', 'help']

export function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [input, setInput] = useState('')
  const [suggestion, setSuggestion] = useState('')
  const [isMinimized, setIsMinimized] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ width: 900, height: 600 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isResizing, setIsResizing] = useState(false)
  const [resizeDirection, setResizeDirection] = useState<string>('')
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0, posX: 0, posY: 0 })
  const [showWindow, setShowWindow] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [typedWelcome, setTypedWelcome] = useState('')
  const [typedSubtitle, setTypedSubtitle] = useState('')
  const [typedHelp, setTypedHelp] = useState('')
  const [showPrompt, setShowPrompt] = useState(false)
  const [contactState, setContactState] = useState<ContactFormState | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  const windowRef = useRef<HTMLDivElement>(null)
  const assignInputRef = useCallback((element: HTMLInputElement | HTMLTextAreaElement | null) => {
    inputRef.current = element
  }, [])

  function pushCommand(command: string, output?: ReactNode) {
    setHistory(prev => [...prev, { type: 'command', command, output }])
  }

  function pushSystem(message: ReactNode) {
    setHistory(prev => [...prev, { type: 'system', message }])
  }

  function resetInput() {
    setInput('')
    setSuggestion('')
  }

  // Detect mobile and center window on mount
  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)

      if (mobile) {
        // Mobile: fullscreen
        setSize({ width: window.innerWidth, height: window.innerHeight })
        setPosition({ x: 0, y: 0 })
      } else {
        // Desktop: centered window
        const windowWidth = Math.min(900, window.innerWidth - 100)
        const windowHeight = Math.min(600, window.innerHeight - 100)
        setSize({ width: windowWidth, height: windowHeight })
        setPosition({
          x: (window.innerWidth - windowWidth) / 2,
          y: (window.innerHeight - windowHeight) / 2
        })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Staggered animation sequence (faster on mobile)
  useEffect(() => {
    const delay = isMobile ? 50 : 100
    const contentDelay = isMobile ? 200 : 400

    const windowTimer = setTimeout(() => setShowWindow(true), delay)
    const contentTimer = setTimeout(() => setShowContent(true), contentDelay)

    return () => {
      clearTimeout(windowTimer)
      clearTimeout(contentTimer)
    }
  }, [isMobile])

  // Typewriter effect for subtitle, welcome, and help text (faster on mobile)
  useEffect(() => {
    if (!showContent) return

    const speed = isMobile ? 5 : 10
    const pause = isMobile ? 50 : 100

    let subtitleIndex = 0
    const subtitleTimer = setInterval(() => {
      if (subtitleIndex <= SUBTITLE_TEXT.length) {
        setTypedSubtitle(SUBTITLE_TEXT.slice(0, subtitleIndex))
        subtitleIndex++
      } else {
        clearInterval(subtitleTimer)
        setTimeout(() => {
          let welcomeIndex = 0
          const welcomeTimer = setInterval(() => {
            if (welcomeIndex <= WELCOME_TEXT.length) {
              setTypedWelcome(WELCOME_TEXT.slice(0, welcomeIndex))
              welcomeIndex++
            } else {
              clearInterval(welcomeTimer)
              setTimeout(() => {
                let helpIndex = 0
                const helpTimer = setInterval(() => {
                  if (helpIndex <= HELP_TEXT.length) {
                    setTypedHelp(HELP_TEXT.slice(0, helpIndex))
                    helpIndex++
                  } else {
                    clearInterval(helpTimer)
                    setTimeout(() => setShowPrompt(true), pause)
                  }
                }, speed)
              }, pause)
            }
          }, speed)
        }, pause)
      }
    }, speed)

    return () => clearInterval(subtitleTimer)
  }, [showContent, isMobile])

  // Cursor blink effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(blinkInterval)
  }, [])

  useEffect(() => {
    if (!isMinimized) {
      const behavior = isMobile ? 'auto' : 'smooth'
      bottomRef.current?.scrollIntoView({ behavior })
    }
  }, [history, isMinimized, isMobile])

  useEffect(() => {
    if (!isMinimized && showPrompt) {
      inputRef.current?.focus()
    }
  }, [isMinimized, showPrompt, contactState])

  // Handle virtual keyboard on mobile
  useEffect(() => {
    if (!isMobile || typeof window === 'undefined' || !window.visualViewport) return

    function handleViewportResize() {
      if (window.visualViewport) {
        const viewport = window.visualViewport
        const keyboardOpen = viewport.height < window.innerHeight
        if (keyboardOpen) {
          setKeyboardHeight(window.innerHeight - viewport.height)
        } else {
          setKeyboardHeight(0)
        }
      }
    }

    window.visualViewport.addEventListener('resize', handleViewportResize)
    return () => window.visualViewport?.removeEventListener('resize', handleViewportResize)
  }, [isMobile])

  // Handle dragging (disabled on mobile)
  useEffect(() => {
    if (isMobile) return

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
  }, [isDragging, dragOffset, isMobile])

  // Handle resizing (disabled on mobile)
  useEffect(() => {
    if (isMobile) return

    function handleMouseMove(e: MouseEvent) {
      if (isResizing) {
        const deltaX = e.clientX - resizeStart.x
        const deltaY = e.clientY - resizeStart.y

        let newWidth = resizeStart.width
        let newHeight = resizeStart.height
        let newX = resizeStart.posX
        let newY = resizeStart.posY

        // Handle horizontal resizing
        if (resizeDirection.includes('e')) {
          newWidth = Math.max(400, Math.min(window.innerWidth - resizeStart.posX - 50, resizeStart.width + deltaX))
        } else if (resizeDirection.includes('w')) {
          const proposedWidth = resizeStart.width - deltaX
          if (proposedWidth >= 400) {
            newWidth = proposedWidth
            newX = resizeStart.posX + deltaX
          }
        }

        // Handle vertical resizing
        if (resizeDirection.includes('s')) {
          newHeight = Math.max(300, Math.min(window.innerHeight - resizeStart.posY - 50, resizeStart.height + deltaY))
        } else if (resizeDirection.includes('n')) {
          const proposedHeight = resizeStart.height - deltaY
          if (proposedHeight >= 300) {
            newHeight = proposedHeight
            newY = resizeStart.posY + deltaY
          }
        }

        setSize({ width: newWidth, height: newHeight })
        setPosition({ x: newX, y: newY })
      }
    }

    function handleMouseUp() {
      setIsResizing(false)
      setResizeDirection('')
    }

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing, resizeStart, resizeDirection, isMobile])

  function handleMouseDown(e: ReactMouseEvent<HTMLDivElement>) {
    if (isMobile) return
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
      setIsDragging(true)
    }
  }

  function handleResizeStart(e: ReactMouseEvent, direction: string) {
    if (isMobile) return
    e.preventDefault()
    e.stopPropagation()
    setResizeDirection(direction)
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
      posX: position.x,
      posY: position.y
    })
    setIsResizing(true)
  }

  function handleInputChange(value: string) {
    setInput(value)

    if (contactState) {
      setSuggestion('')
      return
    }

    // Find matching command for autocomplete
    if (value.length > 0) {
      const match = AVAILABLE_COMMANDS.find(cmd =>
        cmd.startsWith(value.toLowerCase()) && cmd !== value.toLowerCase()
      )
      setSuggestion(match || '')
    } else {
      setSuggestion('')
    }
  }

  function acceptSuggestion() {
    if (suggestion) {
      setInput(suggestion)
      setSuggestion('')
    }
  }

  function handleContactFormSubmit(data: ContactMessageInput) {
    return submitContactMessage(data)
  }

  function handlePromptKeyDown(e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
      if (contactState?.step === 'message' && e.shiftKey) {
        e.preventDefault()
        const target = e.currentTarget
        const valueLength = target.value.length
        const start = target.selectionStart ?? valueLength
        const end = target.selectionEnd ?? valueLength
        setInput(prev => {
          const nextValue = `${prev.slice(0, start)}\n${prev.slice(end)}`

          requestAnimationFrame(() => {
            const ref = inputRef.current
            if (ref) {
              const newPos = start + 1
              ref.selectionStart = newPos
              ref.selectionEnd = newPos
            }
          })

          return nextValue
        })
        return
      }

      if (!e.shiftKey) {
        e.preventDefault()
        void handleCommand(input)
      }
      return
    }

    if ((e.key === 'Tab' || e.key === 'ArrowRight') && suggestion && !contactState) {
      e.preventDefault()
      acceptSuggestion()
    }
  }

  async function handleContactConversation(rawCommand: string, normalizedCommand: string) {
    if (!contactState) {
      return
    }

    const trimmed = rawCommand.trim()
    const step = contactState.step

    if (normalizedCommand === 'cancel' || normalizedCommand === 'exit' || normalizedCommand === 'quit') {
      pushSystem(
        <div className="text-gray-400">
          Conversation cancelled. Type <span className="text-green-400">'contact'</span> again whenever you're ready.
        </div>
      )
      setContactState(null)
      return
    }

    if (step === 'prompt') {
      if (normalizedCommand === 'yes' || normalizedCommand === 'y') {
        setContactState(prev => (prev ? { ...prev, step: 'name' } : prev))
        pushSystem(
          <div className="text-gray-300">Great! What's your name?</div>
        )
      } else if (normalizedCommand === 'no' || normalizedCommand === 'n') {
        pushSystem(
          <div className="text-gray-400">
            No problem! You can always email Alex at{' '}
            <span className="text-green-400">{EMAIL}</span>.
          </div>
        )
        setContactState(null)
      } else {
        pushSystem(
          <div className="text-yellow-400">Please answer with 'yes' or 'no'.</div>
        )
      }
      return
    }

    if (step === 'name') {
      if (!trimmed) {
        pushSystem(
          <div className="text-yellow-400">Please enter your name to continue.</div>
        )
        return
      }

      setContactState(prev => (prev ? { ...prev, name: trimmed, step: 'email' } : prev))
      pushSystem(
        <div className="text-gray-300">
          Nice to meet you, <span className="text-green-400">{trimmed}</span>! What's your email address?
        </div>
      )
      return
    }

    if (step === 'email') {
      if (!trimmed) {
        pushSystem(
          <div className="text-yellow-400">Mind sharing your email so Alex can reply?</div>
        )
        return
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(trimmed)) {
        pushSystem(
          <div className="text-yellow-400">That email looks off. Please enter a valid email address.</div>
        )
        return
      }

      setContactState(prev => (prev ? { ...prev, email: trimmed, step: 'message' } : prev))
      pushSystem(
        <div className="text-gray-300">Awesome! What message would you like to send Alex?</div>
      )
      return
    }

    if (step === 'message') {
      if (!trimmed) {
        pushSystem(
          <div className="text-yellow-400">Please enter the message you'd like Alex to receive.</div>
        )
        return
      }

      const payload: ContactMessageInput = {
        name: contactState.name,
        email: contactState.email,
        message: trimmed
      }

      setContactState(null)
      pushSystem(
        <div className="text-gray-300">Sending your message to Alex...</div>
      )

      try {
        const result = await handleContactFormSubmit(payload)
        pushSystem(
          <div className="space-y-2 text-green-400">
            <div>✓ Message sent successfully!</div>
            <div className="text-gray-400 text-sm">
              {result.message || 'Alex will respond to you shortly.'}
            </div>
          </div>
        )
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Error sending message. Please try again.'
        pushSystem(
          <div className="text-red-400">
            {errorMessage}
          </div>
        )
      }

      return
    }
  }

  async function handleCommand(cmd: string) {
    const trimmed = cmd.trim()
    const normalized = trimmed.toLowerCase()

    if (!trimmed) {
      resetInput()
      return
    }

    if (normalized === 'clear') {
      setHistory([])
      resetInput()
      setContactState(null)
      return
    }

    if (contactState) {
      pushCommand(cmd)
      await handleContactConversation(cmd, normalized)
      resetInput()
      return
    }

    let output: ReactNode

    switch (normalized) {
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
        output = getContact()
        pushCommand(cmd, output)
        setContactState({ step: 'prompt', name: '', email: '', message: '' })
        pushSystem(
          <div className="text-gray-300">
            Would you like to send a message to Alex?{' '}
            <span className="text-gray-500">(yes/no)</span>
          </div>
        )
        resetInput()
        return
      case 'social':
        output = <pre className="text-gray-300">{getSocial()}</pre>
        break
      default:
        output = (
          <div className="text-red-400">
            Command not found: {normalized}
            <br />
            Type 'help' to see available commands
          </div>
        )
    }

    pushCommand(cmd, output)
    resetInput()
  }

  return (
    <div className={isMobile ? "min-h-screen overflow-hidden" : "min-h-screen p-8 overflow-hidden"}>
      <div
        ref={windowRef}
        className={`fixed overflow-hidden shadow-2xl backdrop-blur-xl bg-black/80 border border-white/10 transition-all duration-500 ease-out ${
          isMobile ? 'rounded-none' : 'rounded-xl'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isMinimized ? '300px' : `${size.width}px`,
          height: isMinimized ? 'auto' : `${size.height}px`,
          opacity: showWindow ? 1 : 0,
          transform: showWindow ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.98)',
          transitionProperty: isDragging || isResizing ? 'none' : 'opacity, transform, width, height',
        }}
      >
        {/* Window Title Bar */}
        <div
          className={`flex items-center justify-between px-4 bg-gradient-to-r from-gray-800/90 to-gray-900/90 border-b border-white/10 select-none ${
            isMobile ? 'py-2' : 'py-3 cursor-move'
          }`}
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-2">
            {!isMobile && (
              <div className="flex gap-2">
                <button
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
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
                  }}
                />
              </div>
            )}
            <span className={`text-gray-300 font-mono ${isMobile ? 'text-xs' : 'text-sm ml-2'}`}>portfolio.terminal</span>
          </div>
          <div className={`text-gray-500 font-mono ${isMobile ? 'text-[10px]' : 'text-xs'}`}>bash</div>
        </div>

        {/* Terminal Content */}
        {!isMinimized && (
          <div
            className={`h-full overflow-y-auto font-mono cursor-text ${
              isMobile ? 'text-base px-4 py-4 pb-safe' : 'text-sm p-4'
            }`}
            onClick={() => inputRef.current?.focus()}
            style={{
              height: isMobile ? `calc(100% - 40px - ${keyboardHeight}px)` : 'calc(100% - 48px)',
            }}
          >
            <div
              className="space-y-4 transition-all duration-700 ease-out"
              style={{
                opacity: showContent ? 1 : 0,
                transform: showContent ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              {/* Welcome Message with Typewriter */}
              {showContent && (
                <div className="relative space-y-2">
                  {/* Social Links - Mobile: above ASCII art, Desktop: top right */}
                  {isMobile ? (
                    <div className="flex gap-3 text-xs mb-3 justify-center">
                      <a
                        href="/alex-resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-400 active:text-green-300 transition-colors duration-150 flex items-center gap-1"
                        title="Resume"
                      >
                        resume
                        <span className="text-xs">↗</span>
                      </a>
                      <a
                        href={SOCIAL_LINKS.github.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-400 active:text-green-300 transition-colors duration-150 flex items-center gap-1"
                        title="GitHub"
                      >
                        github
                        <span className="text-xs">↗</span>
                      </a>
                      <a
                        href={SOCIAL_LINKS.linkedin.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-400 active:text-green-300 transition-colors duration-150 flex items-center gap-1"
                        title="LinkedIn"
                      >
                        linkedin
                        <span className="text-xs">↗</span>
                      </a>
                    </div>
                  ) : (
                    <div className="absolute top-0 right-0 flex gap-3 text-sm">
                      <a
                        href="/alex-resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-400 transition-colors duration-150 flex items-center gap-1"
                        title="Resume"
                      >
                        resume
                        <span className="text-xs">↗</span>
                      </a>
                      <a
                        href={SOCIAL_LINKS.github.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-400 transition-colors duration-150 flex items-center gap-1"
                        title="GitHub"
                      >
                        github
                        <span className="text-xs">↗</span>
                      </a>
                      <a
                        href={SOCIAL_LINKS.linkedin.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-400 transition-colors duration-150 flex items-center gap-1"
                        title="LinkedIn"
                      >
                        linkedin
                        <span className="text-xs">↗</span>
                      </a>
                    </div>
                  )}

                  <pre className={`text-green-400 ${isMobile ? 'text-[10px] leading-tight' : ''}`}>{ASCII_ART}</pre>
                  <div className={`text-gray-300 mt-4 ${isMobile ? 'text-sm' : ''}`}>
                    {typedSubtitle}
                  </div>
                  {typedSubtitle.length === SUBTITLE_TEXT.length && (
                    <div className={`text-green-400 mt-2 ${isMobile ? 'text-sm' : ''}`}>
                      {typedWelcome}
                    </div>
                  )}
                  {typedWelcome.length === WELCOME_TEXT.length && (
                    <div className={`text-gray-400 mt-2 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      {typedHelp}
                    </div>
                  )}
                </div>
              )}

              {/* Quick Command Buttons */}
              {showPrompt && !contactState && (
                <div className={`flex flex-wrap my-4 pb-3 border-b border-gray-700/20 ${isMobile ? 'gap-2 text-xs' : 'gap-3 text-sm'}`}>
                  <span className="text-gray-500">$</span>
                  {['about', 'projects', 'experience', 'contact', 'help'].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => {
                        void handleCommand(cmd)
                      }}
                      className={`text-gray-400 hover:text-green-400 active:text-green-300 transition-colors duration-150 underline decoration-dotted decoration-gray-600 hover:decoration-green-400 active:decoration-green-300 underline-offset-4 ${
                        isMobile ? 'py-2 px-3 min-h-[44px] flex items-center' : ''
                      }`}
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              )}

              {/* Command History */}
              {history.map((entry, i) => {
                if (entry.type === 'system') {
                  return (
                    <div key={i} className="text-gray-300">
                      {entry.message}
                    </div>
                  )
                }

                return (
                  <div key={i}>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-blue-400">visitor@portfolio</span>
                      <span className="text-white">:</span>
                      <span className="text-purple-400">~</span>
                      <span className="text-white">$</span>
                      <span className="text-gray-300 whitespace-pre-wrap break-words">{entry.command}</span>
                    </div>
                    {entry.output && <div className="mt-1">{entry.output}</div>}
                  </div>
                )
              })}

              {/* Input Prompt */}
              {showPrompt && (
                <div className="flex gap-2">
                  <span className="text-blue-400">visitor@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-purple-400">~</span>
                  <span className="text-white">$</span>
                  <div className="flex-1 relative">
                    {contactState?.step === 'message' ? (
                      <textarea
                        ref={assignInputRef}
                        value={input}
                        onChange={(e) => handleInputChange(e.target.value)}
                        onKeyDown={handlePromptKeyDown}
                        className="w-full bg-transparent outline-none text-gray-300 font-mono caret-green-400 relative z-10 resize-none"
                        style={{ fontSize: isMobile ? '16px' : undefined }}
                        spellCheck={false}
                        autoComplete="off"
                        rows={Math.min(6, Math.max(1, input.split('\n').length))}
                      />
                    ) : (
                      <>
                        <input
                          ref={assignInputRef}
                          type="text"
                          value={input}
                          onChange={(e) => handleInputChange(e.target.value)}
                          onKeyDown={handlePromptKeyDown}
                          className="w-full bg-transparent outline-none text-gray-300 font-mono caret-green-400 relative z-10"
                          style={{ fontSize: isMobile ? '16px' : undefined }}
                          spellCheck={false}
                          autoComplete="off"
                        />
                        {suggestion && !isMobile && (
                          <div className="absolute left-0 top-0 pointer-events-none font-mono text-gray-300">
                            <span className="opacity-0">{input}</span>
                            <span className="text-gray-500/40">{suggestion.slice(input.length)}</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>
          </div>
        )}

        {/* Resize Handles - Edges (Desktop only) */}
        {!isMinimized && !isMobile && (
          <>
            {/* Top edge */}
            <div
              className="absolute top-0 left-0 right-0 h-1 cursor-n-resize hover:bg-white/10"
              onMouseDown={(e) => handleResizeStart(e, 'n')}
            />
            {/* Bottom edge */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1 cursor-s-resize hover:bg-white/10"
              onMouseDown={(e) => handleResizeStart(e, 's')}
            />
            {/* Left edge */}
            <div
              className="absolute top-0 bottom-0 left-0 w-1 cursor-w-resize hover:bg-white/10"
              onMouseDown={(e) => handleResizeStart(e, 'w')}
            />
            {/* Right edge */}
            <div
              className="absolute top-0 bottom-0 right-0 w-1 cursor-e-resize hover:bg-white/10"
              onMouseDown={(e) => handleResizeStart(e, 'e')}
            />

            {/* Corners */}
            {/* Top-left */}
            <div
              className="absolute top-0 left-0 w-3 h-3 cursor-nw-resize hover:bg-white/20"
              onMouseDown={(e) => handleResizeStart(e, 'nw')}
            />
            {/* Top-right */}
            <div
              className="absolute top-0 right-0 w-3 h-3 cursor-ne-resize hover:bg-white/20"
              onMouseDown={(e) => handleResizeStart(e, 'ne')}
            />
            {/* Bottom-left */}
            <div
              className="absolute bottom-0 left-0 w-3 h-3 cursor-sw-resize hover:bg-white/20"
              onMouseDown={(e) => handleResizeStart(e, 'sw')}
            />
            {/* Bottom-right */}
            <div
              className="absolute bottom-0 right-0 w-3 h-3 cursor-se-resize hover:bg-white/20"
              onMouseDown={(e) => handleResizeStart(e, 'se')}
            />
          </>
        )}
      </div>
    </div>
  )
}
