export const Footer = () => {
  return (
    <footer className='py-6 border-t'>
      <div className='container flex flex-col items-center justify-center gap-2 text-center'>
        <p className='text-sm text-muted-foreground'>
          © {new Date().getFullYear()} John Paul. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
