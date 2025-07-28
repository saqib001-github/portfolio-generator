import type { Portfolio } from "../../types/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

type P = { portfolio: Portfolio };
export default function ModernTemplate({ portfolio }: P) {
  return (
    <div className="bg-white font-sans">
      {/* Header Hero */}
      <header className="bg-yellow-400 px-4 py-7 flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-6">
          <img
            alt=""
            src={portfolio.hero.profileImage}
            className="w-28 h-28 rounded-full border-2 border-accent shadow"
          />
          <div>
            <h1 className="text-3xl font-bold">{portfolio.hero.name}</h1>
            <h2 className="text-lg">{portfolio.hero.title}</h2>
            <div className="text-md italic opacity-80">
              {portfolio.hero.tagline}
            </div>
          </div>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <div className="flex gap-3 mb-1">
            {portfolio.about.socials.linkedin && (
              <a
                href={portfolio.about.socials.linkedin}
                className="text-accent"
              >
                <Linkedin />
              </a>
            )}
            {portfolio.about.socials.github && (
              <a href={portfolio.about.socials.github} className="text-accent">
                <Github />
              </a>
            )}
            {portfolio.about.socials.twitter && (
              <a href={portfolio.about.socials.twitter} className="text-accent">
                <Twitter />
              </a>
            )}
          </div>
          <div className="flex gap-2 justify-end">
            <Mail className="w-4" />
            <span>{portfolio.about.email}</span>
            <Phone className="w-4" />
            <span>{portfolio.about.phone}</span>
            <MapPin className="w-4" />
            <span>{portfolio.about.location}</span>
          </div>
        </div>
      </header>

      {/* Skills */}
      <section className="py-9 px-5">
        <h2 className="text-2xl font-bold mb-4">
          My <span className="text-accent">Skills</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {portfolio.skills.map((s, i) => (
            <div
              key={i}
              className="p-4 bg-yellow-100 rounded-xl flex flex-col items-center shadow"
            >
              <svg className="w-16 h-16 mb-2" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#edf2f7"
                  strokeWidth="4"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#FF2633"
                  strokeWidth="4"
                  strokeDasharray={`${(s.percentage * 100) / 100},100`}
                  strokeDashoffset="25"
                  style={{ transition: "stroke-dasharray 1s" }}
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16"
                  fill="#222"
                >
                  {s.percentage}%
                </text>
              </svg>
              <span className="font-bold">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-6 px-5 bg-yellow-50">
        <h2 className="text-2xl font-bold mb-3">
          <span className="text-accent">My Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {portfolio.services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl bg-yellow-200 shadow p-4 border-t-2 border-accent"
            >
              <div className="font-bold mb-1">{s.title}</div>
              <div className="text-sm text-gray-700">{s.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-8 px-5">
        <h2 className="text-2xl font-bold mb-3">
          <span className="text-accent">Photo Gallery</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {portfolio.portfolio.map((p, i) => (
            <img
              key={i}
              src={p.image}
              alt={p.title}
              className="w-full h-28 object-cover rounded-lg"
              title={p.title}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-7 px-5 bg-yellow-50">
        <h2 className="text-2xl font-bold mb-3">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {portfolio.testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 text-center shadow"
            >
              <div className="italic">"{t.quote}"</div>
              <div className="text-sm font-bold mt-3">{t.name}</div>
              <div className="text-xs text-gray-600">{t.role}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Blog, Contact, Footer (add? see your wireframe screenshot structure) */}
    </div>
  );
}
