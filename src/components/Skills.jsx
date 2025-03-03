import Progress from './Progress'

export const Skills = ({ skillsRef }) => {
  return (
    <section
      ref={skillsRef}
      className='min-h-screen flex flex-col items-center justify-center py-20 px-4'
    >
      <div className='container max-w-4xl'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center'>
          Skills
        </h2>
        <div className='grid gap-6'>
          {[
            { name: 'React / Next.js', value: 95 },
            { name: 'JavaScript', value: 90 },
            { name: 'Python', value: 80 },
            { name: 'Django', value: 80 },
            { name: 'CSS/Tailwind', value: 75 }
          ].map(skill => (
            <div key={skill.name}>
              <div className='flex justify-between mb-2'>
                <span className='font-medium'>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <Progress value={skill.value} className='h-2' />
            </div>
          ))}
        </div>

        <div className='mt-12'>
          <h3 className='text-xl font-bold mb-6'>Other Skills</h3>
          <div className='flex flex-wrap gap-2'>
            {[
              'HTML5',
              'CSS3',
              'Tailwind CSS',
              'Git',
              'Responsive Design'
            ].map(skill => (
              <div
                key={skill}
                className='px-3 py-1 bg-muted rounded-full text-sm'
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
