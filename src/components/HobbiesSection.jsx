import { Card, CardContent } from "./Card"

export const HobbiesSection = ({ hobbiesRef }) => {
  return (
    <section
      ref={hobbiesRef}
      className='min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-muted/50'
    >
      <div className='container max-w-4xl'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center'>
          Hobbies
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {["Coding", "Playing an instrument", "Singing"].map(hobby => (
            <Card key={hobby} className='overflow-hidden'>
              <CardContent className='p-6'>
                <h3 className='text-xl font-bold mb-2'>{hobby}</h3>
                <p className='text-muted-foreground'>
                  Enjoying {hobby.toLowerCase()} in my free time.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
