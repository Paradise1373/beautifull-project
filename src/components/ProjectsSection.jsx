import { ArrowRight, ExternalLink, GithubIcon } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Saas Landing Page',
    description: 'A beautiful landing page app using React and Tailwind.',
    image: '/projects/project1.png',
    tags: ['React', 'TailwindCSS', 'Supabase'],
    demoUrl: '#',
    githubUrl: 'https://github.com/paradise1373',
  },
  {
    id: 2,
    title: 'Orbit Analytics Dashboard',
    description:
      'Interactive analytics dashboard with data visualization and filtering capabilities.',
    image: '/projects/project2.png',
    tags: ['TypeScript', 'D3.js', 'Next.js'],
    demoUrl: '#',
    githubUrl: 'https://github.com/paradise1373',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description:
      'Full-featured e-commerce platform with user authentication and payment processing',
    image: '/projects/project3.png',
    tags: ['React', 'Node.js', 'Strip'],
    demoUrl: '#',
    githubUrl: 'https://github.com/paradise1373',
  },
]

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl mb-4 font-bold text-center'>
          Featured <span className='text-primary'>Projects</span>
        </h2>
        <p className='text-center text-muted-foreground mx-auto max-w-2xl mb-12'>
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, key) => (
            <div
              key={key}
              className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
            >
              <div className='h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>
              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-2 py-1 text-xs font-medium bg-secondary border rounded-full text-secondary-foreground '
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                <div className='text-muted-foreground text-sm mb-4'>
                  {project.description}
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-3'>
                    <a
                      href={project.demoUrl}
                      target='_blank'
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <a
            className='cosmic-button w-fit gap-2 mx-auto flex items-center'
            target='_blank'
            href='https://github.com/paradise1373'
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
