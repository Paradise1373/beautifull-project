import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from 'lucide-react'

import { useState } from 'react'
import { useToast } from '../hooks/use-toast'

import { cn } from '../hooks/lib/utils'

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsSubmitting(true)

    setTimeout(() => {
      toast({
        title: 'Message sent !',
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container max-w-5xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In <span className='text-primary'> Touch</span>
        </h2>
        <p className='text-center max-w-2xl mx-auto text-muted-foreground mb-12'>
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
            <div className='space-y-6 justify-center'>
              <div className='flex space-x-4 items-start'>
                <div className='p-3 bg-primary/10 rounded-full'>
                  <Mail className='w-6 h-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>E-mail</h4>
                  <a
                    href='https://abdullahmaghsoudi@gmail.com'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    abdullahmaghsoudi@gmail.com
                  </a>
                </div>
              </div>
              <div className='flex space-x-4 items-start'>
                <div className='p-3 bg-primary/10 rounded-full'>
                  <Phone className='w-6 h-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Phone</h4>
                  <a
                    href='tel: +989357079762'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    +98 9357079762
                  </a>
                </div>
              </div>
              <div className='flex space-x-4 items-start'>
                <div className='p-3 bg-primary/10 rounded-full'>
                  <MapPin className='w-6 h-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <a className='text-muted-foreground hover:text-primary transition-colors'>
                    138 - sekhavat st - Mashhad - Iran
                  </a>
                </div>
              </div>
            </div>
            <div className='pt-8'>
              <h4 className='font-medium mb-4'>Connect With me</h4>
              <div className='flex space-x-4 justify-center'>
                <a target='_blank' href='https://linkedin.com/feed'>
                  <Linkedin />
                </a>
                <a target='_blank' href='https://x.com/@Abdullahpara33'>
                  <Twitter />
                </a>
                <a target='_blank' href='https://instagram.com/paradise.z.1994'>
                  <Instagram />
                </a>
                <a target='_blank' href='#'>
                  <Twitch />
                </a>
              </div>
            </div>
          </div>
          <div
            className='bg-card p-8 rounded-lg shadow-xs'
            onSubmit={handleSubmit}
          >
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
            <form className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm mb-2 font-medium'
                >
                  Your Name
                </label>
                <input
                  name='name'
                  id='name'
                  type='text'
                  required
                  className='w-full px-4 py-3 mb-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  placeholder='Your Name...'
                />
                <label
                  htmlFor='email'
                  className='block text-sm mb-2 font-medium'
                >
                  E-mail
                </label>
                <input
                  name='name'
                  id='email'
                  type='email'
                  required
                  className='w-full px-4 py-3 mb-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  placeholder='Example@email.com...'
                />
                <label
                  htmlFor='message'
                  className='block text-sm mb-2 font-medium'
                >
                  Message
                </label>
                <textarea
                  name='message'
                  id='message'
                  type='text'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type='submit'
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2 '
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
