'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
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
  skillCards,
  skills,
  socialLinks,
  stats,
  timeline,
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

function FixedNavRail({
  activeSection,
}: {
  activeSection: string
}) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <nav className="fixed-nav-rail">
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
              scrollToSection(item.id)
            }}
          >
            <Icon className="h-4 w-4" />
          </a>
        )
      })}
    </nav>
  )
}

function PanelRail({
  activeSection,
  compact = false,
}: {
  activeSection: string
  compact?: boolean
}) {
  return (
    <div className={`panel-rail ${compact ? 'panel-rail-compact' : ''}`}>
      {navigationItems.map((item) => {
        const Icon = item.icon
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`rail-link ${activeSection === item.id ? 'rail-link-active' : ''}`}
            aria-label={item.label}
            title={item.label}
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
    <div className="max-w-xl">
      <h2 className="panel-title">{title}</h2>
      <p className="panel-copy mt-3">{description}</p>
    </div>
  )
}

export function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length === 0) return
        const visibleEntry = visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <main className="portfolio-page">
      <div className="ambient-grid" />
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />
      <div className="ambient-orb ambient-orb-bottom" />


      <header className="mobile-header">
        <a href="#home" className="brand-pill">
          <span className="brand-dot">J</span>
          <span>Jasmeet</span>
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
          <PanelRail activeSection={activeSection} />
        </aside>

        <div className="content-grid">
          <section id="home" className="scroll-section">
            <CardShell className="hero-panel">
              <div className="hero-grid">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65 }}
                  className="hero-copy"
                >
                  <div className="hero-avatar-stack lg:hidden">
                    <div className="hero-avatar-frame">
                      <Image src={heroImage} alt="Jasmeet portrait" className="hero-avatar-image" priority />
                    </div>
                  </div>
                  <div className="hero-badges">
                    {heroBadges.map((badge) => (
                      <span key={badge.label} className={`accent-chip accent-chip-${badge.tone}`}>
                        {badge.label}
                      </span>
                    ))}
                  </div>
                  <h1 className="hero-title">
                    Hi, I&apos;m <span>Jasmeet</span>
                  </h1>
                  <p className="hero-subtitle">I&apos;m a UI/UX Designer & Frontend Developer</p>
                  <p className="hero-description">
                    I create beautiful, responsive web experiences using modern technologies with
                    clean structure, glowing dark visuals, and section-based storytelling.
                  </p>
                  <div className="hero-actions">
                    <a href="#projects" className="cta-primary">View My Work</a>
                    <a href="#contact" className="cta-secondary">
                      <Mail className="h-4 w-4" /> Contact Me
                    </a>
                    <a href="#" className="cta-secondary">
                      <Download className="h-4 w-4" /> Download CV
                    </a>
                  </div>
                  <div className="hero-stats">
                    {stats.map((item) => (
                      <div key={item.label} className="hero-stat-card">
                        <p className="hero-stat-value">{item.value}</p>
                        <p className="hero-stat-label">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <div className="hero-visual">
                  <div className="hero-avatar-stack">
                    <div className="hero-avatar-frame">
                      <Image src={heroImage} alt="Jasmeet portrait" className="hero-avatar-image" priority />
                    </div>
                    <div className="avatar-glow avatar-glow-cyan" />
                    <div className="avatar-glow avatar-glow-violet" />
                  </div>
                  <div className="hero-journey">
                    {timeline.map((item) => (
                      <div key={item.year} className="mini-info-card">
                        <p className="mini-info-year">{item.year}</p>
                        <p className="mini-info-title">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardShell>
          </section>

          

          <section id="skills" className="scroll-section">

              <div className="dashboard-content">
                <SectionHeading title="My Skills" description="A polished mix of frontend tooling and interface thinking, shown with compact cards and glowing progress bars." />
                <div className="mini-skill-grid">
                  {skillCards.map(({ title, subtitle, icon: Icon, accent }) => (
                    <div key={title} className="mini-skill-card">
                      <span className={`mini-skill-icon mini-skill-icon-${accent}`}><Icon className="h-5 w-5" /></span>
                      <div>
                        <h3 className="mini-card-title">{title}</h3>
                        <p className="mini-card-copy">{subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="skill-progress-list">
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-progress-card">
                      <div className="skill-progress-row">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-value">{skill.level}%</span>
                      </div>
                      <div className="skill-track">
                        <div className={`skill-bar skill-bar-${skill.accent}`} style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </section>


          <section id="projects" className="scroll-section">
              <div className="dashboard-content">
                <SectionHeading title="My Portfolio" description="A collection of personal and client-facing concepts presented in the same sleek dashboard language." />
                <div className="project-board">
                  {projects.map((project, index) => (
                    <article key={project.title} className="project-thumb-card">
                      <div className={`project-preview project-preview-${project.accent}`}>
                        <div className="project-preview-grid" />
                        <div className="project-preview-window">
                          <div className="project-preview-bar" />
                          <div className="project-preview-content" />
                          <div className="project-preview-content small" />
                        </div>
                        <span className="project-index">0{index + 1}</span>
                      </div>
                      <h3 className="mini-card-title mt-3">{project.title}</h3>
                      <p className="project-category">{project.category}</p>
                    </article>
                  ))}
                </div>
              </div>
          </section>

          <section id="education" className="scroll-section">
              <div className="dashboard-content">
                <SectionHeading title="Education" description="My learning path combines academic study, frontend building practice, and hands-on UI exploration." />
                <div className="education-columns">
                  <div className="stack-list">
                    <p className="stack-heading">Education</p>
                    {education.map(({ title, subtitle, icon: Icon }) => (
                      <div key={title} className="info-tile">
                        <span className="service-icon"><Icon className="h-4 w-4" /></span>
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
                        <span className="service-icon"><ArrowRight className="h-4 w-4" /></span>
                        <div>
                          <h3 className="mini-card-title">{item}</h3>
                          <p className="mini-card-copy">Continuous learning and practical implementation.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </section>

          <section id="contact" className="scroll-section">
              <div className="dashboard-content">
                <SectionHeading title="Languages & Contact" description="Communication, reachability, and collaboration details kept inside the same visual system." />
                <div className="languages-card">
                  {languages.map((item) => (
                    <div key={item.name} className="language-row">
                      <div><p className="mini-card-title">{item.name}</p><p className="mini-card-copy">Proficiency</p></div>
                      <div className="language-meter">
                        <div className="language-track"><div className="language-fill" style={{ width: `${item.level}%` }} /></div>
                        <span className="skill-value">{item.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="contact-grid">
                  {contactDetails.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="contact-detail-card">
                      <span className="contact-detail-icon"><Icon className="h-4 w-4" /></span>
                      <div><p className="mini-card-copy">{label}</p><p className="mini-card-title">{value}</p></div>
                    </div>
                  ))}
                </div>
                <form className="compact-contact-form">
                  <input className="form-input" type="text" placeholder="Your Name" />
                  <input className="form-input" type="email" placeholder="Email Address" />
                  <textarea className="form-input min-h-28 resize-none" placeholder="Tell me about your project" />
                  <button type="button" className="cta-primary justify-center">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
          </section>

         

      


          <section className="bottom-strip">
            <CardShell className="footer-panel">
              <div className="footer-copy">
                <p className="panel-copy">Designed for Jasmeet with a modern dark portfolio style inspired by the reference layout.</p>
                <div className="footer-socials">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} aria-label={label} className="social-chip"><Icon className="h-4 w-4" /></a>
                  ))}
                </div>
              </div>
              <div className="footer-links">
                <a href="#projects" className="cta-secondary">Explore Projects <ExternalLink className="h-4 w-4" /></a>
                <a href="#home" className="cta-secondary">Back to Top <ArrowRight className="h-4 w-4" /></a>
              </div>
            </CardShell>
          </section>
        </div>
      </div>
    </main>
  )
}
