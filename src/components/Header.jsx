import { ChevronDown } from 'lucide-react'
import { Button } from './Button'
import { scrollToSection } from '../lib/utils'

export const Header = ({ profileRef }) => {
  return (
    <section className='h-screen flex flex-col items-center justify-center text-center px-4'>
      <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
        Welcome to My Portfolio
      </h1>
      <p className='mt-4 text-xl text-muted-foreground max-w-md'>
        Scroll down to learn more about me, my skills, hobbies, and how to get
        in touch.
      </p>
      <Button
        onClick={() => scrollToSection(profileRef)}
        variant='ghost'
        size='icon'
        className='mt-8 animate-bounce'
      >
        <ChevronDown className='h-6 w-6' />
        <span className='sr-only'>Scroll down</span>
      </Button>
    </section>
  )
}
