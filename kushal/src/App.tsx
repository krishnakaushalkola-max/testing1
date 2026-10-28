import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar.tsx'
import { Hero } from './components/Hero.tsx'
import { ProjectCueSeek } from './components/ProjectCueSeek.tsx'
import { ProjectFocusOrb } from './components/ProjectFocusOrb.tsx'
import { ProjectDDSW } from './components/ProjectDDSW.tsx'
import { ProjectLiverQ } from './components/ProjectLiverQ.tsx'
import { AboutSection } from './components/AboutSection.tsx'
import { ContactSection } from './components/ContactSection.tsx'
import { Footer } from './components/Footer.tsx'
import './App.css'

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const sections = ['cueseek', 'focusorb', 'ddsw', 'liverq', 'about', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' },
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio-root" id="top">
      <Navbar activeSection={activeSection} />
      <main className="portfolio-main">
        <Hero />
        <div className="section-separator" />
        <ProjectCueSeek />
        <div className="section-separator" />
        <ProjectFocusOrb />
        <div className="section-separator" />
        <ProjectDDSW />
        <div className="section-separator" />
        <ProjectLiverQ />
        <div className="section-separator" />
        <AboutSection />
        <div className="section-separator" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
