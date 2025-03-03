export const ProfileSection = ({ profileRef }) => {
  return (
    <section
      ref={profileRef}
      className='min-h-screen flex flex-col items-center justify-center py-20 px-4'
    >
      <div className='container max-w-4xl'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center'>
          Profile
        </h2>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          <div className='w-48 h-48 rounded-full overflow-hidden bg-muted flex-shrink-0'>
            <img
              src='https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/475760233_2958426964334332_574729444036907833_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGvV14dlItRmUvg_C13PLiokSRRpyy4AQeRJFGnLLgBB_rKYMgNTzuOxQntjnud95c4seV7xMJIrOmCSDmduuDA&_nc_ohc=nUGA0-C-yEcQ7kNvgEPCANI&_nc_oc=AdhX70-rUMvYZzANrMZhe0VL3n-LrYcVCCaIzgxnVDu1gEUtJK9EfQjVXysR65xK1TM&_nc_zt=23&_nc_ht=scontent.fmnl9-2.fna&_nc_gid=AepV7T7eQEEk3kgc3slsIwD&oh=00_AYAhIpn4d3RoGwwfosDsZDEEzPqFsWwZ2gVxzuXTR3XYeg&oe=67C9D46E'
              alt='Profile'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='flex-1'>
            <h3 className='text-2xl font-bold mb-2'>John Paul</h3>
            <p className='text-muted-foreground mb-4'>Full Stack Developer</p>
            <p className='mb-4'>
              I'm a passionate full stack developer with 5 years of experience
              building modern, responsive web applications. I specialize in
              React, Next.js, TypeScript, Python & Django.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
