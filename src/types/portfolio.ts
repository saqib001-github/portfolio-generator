export type TemplateType = 'modern' | 'timeline' | 'classic';

export interface Skill { name: string; percentage: number }
export interface Service { title: string; description: string }
export interface Project { title: string; image: string; description: string }
export interface Testimonial { name: string; role: string; quote: string }
export interface Blog { title: string; summary: string }
export interface Socials { linkedin?: string; github?: string; twitter?: string }

export interface Portfolio {
  id: string
  template: TemplateType
  hero: {
    name: string
    title: string
    tagline: string
    profileImage: string
  }
  about: {
    bio: string
    email: string
    phone: string
    location: string
    socials: Socials
  }
  skills: Skill[]
  services: Service[]
  portfolio: Project[]
  testimonials: Testimonial[]
  blog?: Blog
  contact: {
    message: string
    email: string
    phone: string
  }
  createdAt: string
}
