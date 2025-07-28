import type { Portfolio } from '../../types/portfolio';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Calendar, TrendingUp, Award, Eye } from 'lucide-react';

export default function TimelineTemplate({ portfolio }: { portfolio: Portfolio }) {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 min-h-screen font-sans">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-20 px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Profile Image with Advanced Styling */}
          <div className="relative inline-block mb-8 group">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            <div className="relative">
              <img
                src={portfolio.hero.profileImage}
                className="relative w-36 h-36 rounded-full border-4 border-white/20 shadow-2xl object-cover bg-white/10 backdrop-blur-sm"
                alt={portfolio.hero.name}
                draggable={false}
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-3 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          {/* Hero Text */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-purple-100">
              {portfolio.hero.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-200">
              {portfolio.hero.title}
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {portfolio.hero.tagline}
            </p>
            
            {/* Contact Info Pills */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <ContactPill icon={<Mail className="w-4 h-4" />} text={portfolio.about.email} />
              <ContactPill icon={<Phone className="w-4 h-4" />} text={portfolio.about.phone} />
              <ContactPill icon={<MapPin className="w-4 h-4" />} text={portfolio.about.location} />
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
              {portfolio.about.socials.linkedin && (
                <SocialButton href={portfolio.about.socials.linkedin} icon={<Linkedin className="w-5 h-5" />} />
              )}
              {portfolio.about.socials.github && (
                <SocialButton href={portfolio.about.socials.github} icon={<Github className="w-5 h-5" />} />
              )}
              {portfolio.about.socials.twitter && (
                <SocialButton href={portfolio.about.socials.twitter} icon={<Twitter className="w-5 h-5" />} />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Skills Timeline */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-indigo-100 mb-6">
              <Calendar className="w-6 h-6 text-indigo-600" />
              <span className="text-lg font-semibold text-slate-700">Skills Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Skills Timeline</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A chronological journey through my technical expertise and growth
            </p>
          </div>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200"></div>
            
            {portfolio.skills.map((skill, index) => (
              <TimelineItem key={index} skill={skill} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Masonry Gallery */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full px-6 py-3 border border-indigo-200 mb-6">
              <Eye className="w-6 h-6 text-indigo-600" />
              <span className="text-lg font-semibold text-slate-700">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Gallery</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A curated collection of my best projects and creative work
            </p>
          </div>
          
          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {portfolio.portfolio.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Components
function ContactPill({ icon, text }: { icon: React.ReactNode, text: string }) {
  if (!text) return null;
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300">
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function SocialButton({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
    >
      <div className="text-white group-hover:text-white transition-colors">
        {icon}
      </div>
    </a>
  );
}

function TimelineItem({ skill, index, isLeft }: { 
  skill: { name: string; percentage: number }, 
  index: number, 
  isLeft: boolean 
}) {
  const colors = [
    { bg: 'from-indigo-500 to-blue-500', border: 'border-indigo-200', accent: 'bg-indigo-500' },
    { bg: 'from-purple-500 to-indigo-500', border: 'border-purple-200', accent: 'bg-purple-500' },
    { bg: 'from-pink-500 to-purple-500', border: 'border-pink-200', accent: 'bg-pink-500' },
    { bg: 'from-rose-500 to-pink-500', border: 'border-rose-200', accent: 'bg-rose-500' },
    { bg: 'from-orange-500 to-rose-500', border: 'border-orange-200', accent: 'bg-orange-500' },
    { bg: 'from-yellow-500 to-orange-500', border: 'border-yellow-200', accent: 'bg-yellow-500' },
  ];
  
  const color = colors[index % colors.length];
  
  return (
    <div className={`relative flex items-center mb-12 group ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline Node */}
      <div className="absolute left-8 md:left-1/2 md:-ml-6 z-10">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color.bg} border-4 border-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
      </div>
      
      {/* Content Card */}
      <div className={`ml-20 md:ml-0 ${isLeft ? 'md:mr-8 md:ml-0' : 'md:ml-8'} md:w-5/12 relative`}>
        <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border ${color.border} group-hover:-translate-y-1`}>
          {/* Arrow */}
          <div className={`absolute top-6 ${isLeft ? 'md:-right-3 right-full mr-2' : 'md:-left-3 right-full mr-2'} w-0 h-0 border-8 ${isLeft ? 'md:border-l-transparent md:border-r-white md:border-t-transparent md:border-b-transparent border-r-transparent border-l-white border-t-transparent border-b-transparent' : 'md:border-r-transparent md:border-l-white md:border-t-transparent md:border-b-transparent border-r-transparent border-l-white border-t-transparent border-b-transparent'}`}></div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">{skill.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${color.bg}`}>
                {skill.percentage}%
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Proficiency Level</span>
                <span className="font-semibold">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${color.bg} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
            
            {/* Skill Level Badge */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${color.accent}`}></div>
              <span className="text-sm text-slate-600 font-medium">
                {skill.percentage >= 90 ? 'Expert' : 
                 skill.percentage >= 75 ? 'Advanced' : 
                 skill.percentage >= 50 ? 'Intermediate' : 
                 'Learning'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { 
  project: { title: string; image: string }, 
  index: number 
}) {
  const heights = ['h-48', 'h-64', 'h-56', 'h-72', 'h-60', 'h-52'];
  const height = heights[index % heights.length];
  
  return (
    <div className="mb-6 break-inside-avoid group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full ${height} object-cover group-hover:scale-110 transition-transform duration-700`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {project.title}
            </h3>
          </div>
        </div>
        
        {project.title && (
          <div className="p-4">
            <h4 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
              {project.title}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
}