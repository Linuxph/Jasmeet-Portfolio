'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Download,
  ExternalLink,
  Menu,
  Send,
  X,
} from 'lucide-react'
import Lenis from 'lenis'

import heroImage from '@/1.jpeg'
import {
  certifications,
  contactDetails,
  education,
  heroBadges,
  languages,
  navigationItems,
  projects,
  services,
  skillCards,
  skills,
  socialLinks,
} from '@/components/portfolio/data'

const sectionIds = ['home', 'skills', 'projects', 'education', 'contact']

function CardShell({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`panel-shell ${className}`}>{children}</div>
}

function PanelRail({
  activeSection,
  onNavigate,
}: {
  activeSection: string
  onNavigate: (sectionId: string) => void
}) {
  return (
    <div className="panel-rail">
      {navigationItems.map((item) => {
        const Icon = item.icon
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`rail-link ${activeSection === item.id ? 'rail-link-active' : ''}`}
            aria-label={item.label}
            title={item.label}
            onClick={(e) => {
              e.preventDefault()
              onNavigate(item.id)
            }}
          >
            <Icon className="h-4 w-4" />
          </a>
        )
      })}
    </div>
  )
}

function SectionHeading({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="panel-title">{title}</h2>
      <p className="panel-copy mt-3">{description}</p>
    </div>
  )
}

export function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const horizontalShowcaseRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: horizontalShowcaseRef,
    offset: ['start start', 'end end'],
  })
  const horizontalTrackX = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])
  const horizontalGlowX = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    })

    let frameId = 0

    const raf = (time: number) => {
      lenis.raf(time)
      frameId = window.requestAnimationFrame(raf)
    }

    frameId = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length === 0) return

        const visibleEntry = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0]

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-25% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [mobileMenuOpen])

  return (
    <main className="portfolio-page">
      <div className="ambient-grid" />
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />
      <div className="ambient-orb ambient-orb-bottom" />

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
          <span>Jasmeet.dev</span>
        </a>
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {mobileMenuOpen ? (
        <div className="mobile-menu">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                type="button"
                className={`mobile-menu-link ${activeSection === item.id ? 'mobile-menu-link-active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      ) : null}

      <div className="portfolio-shell">
        <aside className="site-rail-wrap">
          <PanelRail activeSection={activeSection} onNavigate={scrollToSection} />
        </aside>

        <div className="content-grid">
          <section id="home" className="scroll-section">
            <CardShell className="hero-panel hero-panel-centered">
              <div className="hero-grid hero-grid-centered">
                <div className="hero-visual hero-visual-centered">
                  <div className="hero-avatar-shell hero-avatar-shell-centered">
                    <div className="hero-avatar-stack hero-avatar-stack-centered">
                      <div className="hero-avatar-frame hero-avatar-frame-round">
                        <Image
                          src={heroImage}
                          alt="Jasmeet portrait"
                          className="hero-avatar-image hero-avatar-image-round"
                          priority
                        />
                      </div>
                      <div className="avatar-glow avatar-glow-cyan" />
                      <div className="avatar-glow avatar-glow-violet" />
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65 }}
                  className="hero-copy hero-copy-centered"
                >
                  <div className="hero-badges hero-badges-centered">
                    {heroBadges.slice(0, 2).map((badge) => (
                      <span key={badge.label} className={`accent-chip accent-chip-${badge.tone}`}>
                        {badge.label}
                      </span>
                    ))}
                  </div>
                  <h1 className="hero-title hero-title-centered">
                    Hi, I&apos;m <span>Jasmeet</span>
                  </h1>
                  <p className="hero-subtitle hero-subtitle-centered">
                    I&apos;m a UI/UX Designer | Frontend Developer
                  </p>
                  <p className="hero-description">
                    I create beautiful, responsive web experiences using modern technologies.
                    Passionate about clean code and user-centered design.
                  </p>
                  <div className="hero-actions hero-actions-centered">
                    <a href="#projects" className="cta-primary" onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('projects')
                    }}>
                      View My Work <ArrowRight className="h-4 w-4" />
                    </a>
                    <a href="#contact" className="cta-secondary" onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('contact')
                    }}>
                      <Download className="h-4 w-4" /> Download CV
                    </a>
                  </div>
                </motion.div>
              </div>
            </CardShell>
          </section>

          <section id="skills" className="scroll-section">
            <CardShell className="section-shell skills-section-shell">
              <div className="skills-showcase">
                <div className="skills-visual-panel">
                  <div className="skills-orbit-rail">
                    {skillCards.map(({ title, icon: Icon, accent }) => (
                      <span key={title} className={`skills-orbit-icon skills-orbit-icon-${accent}`}>
                        <Icon className="h-4 w-4" />
                      </span>
                    ))}
                  </div>
                  <div className="skills-visual-stage">
                    <div className="skills-hand-glow" />
                    <div className="skills-core-card">
                      <div className="skills-core-ring" />
                      <div className="skills-core-grid" />
                    </div>
                    <div className="skills-floating-icons">
                      {skillCards.map(({ title, icon: Icon, accent }) => (
                        <span key={title} className={`skills-floating-icon skills-floating-icon-${accent}`}>
                          <Icon className="h-4 w-4" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="skills-copy-panel">
                  <p className="skills-kicker">Expertise</p>
                  <h2 className="skills-title">My Skills</h2>
                  <p className="skills-intro">
                    I&apos;m a passionate web developer with experience building modern,
                    responsive web applications. I specialize in frontend development using
                    cutting-edge technologies to deliver exceptional user experiences.
                  </p>
                  <div className="skills-progress-list-reference">
                    {skills.map((skill) => (
                      <div key={skill.name} className="skill-progress-card skill-progress-card-reference">
                        <div className="skill-progress-row skill-progress-row-reference">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-value">{skill.level}%</span>
                        </div>
                        <div className="skill-track skill-track-reference">
                          <div
                            className={`skill-bar skill-bar-${skill.accent}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardShell>
          </section>

      <section ref={horizontalShowcaseRef} className="horizontal-scroll-section">
        <div className="horizontal-scroll-sticky">
          <motion.div className="horizontal-scroll-track" style={{ x: horizontalTrackX }}>
            <section id="projects" className="scroll-section">
              <CardShell className="section-shell project-section-shell">
                <div className="project-section-header">
                  <p className="project-section-kicker">Portfolio</p>
                  <h2 className="project-section-title">Graphic Design Portfolio</h2>
                  <p className="project-section-copy">
                    Selected branding, print, social, and campaign work shaped for visual
                    storytelling.
                  </p>
                </div>

                <div className="project-board project-board-reference">
                    {projects.map((project, index) => (
                      <article key={project.title} className="project-thumb-card">
                        <div className={`project-preview project-preview-${project.accent}`}>
                          <div className="project-preview-grid" />
                          <div className="project-preview-poster project-preview-poster-reference">
                            <div className="project-preview-poster-label">
                              <span />
                              <span />
                            </div>
                            <div className="project-preview-poster-title" />
                            <div className="project-preview-poster-art">
                              <div className="project-preview-poster-orb" />
                              <div className="project-preview-poster-card" />
                            </div>
                            <div className="project-preview-columns">
                              <div className="project-preview-content small" />
                              <div className="project-preview-content small alt" />
                            </div>
                          </div>
                          <span className="project-index">0{index + 1}</span>
                        </div>

                        <div className="project-card-body project-card-body-reference">
                          <div>
                            <p className="project-status">{project.category}</p>
                            <h3 className="mini-card-title">{project.title}</h3>
                          </div>
                          <p className="project-description">{project.description}</p>
                          <div className="project-tags">
                            {project.tags.map((tag) => (
                              <span key={tag} className="project-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="project-links project-links-compact">
                            <a href={project.liveUrl} className="project-link-pill">
                              Preview <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                            <a href={project.caseStudyUrl} className="project-link-pill">
                              Details <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </CardShell>
            </section>

              <section className="horizontal-panel horizontal-panel-video">
                <CardShell className="horizontal-panel-shell">
                  <motion.div className="horizontal-panel-glow" style={{ x: horizontalGlowX }} />
                  <div className="horizontal-panel-copy">
                    <p className="horizontal-panel-kicker">Motion Work</p>
                    <h2 className="horizontal-panel-title">Video Editing & Visual Reels</h2>
                    <p className="horizontal-panel-description">
                      Short-form edits, promo cuts, and mood-driven visual sequences built to
                      keep the scroll smooth and the pacing memorable.
                    </p>
                    <div className="horizontal-feature-list">
                      <span>Reels & Shorts</span>
                      <span>Music Sync</span>
                      <span>Promo Edits</span>
                    </div>
                  </div>
                  <div className="horizontal-visual-stage horizontal-visual-stage-video">
                    <div className="video-frame video-frame-tall">
                      <div className="video-frame-top" />
                      <div className="video-waveform" />
                      <div className="video-timeline">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                    <div className="floating-caption-card">
                      <p>Storyboard</p>
                      <strong>Cut, sync, reveal</strong>
                    </div>
                  </div>
                </CardShell>
              </section>

              <section className="horizontal-panel horizontal-panel-ai">
                <CardShell className="horizontal-panel-shell">
                  <motion.div
                    className="horizontal-panel-glow horizontal-panel-glow-ai"
                    style={{ x: horizontalGlowX }}
                  />
                  <div className="horizontal-panel-copy">
                    <p className="horizontal-panel-kicker">AI Creative</p>
                    <h2 className="horizontal-panel-title">AI Videos & Image Generation</h2>
                    <p className="horizontal-panel-description">
                      Concept frames, style explorations, and AI-assisted visuals combined into
                      creative assets that still feel art directed.
                    </p>
                    <div className="horizontal-feature-list">
                      <span>Prompt Styling</span>
                      <span>Scene Concepts</span>
                      <span>Campaign Visuals</span>
                    </div>
                  </div>
                  <div className="horizontal-visual-stage horizontal-visual-stage-ai">
                    <div className="ai-mosaic">
                      <div className="ai-mosaic-card ai-mosaic-card-large" />
                      <div className="ai-mosaic-card" />
                      <div className="ai-mosaic-card ai-mosaic-card-accent" />
                      <div className="ai-mosaic-card" />
                    </div>
                    <div className="floating-caption-card floating-caption-card-ai">
                      <p>Generated Moodboards</p>
                      <strong>Frames, texture, style</strong>
                    </div>
                  </div>
                </CardShell>
              </section>
            </motion.div>
          </div>
        </section>

          {/* <section id="education" className="scroll-section">
            <CardShell className="section-shell">
              <div className="section-head">
                <SectionHeading
                  title="Learning Path"
                  description="Academic foundations, daily frontend practice, and continuous UI study all feed into how I approach real client-facing work."
                />
                <p className="section-note">
                  I like combining formal study with small, frequent builds that sharpen
                  decision-making.
                </p>
              </div>

              <div className="dashboard-content">
                <div>
                  <p className="section-eyebrow">Growth</p>
                </div>
                <div className="education-columns">
                  <div className="stack-list">
                    <p className="stack-heading">Education</p>
                    {education.map(({ title, subtitle, icon: Icon }) => (
                      <div key={title} className="info-tile">
                        <span className="service-icon">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <h3 className="mini-card-title">{title}</h3>
                          <p className="mini-card-copy">{subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="stack-list">
                    <p className="stack-heading">Certifications</p>
                    {certifications.map((item) => (
                      <div key={item} className="info-tile">
                        <span className="service-icon">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                        <div>
                          <h3 className="mini-card-title">{item}</h3>
                          <p className="mini-card-copy">
                            Continuous learning and practical implementation.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardShell>
          </section> */}

          <section id="contact" className="scroll-section">
            <CardShell className="section-shell">
              <div className="section-head">
                <SectionHeading
                  title="Let’s Build Something Strong"
                  description="If you need a portfolio, landing page, or polished frontend experience, I’m available to collaborate and refine the details with you."
                />
                <p className="section-note">
                  Best for freelance projects, student portfolios, early-stage product UI, and
                  redesign support.
                </p>
              </div>

              <div className="dashboard-content">
                <div>
                  <p className="section-eyebrow">Contact</p>
                </div>
                <div className="contact-layout">
                  <div className="grid gap-4">
                    <div className="languages-card">
                      {languages.map((item) => (
                        <div key={item.name} className="language-row">
                          <div>
                            <p className="mini-card-title">{item.name}</p>
                            <p className="mini-card-copy">Proficiency</p>
                          </div>
                          <div className="language-meter">
                            <div className="language-track">
                              <div
                                className="language-fill"
                                style={{ width: `${item.level}%` }}
                              />
                            </div>
                            <span className="skill-value">{item.level}%</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="contact-grid">
                      {contactDetails.map(({ label, value, icon: Icon }) => (
                        <div key={label} className="contact-detail-card">
                          <span className="contact-detail-icon">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="mini-card-copy">{label}</p>
                            <p className="mini-card-title">{value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="availability-card">
                      <p className="section-eyebrow">Availability</p>
                      <h3 className="availability-title mt-3">
                        Currently open for freelance and collaboration
                      </h3>
                      <p className="availability-copy">
                        I can help shape a cleaner portfolio, responsive marketing page, or
                        frontend implementation that feels more intentional than a basic template.
                      </p>
                    </div>

                    <div className="quote-card">
                      <p className="quote-mark">&ldquo;</p>
                      <p className="quote-copy">
                        The goal is simple: make the interface feel easy to trust, easy to use,
                        and memorable after the first scroll.
                      </p>
                    </div>

                    <form className="compact-contact-form">
                      <input className="form-input" type="text" placeholder="Your Name" />
                      <input className="form-input" type="email" placeholder="Email Address" />
                      <textarea
                        className="form-input min-h-28 resize-none"
                        placeholder="Tell me about your project"
                      />
                      <button type="button" className="cta-primary justify-center">
                        Send Message <Send className="h-4 w-4" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </CardShell>
          </section>

          <section className="bottom-strip">
            <CardShell className="footer-panel">
              <div className="footer-copy">
                <p className="panel-copy">
                  Designed to present Jasmeet as a thoughtful UI and frontend partner with stronger
                  hierarchy, cleaner storytelling, and a more confident visual system.
                </p>
                <div className="footer-socials">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="social-chip"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="footer-links">
                <button
                  type="button"
                  className="cta-secondary"
                  onClick={() => scrollToSection('projects')}
                >
                  Explore Projects <ExternalLink className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="cta-secondary"
                  onClick={() => scrollToSection('home')}
                >
                  Back to Top <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </CardShell>
          </section>
        </div>
      </div>
    </main>
  )
}
