import { Mail, Github, Linkedin } from 'lucide-react'
import { Button } from './Button'

export const Contact = ({ contactRef }) => {
  return (
    <section
      ref={contactRef}
      className='min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-muted/50'
    >
      <div className='container max-w-4xl'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center'>
          Contact
        </h2>
        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Get In Touch</h3>
            <p className='text-muted-foreground mb-6'>
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>

            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <Mail className='h-5 w-5 text-muted-foreground' />
                <a
                  href='mailto:johnpaul.batusa@gmail.com'
                  className='hover:text-primary transition-colors'
                >
                  johnpaul.batusa@gmail.com
                </a>
              </div>

              <div className='flex items-center gap-3'>
                <Github className='h-5 w-5 text-muted-foreground' />
                <a
                  href='https://github.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  github.com/Pseudoman21
                </a>
              </div>

              <div className='flex items-center gap-3'>
                <Linkedin className='h-5 w-5 text-muted-foreground' />
                <a
                  href='https://www.linkedin.com/in/john-paul-batusan-8361b617a/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  linkedin.com/in/john-paul-batusan-8361b617a/
                </a>
              </div>
            </div>
          </div>

          <div>
            <form className='space-y-4'>
              <div className='grid gap-2'>
                <label htmlFor='name' className='text-sm font-medium'>
                  Name
                </label>
                <input
                  id='name'
                  type='text'
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
                  placeholder='Your name'
                />
              </div>

              <div className='grid gap-2'>
                <label htmlFor='email' className='text-sm font-medium'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
                  placeholder='Your email'
                />
              </div>

              <div className='grid gap-2'>
                <label htmlFor='message' className='text-sm font-medium'>
                  Message
                </label>
                <textarea
                  id='message'
                  className='flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
                  placeholder='Your message'
                />
              </div>

              <Button type='submit' className='w-full'>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
