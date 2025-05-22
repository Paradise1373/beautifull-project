import { ArrowDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='flex flex-col relative min-h-screen items-center justify-center px-4'
    >
      <div className='container max-w-4xl mx-auto z-10 text-center'>
        <div className='space-y-6'>
          <h2 className='text-3xl md:text-5xl font-bold tracking-tight'>
            <span className='opacity-0 animate-fade-in'>Hi,I'm </span>
            <span className='opacity-0 animate-fade-in-delay-1 text-primary'>
              ABdullah{' '}
            </span>
            <span className='opacity-0 animate-fade-in-delay-2 text-gradient'>
              MAGHsoudi
            </span>
          </h2>
          <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>
          <div className='opacity-0 animate-fade-in-delay-4 pt-4'>
            <a href='#projects' className='cosmic-button'>
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className='absolute flex flex-col items-center bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <span className='text-md text-muted-foreground mb-2'>Scroll</span>
        <ArrowDown className='w-5 h-5 text-primary' />
      </div>
    </section>
  )
}

export default HeroSection
