import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'

const Home = () => {
  return (
    <div className='text-center min-h-screen bg-background text-foreground overflow-x-hidden'>
      <ThemeToggle />
      <StarBackground />
    </div>
  )
}

export default Home
