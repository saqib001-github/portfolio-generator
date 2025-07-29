import type { Portfolio } from "../../types/portfolio";
import {
  Mail, Phone, MapPin, Linkedin, Github, Twitter, ExternalLink, Star
} from "lucide-react";

type P = { portfolio: Portfolio };

export default function ModernTemplate({ portfolio }: P) {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Left: Avatar + Info */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 text-center lg:text-left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 to-indigo-300 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <img
                  alt={portfolio.hero.name}
                  src={portfolio.hero.profileImage}
                  className="relative w-40 h-40 rounded-full object-cover bg-white/10 backdrop-blur-sm border-4 border-white/20 shadow-2xl"
                  draggable={false}
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text">
                    {portfolio.hero.name}
                  </h1>
                  <h2 className="text-2xl font-semibold text-indigo-100 mb-3">{portfolio.hero.title}</h2>
                  <p className="text-lg text-white/80 max-w-md leading-relaxed">{portfolio.hero.tagline}</p>
                </div>
                
                {/* Contact Info */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/90">
                  <ContactItem icon={<Mail className="w-5 h-5" />} text={portfolio.about.email} />
                  <ContactItem icon={<Phone className="w-5 h-5" />} text={portfolio.about.phone} />
                  <ContactItem icon={<MapPin className="w-5 h-5" />} text={portfolio.about.location} />
                </div>
              </div>
            </div>
            
            {/* Right: Social Links */}
            <div className="flex gap-4">
              {portfolio.about.socials.linkedin && (
                <SocialLink href={portfolio.about.socials.linkedin} icon={<Linkedin className="w-6 h-6" />} />
              )}
              {portfolio.about.socials.github && (
                <SocialLink href={portfolio.about.socials.github} icon={<Github className="w-6 h-6" />} />
              )}
              {portfolio.about.socials.twitter && (
                <SocialLink href={portfolio.about.socials.twitter} icon={<Twitter className="w-6 h-6" />} />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Skills */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Skills & Expertise"
            subtitle="Technologies I work with"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.skills.map((skill, i) => (
              <SkillCard key={i} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Services"
            subtitle="What I can do for you"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Featured Work"
            subtitle="A showcase of my recent projects"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.portfolio.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Client Testimonials"
            subtitle="What people say about my work"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// -----------------------------
// Components

function ContactItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  if (!text) return null;
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
    >
      <div className="text-white group-hover:text-white transition-colors">
        {icon}
      </div>
    </a>
  );
}

function SectionHeading({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
    </div>
  );
}

function SkillCard({ skill, index }: { skill: { name: string; percentage: number }, index: number }) {
  const pct = Math.max(0, Math.min(100, skill.percentage));
  const R = 45;
  const C = 2 * Math.PI * R;
  const progress = (pct / 100) * C;
  
  const gradients = [
    'from-indigo-500 to-purple-500',
    'from-purple-500 to-pink-500',
    'from-pink-500 to-rose-500',
    'from-rose-500 to-orange-500',
    'from-orange-500 to-yellow-500',
    'from-yellow-500 to-green-500',
  ];
  
  const gradient = gradients[index % gradients.length];
  
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
      
      <div className="relative flex flex-col items-center text-center">
        <div className="relative mb-6">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50" cy="50" r={R}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="8"
            />
            <circle
              cx="50" cy="50" r={R}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeDasharray={C}
              strokeDashoffset={C - progress}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-slate-700">{pct}%</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2">{skill.name}</h3>
        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${pct}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: { title: string; description: string }, index: number }) {
  const icons = ['💼', '🎨', '⚡', '🚀', '💡', '🔧'];
  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-indigo-500',
    'from-pink-500 to-rose-500',
    'from-orange-500 to-red-500',
    'from-green-500 to-emerald-500',
    'from-yellow-500 to-orange-500',
  ];
  
  const gradient = gradients[index % gradients.length];
  const icon = icons[index % icons.length];
  
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden">
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`}></div>
      
      <div className="relative">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: { title: string; image: string } }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-black font-bold text-xl mb-2">{project.title}</h3>
          <div className="flex items-center text-white/80">
            <ExternalLink className="w-4 h-4 mr-2" />
            <span className="text-sm">View Project</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: { quote: string; name: string; role: string } }) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
      <div className="absolute top-6 left-6 text-6xl text-indigo-100 font-serif">"</div>
      
      <div className="relative pt-8">
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        
        <p className="text-slate-700 leading-relaxed mb-6 italic">
          {testimonial.quote}
        </p>
        
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-slate-900">{testimonial.name}</div>
            <div className="text-sm text-slate-500">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}