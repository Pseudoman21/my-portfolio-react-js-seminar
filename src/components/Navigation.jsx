export const Navigation = ({
  profileRef,
  hobbiesRef,
  skillsRef,
  contactRef
}) => {
  const scrollToSection = ref => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b'>
      <div className='container flex h-16 items-center justify-between'>
        <span className='text-xl font-bold'>Portfolio</span>
        <div className='flex gap-6'>
          <button
            onClick={() => scrollToSection(profileRef)}
            className='text-sm font-medium hover:text-primary transition-colors'
          >
            Profile
          </button>
          <button
            onClick={() => scrollToSection(hobbiesRef)}
            className='text-sm font-medium hover:text-primary transition-colors'
          >
            Hobbies
          </button>
          <button
            onClick={() => scrollToSection(skillsRef)}
            className='text-sm font-medium hover:text-primary transition-colors'
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className='text-sm font-medium hover:text-primary transition-colors'
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}
