'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Download,
  ExternalLink,
  Menu,
  Send,
  X,
  Check,
  Copy,
  Sparkles,
  Layers,
  Palette,
  Eye,
  CheckCircle2,
  Calendar,
  Building2,
  Briefcase,
  ChevronRight,
  MessageCircle,
} from 'lucide-react'


import {
  contactDetails,
  education,
  heroBadges,
  languages,
  navigationItems,
  projects,
  services,
  skillCategories,
  allSkillsList,
  socialLinks,
  stats,
  timeline,
  typewriterRoles,
  clientRoster,
  type ProjectCaseStudy,
} from '@/components/portfolio/data'

function TypewriterRole({ roles }: { roles: string[] }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const targetRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 35 : 70
    const pauseDelay = 2000

    let timer: NodeJS.Timeout

    if (!isDeleting && currentText === targetRole) {
      timer = setTimeout(() => setIsDeleting(true), pauseDelay)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? targetRole.substring(0, currentText.length - 1)
          : targetRole.substring(0, currentText.length + 1)
        setCurrentText(nextText)
      }, typingSpeed)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentRoleIndex, roles])

  return (
    <span className="text-[var(--accent-orange)] inline-flex items-center">
      <span>{currentText}</span>
      <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-[var(--accent-orange)] align-middle" />
    </span>
  )
}

export function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('all')
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectCaseStudy | null>(null)
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const [isDownloadingCv, setIsDownloadingCv] = useState(false)
  const [cvDownloaded, setCvDownloaded] = useState(false)

  // Contact form state
  const [selectedServices, setSelectedServices] = useState<string[]>(['Brand Identity'])
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    timeline: '',
    message: '',
  })

// Native GPU compositor scrolling without virtual scroll lag

  // Section Observer for active dock link - optimized to fire only on section transitions
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length === 0) return

        const mostVisible = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0]

        if (mostVisible?.target?.id) {
          setActiveSection((prev) => (prev !== mostVisible.target.id ? mostVisible.target.id : prev))
        }
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.25,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Escape key listener for case study modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCaseStudy(null)
      }
    }
    if (activeCaseStudy) {
      window.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [activeCaseStudy])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(null), 2500)
  }

  const handleCvDownload = () => {
    setIsDownloadingCv(true)
    setTimeout(() => {
      setIsDownloadingCv(false)
      setCvDownloaded(true)
      setTimeout(() => setCvDownloaded(false), 3500)
    }, 1200)
  }

  const toggleService = (serviceTitle: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceTitle)
        ? prev.filter((s) => s !== serviceTitle)
        : [...prev, serviceTitle]
    )
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormLoading(true)
    setTimeout(() => {
      setFormLoading(false)
      setFormSubmitted(true)
      setFormData({ name: '', email: '', timeline: '', message: '' })
      setTimeout(() => setFormSubmitted(false), 5000)
    }, 1200)
  }

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const activeSkillsToDisplay =
    activeSkillCategory === 'all'
      ? allSkillsList
      : skillCategories.find((c) => c.id === activeSkillCategory)?.skills || []

  return (
    <main className="portfolio-page">
      {/* GPU Fixed Ambient Lighting & Grid */}
      <div className="fixed-ambient-bg" />
      <div className="ambient-grid" />

      {/* Mobile Top Header */}
      <header className="mobile-header">
        <a
          href="#home"
          className="brand-pill"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('home')
          }}
        >
          <span className="brand-dot">J</span>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold leading-tight text-white">Jasmeet</span>
            <span className="text-[10px] text-slate-400">10+ Yrs Art Director</span>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 px-3 text-[11px] font-semibold text-[#34d399]"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Chat</span>
          </a>
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Slide-out */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mobile-menu"
        >
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                type="button"
                className={`mobile-menu-link ${
                  activeSection === item.id ? 'mobile-menu-link-active' : ''
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <Icon className="h-4 w-4 text-[var(--accent-orange)]" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </motion.div>
      )}

      {/* Main Container */}
      <div className="portfolio-shell">
        {/* Floating Vertical Desktop Rail */}
        <aside className="site-rail-wrap">
          <nav className="panel-rail" aria-label="Desktop section navigation">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rail-link ${isActive ? 'rail-link-active' : ''}`}
                  aria-label={item.label}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="rail-tooltip">{item.label}</span>
                </a>
              )
            })}
          </nav>
        </aside>

        {/* Content Column */}
        <div className="content-grid">
          {/* 1. HERO SECTION */}
          <section id="home" className="scroll-section">
            <div className="panel-shell p-6 sm:p-10 lg:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                {/* Left: Bio & Dynamic Titles */}
                <div>
                  {/* Status Pill */}
                  <div className="mb-6 flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      Available for Commissions
                    </span>

                    {heroBadges.map((badge) => (
                      <span
                        key={badge.label}
                        className={`accent-chip accent-chip-${badge.tone}`}
                      >
                        {badge.label}
                      </span>
                    ))}
                  </div>

                  {/* Main Title */}
                  <h1 className="text-4xl font-black text-white sm:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
                    Hi, I&apos;m{' '}
                    <span className="bg-gradient-to-r from-white via-[#ffd2b8] to-[var(--accent-orange)] bg-clip-text text-transparent">
                      Jasmeet
                    </span>
                  </h1>

                  {/* Typewriter Dynamic Subtitle */}
                  <div className="mt-4 flex min-h-[44px] items-center text-xl sm:text-3xl font-bold text-slate-200">
                    <span className="text-slate-400 mr-2">I craft as</span>
                    <TypewriterRole roles={typewriterRoles} />
                  </div>

                  {/* Narrative Bio */}
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                    Architecting high-impact visual identities, clinical healthcare branding systems,
                    and editorial print campaigns with{' '}
                    <strong className="text-white font-semibold">10+ years of obsessive art direction</strong>.
                    Transforming complex brand visions into timeless, trust-inspiring designs.
                  </p>

                  {/* CTAs */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      className="cta-primary"
                      onClick={() => scrollToSection('projects')}
                    >
                      <span>Explore Selected Works</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      className="cta-secondary"
                      onClick={handleCvDownload}
                      disabled={isDownloadingCv}
                    >
                      {cvDownloaded ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-400" />
                          <span className="text-emerald-300">Credentials Ready</span>
                        </>
                      ) : isDownloadingCv ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Preparing File...</span>
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4 text-[var(--accent-cyan)]" />
                          <span>Download CV / Deck</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Quick Contacts */}
                  <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/8 pt-6 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-[var(--accent-orange)]" />
                      <span>Punjab, India • Worldwide Reach</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-[var(--accent-cyan)]" />
                      <span>Studio Founder & Art Director</span>
                    </div>
                  </div>
                </div>

                {/* Right: Studio Avatar & Glowing Orbital Rings */}
                <div className="relative flex justify-center lg:justify-end">
                  <div className="relative w-72 sm:w-84 aspect-square">
                    {/* Orbit Ring */}
                    <div className="orbit-ring" />

                    {/* Ambient Glows */}
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[var(--accent-cyan)]/25 via-[var(--accent-orange)]/25 to-[var(--accent-violet)]/25 blur-2xl" />

                    {/* Avatar Container */}
                    <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white/20 p-2 shadow-2xl backdrop-blur-sm">
                      <Image
                        src="/jasmeet-portrait.jpg"
                        alt="Jasmeet Senior Graphic Designer"
                        fill
                        className="rounded-full object-cover object-top transition-transform duration-700 hover:scale-105"
                        priority
                      />
                    </div>

                    {/* Floating Software Badges */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -left-3 top-6 flex items-center gap-1.5 rounded-2xl border border-white/12 bg-[#0c1322]/90 px-3 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur-md"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-[#001e36] text-[10px] text-[#00c8ff]">
                        Ps
                      </span>
                      <span>Photoshop Master</span>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      className="absolute -right-3 top-20 flex items-center gap-1.5 rounded-2xl border border-white/12 bg-[#0c1322]/90 px-3 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur-md"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-[#330000] text-[10px] text-[#ff7700]">
                        Ai
                      </span>
                      <span>Illustrator Expert</span>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-2xl border border-white/12 bg-[#0c1322]/90 px-3 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur-md"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-[#0f2e1a] text-[10px] text-[#22c55e]">
                        Cdr
                      </span>
                      <span>CorelDRAW Prepress</span>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 7, 0] }}
                      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                      className="absolute -bottom-2 right-4 flex items-center gap-1.5 rounded-2xl border border-white/12 bg-[#0c1322]/90 px-3 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur-md"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-[#270038] text-[10px] text-[#b366ff]">
                        Pr/Ae
                      </span>
                      <span>Motion & Reels</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Client Ticker / Marquee */}
              <div className="mt-12 border-t border-white/8 pt-8">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Trusted by Leading Healthcare Networks & Commercial Brands
                </p>
                <div className="marquee-container mt-6 py-2">
                  <div className="marquee-track">
                    {clientRoster.concat(clientRoster).map((client, idx) => (
                      <div
                        key={`${client.name}-${idx}`}
                        className="flex items-center gap-3 rounded-full border border-white/8 bg-white/3 px-5 py-2 text-xs font-medium text-slate-300 backdrop-blur-sm"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-orange)]" />
                        <span className="font-semibold text-white">{client.name}</span>
                        <span className="text-[10px] text-slate-500">• {client.industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. CREATIVE DNA & 10-YEAR TRACK RECORD (ABOUT) */}
          <section id="about" className="scroll-section">
            <div className="panel-shell p-6 sm:p-10 lg:p-12">
              <div className="max-w-2xl">
                <span className="section-kicker">Creative DNA</span>
                <h2 className="section-title">One Obsessive Visual Mind. 10+ Years of Craft.</h2>
                <p className="section-description">
                  Bridging the discipline of traditional Swiss typography, high-precision CMYK
                  prepress manufacturing, and modern generative digital art direction.
                </p>
              </div>

              {/* 4 Quantifiable Metric Cards */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-6 transition-all duration-300 hover:border-white/16 hover:bg-white/5"
                  >
                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-gradient-to-r from-white via-white to-[var(--accent-orange)] bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-100">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      {stat.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* 3 Core Visual Philosophy Cards */}
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-white/8 bg-[#0d1424]/70 p-6 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-orange)]/15 text-[var(--accent-orange)] mb-4">
                    <Palette className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Art Direction That Commands Trust</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    In high-stakes industries like healthcare, design isn’t decorative—it is reassuring.
                    Every color choice, contrast ratio, and layout hierarchy is engineered to build instant credibility.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-[#0d1424]/70 p-6 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] mb-4">
                    <Layers className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Prepress & Color Physics Precision</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    A decade of direct prepress pressroom experience ensures flawless CMYK ink density,
                    Pantone spot matching, die-cutting precision, and large-scale outdoor resolution. Zero prepress rejections.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-[#0d1424]/70 p-6 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-violet)]/15 text-[var(--accent-violet)] mb-4">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Kinetic Motion & Generative AI</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    Infusing static campaigns with dynamic pacing, short-form video rhythm, and cutting-edge
                    Midjourney prompt synthesis to accelerate visual conceptualization without losing human art direction.
                  </p>
                </div>
              </div>

              {/* Quote Banner */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/4 via-white/2 to-transparent p-6 sm:p-8">
                <p className="text-lg sm:text-xl font-medium italic text-slate-200">
                  &ldquo;A great brand doesn&apos;t shout for attention. It establishes a visual order so clear,
                  reassuring, and intentional that trust is given before a single line is read.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-0.5 w-6 bg-[var(--accent-orange)]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-orange)]">
                    Jasmeet • Lead Art Director
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. ARSENAL & MASTERED TOOLS (SKILLS) */}
          <section id="skills" className="scroll-section">
            <div className="panel-shell p-6 sm:p-10 lg:p-12">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div className="max-w-2xl">
                  <span className="section-kicker">Creative Arsenal</span>
                  <h2 className="section-title">Software Mastery & Production Tools</h2>
                  <p className="section-description">
                    Over a decade of daily hands-on execution across vector engines, photo manipulation suites,
                    editorial layout software, and generative AI pipelines.
                  </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2">
                  {skillCategories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveSkillCategory(cat.id)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                        activeSkillCategory === cat.id
                          ? 'bg-[var(--accent-orange)] text-white shadow-lg shadow-[var(--accent-orange)]/30'
                          : 'border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dual Layout: 3D Stage on Left + Skill Meters on Right */}
              <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                {/* 3D Visual Stage with skills-creative-tools.png */}
                <div className="relative min-h-[360px] sm:min-h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0e1628] to-[#070b14] flex items-center justify-center p-6 shadow-2xl">
                  <div className="absolute inset-0 bg-radial from-[var(--accent-cyan)]/15 via-transparent to-transparent opacity-60" />
                  <div className="relative h-72 sm:h-84 w-full">
                    <Image
                      src="/skills-creative-tools.png"
                      alt="Creative tools floating in robotic holographic palm"
                      fill
                      className="object-contain drop-shadow-[0_20px_40px_rgba(0,240,255,0.25)]"
                    />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[#090d18]/85 p-3 text-center backdrop-blur-md">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent-cyan)]">
                      Production-Tested Daily
                    </p>
                    <p className="text-xs text-slate-300">
                      Photoshop • Illustrator • CorelDRAW • Premiere • After Effects • InDesign • Midjourney
                    </p>
                  </div>
                </div>

                {/* Animated Skill Cards */}
                <div className="grid gap-3.5">
                  {activeSkillsToDisplay.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-2xl border border-white/8 bg-white/3 p-4 transition-all duration-200 hover:border-white/18 hover:bg-white/6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-white text-sm">
                            {skill.name}
                          </span>
                          <span className="rounded-full bg-white/6 border border-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                            {skill.experience}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-bold text-[var(--accent-orange)]">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Skill Meter Track */}
                      <div className="skill-meter-track mt-2.5">
                        <div
                          className={`skill-meter-fill ${
                            skill.accent === 'orange'
                              ? 'bg-gradient-to-r from-[var(--accent-orange)] to-[#ffaa6b]'
                              : skill.accent === 'cyan'
                              ? 'bg-gradient-to-r from-[var(--accent-cyan)] to-[#68f3fc]'
                              : 'bg-gradient-to-r from-[var(--accent-violet)] to-[#c4b5fd]'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className="mt-2 text-xs text-slate-400">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 4. SELECTED WORKS (PORTFOLIO) */}
          <section id="projects" className="scroll-section">
            <div className="panel-shell p-6 sm:p-10 lg:p-12">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div className="max-w-2xl">
                  <span className="section-kicker">Portfolio</span>
                  <h2 className="section-title">Selected Works & Case Studies</h2>
                  <p className="section-description">
                    Explore real-world hospital rebrands, museum-grade poster installations,
                    and high-conversion digital campaign identities. Click any project for the full case study.
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'all', label: 'All Works' },
                    { id: 'Brand Identity', label: 'Brand Identity' },
                    { id: 'Print & Editorial', label: 'Print & Editorial' },
                    { id: 'Social & Campaigns', label: 'Social & Campaigns' },
                    { id: 'Digital & Motion', label: 'Digital & Motion' },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setSelectedCategory(filter.id)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                        selectedCategory === filter.id
                          ? 'bg-[var(--accent-orange)] text-white shadow-lg shadow-[var(--accent-orange)]/30'
                          : 'border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <article
                    key={project.id}
                    className="project-card group cursor-pointer"
                    onClick={() => setActiveCaseStudy(project)}
                  >
                    <div>
                      {/* Image Thumbnail with Zoom */}
                      <div className="project-card-image-wrap">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="project-card-image object-cover object-top"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-transparent opacity-80" />

                        {/* Top Badges */}
                        <div className="absolute left-3 top-3 flex items-center gap-2">
                          <span
                            className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                              project.accent === 'orange'
                                ? 'bg-[var(--accent-orange)]/90 text-white'
                                : project.accent === 'cyan'
                                ? 'bg-[var(--accent-cyan)]/90 text-[#07111f]'
                                : 'bg-[var(--accent-violet)]/90 text-white'
                            }`}
                          >
                            {project.category}
                          </span>
                        </div>

                        <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-mono text-white/80 backdrop-blur-md">
                          {project.year}
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          {project.client}
                        </p>
                        <h3 className="mt-1 text-lg font-bold text-white group-hover:text-[var(--accent-orange)] transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-slate-300 line-clamp-2">
                          {project.shortDescription}
                        </p>

                        {/* Tags */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-white/8 bg-white/4 px-2 py-0.5 text-[10px] font-medium text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="border-t border-white/8 p-4 flex items-center justify-between bg-white/2">
                      <span className="text-xs font-semibold text-slate-300 group-hover:text-white flex items-center gap-1.5">
                        <Eye className="h-3.5 w-3.5 text-[var(--accent-cyan)]" />
                        <span>View Full Case Study</span>
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/6 group-hover:bg-[var(--accent-orange)] group-hover:text-white transition-all text-slate-300">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 5. SERVICES & COMMISSIONS */}
          <section id="services" className="scroll-section">
            <div className="panel-shell p-6 sm:p-10 lg:p-12">
              <div className="max-w-2xl">
                <span className="section-kicker">Core Disciplines</span>
                <h2 className="section-title">Design Services & Capabilities</h2>
                <p className="section-description">
                  Full-scope creative direction tailored for established institutions, healthcare brands,
                  and ambitious product teams.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <div
                      key={service.title}
                      className="group rounded-3xl border border-white/8 bg-white/3 p-6 sm:p-8 transition-all duration-300 hover:border-white/18 hover:bg-white/6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[var(--accent-orange)]/15 text-[var(--accent-orange)] group-hover:scale-105 transition-transform">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-300">
                          {service.subtitle}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-white group-hover:text-[var(--accent-orange)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                        {service.description}
                      </p>

                      <div className="mt-6 border-t border-white/8 pt-5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                          Key Deliverables
                        </p>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {service.deliverables.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-orange)] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* 6. CAREER JOURNEY & LEADERSHIP TIMELINE */}
          <section id="experience" className="scroll-section">
            <div className="panel-shell p-6 sm:p-10 lg:p-12">
              <div className="max-w-2xl">
                <span className="section-kicker">Career Roadmap</span>
                <h2 className="section-title">10+ Years of Professional Art Direction</h2>
                <p className="section-description">
                  A progression marked by increasing creative responsibility, institutional trust,
                  and hundreds of successful commercial deliveries.
                </p>
              </div>

              {/* Timeline Cards */}
              <div className="mt-10 grid gap-6">
                {timeline.map((item) => (
                  <div
                    key={item.period}
                    className="relative rounded-2xl border border-white/8 bg-white/3 p-6 sm:p-8 transition-all hover:border-white/16 hover:bg-white/5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/8 pb-4">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent-orange)]">
                          {item.period}
                        </span>
                        <h3 className="mt-1 text-xl font-bold text-white">
                          {item.role}
                        </h3>
                        <p className="text-xs font-semibold text-slate-400">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {item.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      {item.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <ChevronRight className="h-4 w-4 text-[var(--accent-cyan)] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Academic Foundations & Honors */}
              <div className="mt-10 border-t border-white/8 pt-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Academic Foundations & Professional Diplomas
                </h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  {education.map((edu) => {
                    const EduIcon = edu.icon
                    return (
                      <div
                        key={edu.title}
                        className="rounded-2xl border border-white/8 bg-[#0c1220] p-5"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/6 text-[var(--accent-cyan)] mb-3">
                          <EduIcon className="h-5 w-5" />
                        </div>
                        <h4 className="text-sm font-bold text-white">{edu.title}</h4>
                        <p className="mt-1 text-xs text-slate-400">{edu.institution} • {edu.year}</p>
                        <p className="mt-2 text-xs text-slate-300">{edu.subtitle}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* 7. CONTACT & INQUIRE */}
          <section id="contact" className="scroll-section">
            <div className="panel-shell p-6 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
                {/* Left: Contact Info & Value Props */}
                <div>
                  <span className="section-kicker">Get In Touch</span>
                  <h2 className="section-title">Let&apos;s Build Something Unforgettable.</h2>
                  <p className="section-description">
                    Available for brand identity suites, hospital campaigns, high-end packaging prepress,
                    and studio art direction retainers.
                  </p>

                  {/* Contact Methods */}
                  <div className="mt-8 space-y-3">
                    {contactDetails.map((detail) => {
                      const Icon = detail.icon
                      return (
                        <div
                          key={detail.label}
                          className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/3 p-4 transition-all hover:border-white/16 hover:bg-white/6"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-orange)]/15 text-[var(--accent-orange)]">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                {detail.label}
                              </p>
                              {detail.href ? (
                                <a
                                  href={detail.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-xs sm:text-sm font-semibold text-white hover:text-[var(--accent-orange)] transition-colors"
                                >
                                  {detail.value}
                                </a>
                              ) : (
                                <p className="text-xs sm:text-sm font-semibold text-white">
                                  {detail.value}
                                </p>
                              )}
                            </div>
                          </div>

                          {detail.copyable && (
                            <button
                              type="button"
                              onClick={() => handleCopy(detail.value)}
                              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400 hover:text-white transition-colors"
                              title="Copy to clipboard"
                            >
                              {copiedText === detail.value ? (
                                <Check className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </button>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* Languages */}
                  <div className="mt-8 border-t border-white/8 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Languages & Fluency
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {languages.map((lang) => (
                        <div
                          key={lang.name}
                          className="rounded-xl border border-white/8 bg-white/2 p-3 text-center"
                        >
                          <p className="text-xs font-bold text-white">{lang.name}</p>
                          <p className="text-[10px] text-[var(--accent-cyan)] mt-0.5">{lang.fluency}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Interactive Inquiry Form */}
                <div className="rounded-3xl border border-white/10 bg-[#090d18]/90 p-6 sm:p-8 backdrop-blur-xl">
                  <h3 className="text-xl font-bold text-white">Project Inquiry</h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Select your project requirements and share details for an initial timeline and quote.
                  </p>

                  <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                    {/* Service Chips */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        I need help with:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Brand Identity',
                          'Hospital / Healthcare Campaign',
                          'Print & Packaging',
                          'Social Campaign',
                          'Motion Graphics',
                          'Art Direction Retainer',
                        ].map((srv) => {
                          const isSelected = selectedServices.includes(srv)
                          return (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => toggleService(srv)}
                              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                                isSelected
                                  ? 'bg-[var(--accent-orange)] text-white shadow-md shadow-[var(--accent-orange)]/30'
                                  : 'border border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
                              }`}
                            >
                              {srv}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Dr. Rajesh Sharma / Alex Chen"
                          className="custom-input"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="custom-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Timeline & Estimated Budget (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        placeholder="e.g. Within 4 weeks • $2,500 - $5,000"
                        className="custom-input"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Brief Project Description
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your brand goals, target audience, and key deliverables..."
                        className="custom-input resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading || formSubmitted}
                      className="cta-primary w-full justify-center py-4"
                    >
                      {formSubmitted ? (
                        <>
                          <CheckCircle2 className="h-5 w-5 text-white" />
                          <span>Inquiry Dispatched Successfully!</span>
                        </>
                      ) : formLoading ? (
                        <>
                          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Project Inquiry</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* 8. FOOTER */}
          <footer className="panel-shell p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-sm font-bold text-white">
                  Jasmeet Visual Studio • 10+ Years of Craft
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Architecting memorable brand identities, clinical healthcare systems, and editorial print.
                </p>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-[var(--accent-orange)] hover:bg-[var(--accent-orange)] hover:text-white transition-all duration-300"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}

                <button
                  type="button"
                  onClick={() => scrollToSection('home')}
                  className="cta-secondary text-xs py-2 px-4 ml-2"
                >
                  <span>Back to Top</span>
                  <ArrowRight className="h-3.5 w-3.5 -rotate-90" />
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* CASE STUDY MODAL LIGHTBOX */}
      <AnimatePresence>
        {activeCaseStudy && (
          <div
            className="modal-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveCaseStudy(null)
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="modal-card"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveCaseStudy(null)}
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image Header */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                <Image
                  src={activeCaseStudy.image}
                  alt={activeCaseStudy.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Case Study Content */}
              <div className="mt-6 space-y-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[var(--accent-orange)]/15 border border-[var(--accent-orange)]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--accent-orange)]">
                      {activeCaseStudy.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Client: {activeCaseStudy.client} • {activeCaseStudy.year}
                    </span>
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">
                    {activeCaseStudy.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {activeCaseStudy.fullDescription}
                  </p>
                </div>

                {/* Challenge & Solution */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-white/3 p-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                      The Challenge
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-300">
                      {activeCaseStudy.challenge}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/3 p-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                      Strategic Solution
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-300">
                      {activeCaseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Interactive Color Palette */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Bespoke Brand Color Architecture (Click to copy hex)
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {activeCaseStudy.colorPalette.map((color) => (
                      <button
                        key={color.hex}
                        type="button"
                        onClick={() => handleCopy(color.hex)}
                        className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 transition-all hover:bg-white/8"
                      >
                        <span
                          className="h-4 w-4 rounded-full border border-white/20 shadow-sm"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-xs font-medium text-white">{color.name}</span>
                        <span className="text-[10px] font-mono text-slate-400 group-hover:text-white">
                          {copiedText === color.hex ? 'Copied!' : color.hex}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables & Tools */}
                <div className="grid gap-6 sm:grid-cols-2 border-t border-white/8 pt-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Production Deliverables
                    </h4>
                    <div className="space-y-2">
                      {activeCaseStudy.deliverables.map((del) => (
                        <div key={del} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-orange)] shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Tools & Software Deployed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCaseStudy.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {activeCaseStudy.metrics && (
                      <div className="mt-5 rounded-xl border border-[var(--accent-orange)]/25 bg-[var(--accent-orange)]/10 p-3">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent-orange)]">
                          Verified Impact
                        </p>
                        <p className="text-xl font-black text-white mt-0.5">
                          {activeCaseStudy.metrics.value}{' '}
                          <span className="text-xs font-normal text-slate-300">
                            {activeCaseStudy.metrics.label}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-400">
                    Interested in crafting a similar visual identity or campaign?
                  </p>
                  <button
                    type="button"
                    className="cta-primary text-xs py-3 px-6 w-full sm:w-auto justify-center"
                    onClick={() => {
                      setActiveCaseStudy(null)
                      scrollToSection('contact')
                      setSelectedServices([activeCaseStudy.category])
                    }}
                  >
                    <span>Request Similar Project</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
