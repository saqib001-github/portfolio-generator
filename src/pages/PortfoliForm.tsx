import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../store";
import { addPortfolio } from "../store/portfolioSlice";
import { v4 as uuidv4 } from "uuid";
import type {
  Portfolio,
  Skill,
  Service,
  Project,
  Testimonial,
} from "../types/portfolio";
import { useNavigate } from "react-router-dom";

const initSection = {
  hero: {
    name: "John Doe",
    title: "Full Stack Developer",
    tagline: "Building beautiful and functional web experiences",
    profileImage: "https://avatars.githubusercontent.com/u/12345678?v=4",
  },
  about: {
    bio: "I'm a passionate Full Stack Developer with over 5 years of experience in building web applications. Specialized in React, Node.js, and modern web technologies.",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  },
  skills: [
    { name: "React", percentage: 90 },
    { name: "JavaScript", percentage: 95 },
    { name: "TypeScript", percentage: 85 },
    { name: "Node.js", percentage: 85 },
    { name: "HTML/CSS", percentage: 90 },
  ],
  services: [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using React and modern JavaScript.",
    },
    {
      title: "Backend Development",
      description:
        "Creating robust server-side applications with Node.js and Express.",
    },
    {
      title: "Full Stack Development",
      description:
        "End-to-end application development from database design to user interface implementation.",
    },
  ],
  portfolio: [
    {
      title: "E-commerce Platform",
      image: "https://example.com/ecommerce.jpg",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB.",
    },
    {
      title: "Portfolio Generator",
      image: "https://example.com/portfolio.jpg",
      description:
        "A dynamic portfolio generation tool using React and TypeScript.",
    },
    {
      title: "Task Management App",
      image: "https://example.com/taskapp.jpg",
      description:
        "A collaborative task management application with real-time updates.",
    },
  ],
  testimonials: [
    {
      name: "Jane Smith",
      role: "Product Manager at Tech Co",
      quote:
        "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    },
  ],
  blog: {
    title: "Modern Web Development Practices",
    summary:
      "Sharing insights about modern web development, best practices, and emerging technologies in the JavaScript ecosystem.",
  },
  contact: {
    message:
      "I'm always open to discussing new projects and opportunities. Let's connect!",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
  },
};

const steps = [
  "Hero",
  "About",
  "Skills",
  "Services",
  "Portfolio",
  "Testimonials",
  "Blog",
  "Contact",
];

export default function PortfolioForm() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const template = useSelector(
    (st: RootState) => st.portfolio.selectedTemplate
  );
  const [current, setCurrent] = useState(0);

  const [form, setForm] = useState<Portfolio>({
    id: uuidv4(),
    template: template!,
    createdAt: new Date().toISOString(),
    ...initSection,
  });

  const handleArr = <T,>(
    field: keyof Portfolio,
    idx: number,
    key: keyof T,
    v: any
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: Array.isArray(prev[field])
        ? (prev[field] as any[]).map((item: any, i: number) =>
            i === idx ? { ...item, [key]: v } : item
          )
        : prev[field],
    }));
  };

  const handleHero = (k: string, v: string) =>
    setForm((f) => ({ ...f, hero: { ...f.hero, [k]: v } }));

  const handleAbout = (k: string, v: any) =>
    k === "socials"
      ? setForm((f) => ({
          ...f,
          about: { ...f.about, socials: { ...f.about.socials, ...v } },
        }))
      : setForm((f) => ({ ...f, about: { ...f.about, [k]: v } }));

  const handleBlog = (k: string, v: any) =>
    setForm((f: any) => ({
      ...f,
      blog: {
        ...f.blog,
        [k]: v ?? "",
        title: k === "title" ? v ?? "" : f.blog.title ?? "",
        summary: k === "summary" ? v ?? "" : f.blog.summary ?? "",
      },
    }));

  const handleContact = (k: string, v: any) =>
    setForm((f) => ({ ...f, contact: { ...f.contact, [k]: v } }));

  function handleSubmit() {
    dispatch(addPortfolio(form));
    nav("/professionals");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-100 to-yellow-50 py-8 px-2">
      <div className="flex gap-8 w-full max-w-4xl">
        {/* Steps Sidebar */}
        <aside className="hidden md:flex flex-col justify-start items-start w-48">
          {steps.map((s, i) => (
            <div
              key={s}
              className={`flex items-center mb-4 group font-semibold transition-all ${
                i === current
                  ? "text-accent scale-105 font-extrabold"
                  : "text-gray-400"
              }`}
            >
              <span
                className={`mr-3 flex items-center justify-center rounded-full border-2 w-8 h-8 text-base font-bold transition-all ${
                  i === current
                    ? "bg-accent text-white border-accent"
                    : "bg-white border-gray-200"
                }`}
              >
                {i + 1}
              </span>
              <span>{s}</span>
            </div>
          ))}
        </aside>

        {/* Main Form Section */}
        <div className="flex-1">
          <div className="w-full bg-white rounded-2xl shadow-2xl p-6 md:p-10 relative">
            <div className="flex md:hidden gap-1 overflow-x-auto mb-6 scrollbar-hide">
              {steps.map((s, i) => (
                <span
                  key={s}
                  className={`px-3 py-1 text-xs rounded-full font-bold whitespace-nowrap ${
                    i === current
                      ? "bg-accent text-white"
                      : "bg-yellow-100 text-gray-800"
                  } mr-1`}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* SECTION: Hero */}
            {current === 0 && (
              <SectionCard title="Hero Section">
                <FormField
                  label="Full Name"
                  value={form.hero.name}
                  onChange={(v) => handleHero("name", v)}
                />
                <FormField
                  label="Title"
                  value={form.hero.title}
                  onChange={(v) => handleHero("title", v)}
                />
                <FormField
                  label="Tagline"
                  value={form.hero.tagline}
                  onChange={(v) => handleHero("tagline", v)}
                />
                <FormField
                  label="Profile Image URL"
                  value={form.hero.profileImage}
                  onChange={(v) => handleHero("profileImage", v)}
                  type="url"
                />
              </SectionCard>
            )}

            {/* SECTION: About */}
            {current === 1 && (
              <SectionCard title="About Me">
                <FormField
                  label="Bio"
                  value={form.about.bio}
                  onChange={(v) => handleAbout("bio", v)}
                  type="textarea"
                />
                <FormField
                  label="Email"
                  value={form.about.email}
                  onChange={(v) => handleAbout("email", v)}
                  type="email"
                />
                <FormField
                  label="Phone"
                  value={form.about.phone}
                  onChange={(v) => handleAbout("phone", v)}
                />
                <FormField
                  label="Location"
                  value={form.about.location}
                  onChange={(v) => handleAbout("location", v)}
                />
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    label="LinkedIn"
                    value={form.about.socials.linkedin || ""}
                    onChange={(v) => handleAbout("socials", { linkedin: v })}
                  />
                  <FormField
                    label="Github"
                    value={form.about.socials.github || ""}
                    onChange={(v) => handleAbout("socials", { github: v })}
                  />
                </div>
              </SectionCard>
            )}

            {/* SECTION: Skills */}
            {current === 2 && (
              <SectionCard title="Skills">
                <span className="mb-2 text-xs text-gray-400 block">
                  Use percentage values.
                </span>
                {form.skills.map((s, i) => (
                  <div key={i} className="flex gap-3 mb-2 items-center">
                    <FormField
                      label={i === 0 ? "Skill" : ""}
                      value={s.name}
                      onChange={(v) => handleArr<Skill>("skills", i, "name", v)}
                      containerClass="flex-1"
                    />
                    <FormField
                      label={i === 0 ? "%" : ""}
                      value={s.percentage}
                      onChange={(v) =>
                        handleArr<Skill>("skills", i, "percentage", Number(v))
                      }
                      type="number"
                      min={1}
                      max={100}
                      containerClass="w-28"
                    />
                  </div>
                ))}
                <button
                  className="bg-accent text-white px-3 py-1 rounded mt-2"
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      skills: [...f.skills, { name: "", percentage: 80 }],
                    }))
                  }
                  type="button"
                >
                  + Add Skill
                </button>
              </SectionCard>
            )}

            {/* SECTION: Services */}
            {current === 3 && (
              <SectionCard title="Services">
                {form.services.map((s, i) => (
                  <div
                    key={i}
                    className="mb-3 rounded-lg border border-gray-100 p-4 bg-gray-50"
                  >
                    <FormField
                      label={i === 0 ? "Service Title" : ""}
                      value={s.title}
                      onChange={(v) =>
                        handleArr<Service>("services", i, "title", v)
                      }
                    />
                    <FormField
                      label={i === 0 ? "Description" : ""}
                      value={s.description}
                      onChange={(v) =>
                        handleArr<Service>("services", i, "description", v)
                      }
                      type="textarea"
                    />
                  </div>
                ))}
              </SectionCard>
            )}

            {/* SECTION: Portfolio */}
            {current === 4 && (
              <SectionCard title="Portfolio Projects">
                {form.portfolio.map((p, i) => (
                  <div
                    key={i}
                    className="mb-3 rounded-lg border border-gray-100 p-4 bg-gray-50"
                  >
                    <FormField
                      label={i === 0 ? "Project Title" : ""}
                      value={p.title}
                      onChange={(v) =>
                        handleArr<Project>("portfolio", i, "title", v)
                      }
                    />
                    <FormField
                      label={i === 0 ? "Image URL" : ""}
                      value={p.image}
                      onChange={(v) =>
                        handleArr<Project>("portfolio", i, "image", v)
                      }
                      type="url"
                    />
                    <FormField
                      label={i === 0 ? "Description" : ""}
                      value={p.description}
                      onChange={(v) =>
                        handleArr<Project>("portfolio", i, "description", v)
                      }
                      type="textarea"
                    />
                  </div>
                ))}
              </SectionCard>
            )}

            {/* SECTION: Testimonials */}
            {current === 5 && (
              <SectionCard title="Testimonials">
                {form.testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="mb-3 rounded-lg border border-gray-100 p-4 bg-gray-50"
                  >
                    <FormField
                      label={i === 0 ? "Name" : ""}
                      value={t.name}
                      onChange={(v) =>
                        handleArr<Testimonial>("testimonials", i, "name", v)
                      }
                    />
                    <FormField
                      label={i === 0 ? "Role" : ""}
                      value={t.role}
                      onChange={(v) =>
                        handleArr<Testimonial>("testimonials", i, "role", v)
                      }
                    />
                    <FormField
                      label={i === 0 ? "Quote" : ""}
                      value={t.quote}
                      onChange={(v) =>
                        handleArr<Testimonial>("testimonials", i, "quote", v)
                      }
                      type="textarea"
                    />
                  </div>
                ))}
                <button
                  className="bg-accent text-white px-3 py-1 rounded mt-2"
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      testimonials: [
                        ...f.testimonials,
                        { name: "", role: "", quote: "" },
                      ],
                    }))
                  }
                  type="button"
                >
                  + Add Testimonial
                </button>
              </SectionCard>
            )}

            {/* SECTION: Blog */}
            {current === 6 && (
              <SectionCard title="Blog (optional)">
                <FormField
                  label="Title"
                  value={form?.blog?.title}
                  onChange={(v) => handleBlog("title", v)}
                />
                <FormField
                  label="Summary"
                  value={form?.blog?.summary}
                  onChange={(v) => handleBlog("summary", v)}
                  type="textarea"
                />
              </SectionCard>
            )}

            {/* SECTION: Contact */}
            {current === 7 && (
              <SectionCard title="Contact">
                <FormField
                  label="Message"
                  value={form.contact.message}
                  onChange={(v) => handleContact("message", v)}
                  type="textarea"
                />
                <FormField
                  label="Email"
                  value={form.contact.email}
                  onChange={(v) => handleContact("email", v)}
                  type="email"
                />
                <FormField
                  label="Phone"
                  value={form.contact.phone}
                  onChange={(v) => handleContact("phone", v)}
                />
              </SectionCard>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between sticky bottom-0 bg-white py-4 -mx-6 px-6 border-t border-gray-100">
              <button
                className={`px-5 py-2 rounded font-semibold shadow-sm transition-colors ${
                  current === 0
                    ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-yellow-200 text-gray-900"
                }`}
                disabled={current === 0}
                onClick={() => setCurrent((c) => c - 1)}
                type="button"
              >
                Previous
              </button>
              {current < steps.length - 1 ? (
                <button
                  className="bg-accent hover:bg-yellow-600 text-white font-semibold px-8 py-2 rounded shadow-sm transition-all"
                  onClick={() => setCurrent((c) => c + 1)}
                  type="button"
                >
                  Next
                </button>
              ) : (
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-2 rounded shadow-sm transition-all"
                  onClick={handleSubmit}
                  type="button"
                >
                  Submit Portfolio
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Custom styles for accent color */}
      <style>{`
        .bg-accent { background: #FFA500 !important; }
        .text-accent { color: #FFA500 !important; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

// --- Helper component for section wrapping ---
function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-3">
      <h2 className="font-extrabold text-2xl mb-4 text-gray-900">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

// --- Helper for consistent fields with labels ---
function FormField({
  label,
  value,
  onChange,
  type = "text",
  containerClass = "",
  min,
  max,
}: {
  label?: string;
  value: any;
  onChange: (value: string) => void;
  type?: string;
  containerClass?: string;
  min?: number;
  max?: number;
}) {
  return (
    <div className={`flex flex-col ${containerClass}`}>
      {label && (
        <label className="mb-1 text-sm text-gray-700 font-medium">
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent bg-white text-gray-900 placeholder-gray-400"
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent bg-white text-gray-900 placeholder-gray-400"
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...(min !== undefined ? { min } : {})}
          {...(max !== undefined ? { max } : {})}
        />
      )}
    </div>
  );
}
