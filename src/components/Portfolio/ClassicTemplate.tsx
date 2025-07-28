import type { Portfolio } from '../../types/portfolio'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

interface Props {
  portfolio: Portfolio
}

const ClassicTemplate = ({ portfolio }: Props) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              {portfolio.hero.profileImage && (
                <img
                  src={portfolio.hero.profileImage}
                  alt={portfolio.hero.name}
                  className="w-48 h-48 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
                />
              )}
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {portfolio.hero.name}
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-gray-300">
                {portfolio.hero.title}
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                {portfolio.hero.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gray-800">
              About
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {portfolio.about.bio}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-3 text-gray-700" />
                        <span className="text-sm">{portfolio.about.email}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-3 text-gray-700" />
                        <span className="text-sm">{portfolio.about.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-3 text-gray-700" />
                        <span className="text-sm">{portfolio.about.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Expertise</h3>
                <div className="space-y-2">
                  {portfolio.skills.map(skill => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gray-800">
            Services
          </h2>
          <div className="max-w-4xl mx-auto">
            {portfolio.services.map((service, index) => (
              <div key={index} className="mb-8 pb-8 border-b border-gray-200 last:border-b-0">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gray-800">
            Portfolio
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.portfolio.map((project, index) => (
                <div key={index} className="group">
                  {project.image && (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <button className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-medium">
                    View Details
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gray-800">
            Client Testimonials
          </h2>
          <div className="max-w-4xl mx-auto">
            {portfolio.testimonials.map((testimonial, index) => (
              <div key={index} className="mb-8 pb-8 border-b border-gray-200 last:border-b-0">
                <blockquote className="text-lg text-gray-600 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Contact</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {portfolio.contact.message}
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href={`mailto:${portfolio.contact.email}`}
              className="bg-white text-gray-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Email Me
            </a>
            <a
              href={`tel:${portfolio.contact.phone}`}
              className="border border-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-gray-800 transition-colors"
            >
              Call Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2024 {portfolio.hero.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default ClassicTemplate

