import type { Portfolio } from '../../types/portfolio'
import { Mail, Phone, MapPin, ExternalLink, Quote, ChevronRight, Star, Sparkles } from 'lucide-react'

interface Props {
  portfolio: Portfolio
}

const ModernTemplate = ({ portfolio }: Props) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {portfolio.hero.profileImage && (
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <img
                  src={portfolio.hero.profileImage}
                  alt={portfolio.hero.name}
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl ring-4 ring-white/50 backdrop-blur-sm"
                  draggable={false}
                />
              </div>
            )}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-800 border border-purple-200">
                  <Sparkles className="w-4 h-4" />
                  Available for new projects
                </div>
                <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                  {portfolio.hero.name}
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">{portfolio.hero.title}</h2>
                <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">{portfolio.hero.tagline}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                  View My Work
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Bio */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50">
                <p className="text-lg text-gray-700 leading-relaxed">{portfolio.about.bio}</p>
              </div>
              
              {/* Contact Info */}
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Let's Connect</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ContactDetail icon={<Mail className="text-purple-500" />} info={portfolio.about.email} />
                  <ContactDetail icon={<Phone className="text-blue-500" />} info={portfolio.about.phone} />
                  <ContactDetail icon={<MapPin className="text-cyan-500" />} info={portfolio.about.location} />
                </div>
                
                {/* Social Links */}
                <div className="flex gap-4 mt-8">
                  {portfolio.about.socials.linkedin && (
                    <a href={portfolio.about.socials.linkedin} target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg width="20" height="20" fill="currentColor"><use xlinkHref="#icon-linkedin" /></svg>
                    </a>
                  )}
                  {portfolio.about.socials.github && (
                    <a href={portfolio.about.socials.github} target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg width="20" height="20" fill="currentColor"><use xlinkHref="#icon-github" /></svg>
                    </a>
                  )}
                  {portfolio.about.socials.twitter && (
                    <a href={portfolio.about.socials.twitter} target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg width="20" height="20" fill="currentColor"><use xlinkHref="#icon-twitter" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            {/* Skills */}
            <div>
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 h-fit">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Skills & Expertise</h3>
                <div className="space-y-4">
                  {portfolio.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm font-semibold text-purple-600">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Services I Offer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Featured Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.portfolio.map((project, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                  {project.image && (
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <button className="inline-flex items-center gap-2 text-purple-600 hover:text-blue-600 font-semibold transition-colors duration-300 group/btn">
                      View Project
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {portfolio.testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-purple-400 mb-4" />
                  <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">{portfolio.contact.message}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`mailto:${portfolio.contact.email}`}
                className="px-10 py-4 bg-white text-gray-800 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Send Email
              </a>
              <a
                href={`tel:${portfolio.contact.phone}`}
                className="px-10 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-gray-800 hover:scale-105 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} {portfolio.hero.name}. Crafted with passion.</p>
        </div>
      </footer>

      {/* SVG Icons */}
      <svg style={{display:'none'}}>
        <symbol id="icon-linkedin" viewBox="0 0 24 24"><path d="M2.94 3.5A2.44 2.44 0 0 1 5.38 1h13.24A2.44 2.44 0 0 1 21.06 3.5v16.99a2.44 2.44 0 0 1-2.44 2.49H5.38a2.46 2.46 0 0 1-2.44-2.49V3.5zM7.48 19.39v-8.13H4.72v8.13h2.76zm-1.38-9.31c.91 0 1.48-.62 1.48-1.39-.01-.78-.58-1.39-1.48-1.39S4.6 7.91 4.6 8.69c0 .77.57 1.39 1.48 1.39zm11.08 9.31v-4.08c0-1.04-.38-1.74-1.31-1.74-.72 0-1.15.48-1.34.95-.07.17-.09.41-.09.65v4.23h-2.76s.04-6.87 0-8.13h2.76v1.15c.37-.58 1.02-1.41 2.47-1.41 1.8 0 3.13 1.17 3.13 3.69v4.7h-.01z"></path></symbol>
        <symbol id="icon-github" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.08-.62.08-.62 1 .07 1.53 1.04 1.53 1.04.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.07a9.44 9.44 0 0 1 5 0c1.91-1.35 2.75-1.07 2.75-1.07.56 1.42.21 2.47.1 2.73.64.72 1.03 1.65 1.03 2.77 0 3.95-2.34 4.81-4.57 5.08.36.32.68.94.68 1.89 0 1.36-.01 2.45-.01 2.78 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2"></path></symbol>
        <symbol id="icon-twitter" viewBox="0 0 24 24"><path d="M21.543 7.104c.015.211.015.423.015.634 0 6.452-4.915 13.893-13.894 13.893-2.753 0-5.313-.797-7.471-2.171.374.049.749.076 1.138.076 2.287 0 4.394-.777 6.081-2.084-2.137-.03-3.941-1.454-4.564-3.397.298.049.596.073.91.073.438 0 .877-.059 1.285-.171-2.229-.451-3.907-2.404-3.907-4.752v-.061a4.827 4.827 0 0 0 2.188.611c-1.283-.858-2.124-2.319-2.124-3.977 0-.872.235-1.69.643-2.396C5.24 7.653 9.037 9.42 13.159 9.616c-.081-.348-.121-.709-.121-1.078 0-2.614 2.126-4.739 4.74-4.739 1.363 0 2.594.576 3.454 1.506a9.43 9.43 0 0 0 2.999-1.145 4.728 4.728 0 0 1-2.079 2.616c.665-.078 1.292-.257 1.881-.515a10.17 10.17 0 0 1-2.37 2.462"></path></symbol>
      </svg>
    </div>
  )
}

// Helper component for contact details
function ContactDetail({ icon, info }: { icon: React.ReactNode, info: string | undefined }) {
  if (!info) return null;
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
      <span className="text-2xl">{icon}</span>
      <span className="font-medium text-gray-700">{info}</span>
    </div>
  );
}

export default ModernTemplate