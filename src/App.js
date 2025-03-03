'use client'

import { useEffect, useRef } from 'react'
import { ProfileSection } from './components/ProfileSection'
import { HobbiesSection } from './components/HobbiesSection'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export default function Home () {
  // Refs for each section
  const profileRef = useRef(null)
  const hobbiesRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  // Add smooth scrolling behavior to the document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className='min-h-screen bg-background'>
      <Header profileRef={profileRef} />
      <ProfileSection profileRef={profileRef} />
      <HobbiesSection hobbiesRef={hobbiesRef} />
      <Skills skillsRef={skillsRef} />
      <Contact contactRef={contactRef} />

      <Footer />
    </div>
  )
}
