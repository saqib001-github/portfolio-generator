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
  hero: { name: "", title: "", tagline: "", profileImage: "" },
  about: {
    bio: "",
    email: "",
    phone: "",
    location: "",
    socials: { linkedin: "", github: "", twitter: "" },
  },
  skills: [{ name: "", percentage: 90 }],
  services: [
    { title: "", description: "" },
    { title: "", description: "" },
    { title: "", description: "" },
  ],
  portfolio: [
    { title: "", image: "", description: "" },
    { title: "", image: "", description: "" },
    { title: "", image: "", description: "" },
  ],
  testimonials: [{ name: "", role: "", quote: "" }],
  blog: { title: "", summary: "" },
  contact: { message: "", email: "", phone: "" },
};

export default function PortfolioForm() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const template = useSelector(
    (st: RootState) => st.portfolio.selectedTemplate
  );
  const [current, setCurrent] = useState(0);
  const sections = [
    "Hero",
    "About",
    "Skills",
    "Services",
    "Portfolio",
    "Testimonials",
    "Blog",
    "Contact",
  ];

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
    setForm((f:any) => ({
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

  // Render one section at a time
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-8">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-xl p-8">
        <div className="flex gap-1 mb-6">
          {sections.map((s, i) => (
            <span
              key={s}
              className={`px-3 py-1 text-xs rounded-full font-bold ${
                i === current
                  ? "bg-accent text-white"
                  : "bg-yellow-100 text-gray-800"
              } mr-1`}
            >
              {s}
            </span>
          ))}
        </div>
        {current === 0 && (
          <>
            <h2 className="font-bold mb-2">Hero Section</h2>
            <input
              className="input"
              placeholder="Full Name"
              value={form.hero.name}
              onChange={(e) => handleHero("name", e.target.value)}
            />
            <br />
            <input
              className="input"
              placeholder="Title"
              value={form.hero.title}
              onChange={(e) => handleHero("title", e.target.value)}
            />
            <br />
            <input
              className="input"
              placeholder="Tagline"
              value={form.hero.tagline}
              onChange={(e) => handleHero("tagline", e.target.value)}
            />
            <br />
            <input
              className="input"
              placeholder="Image URL"
              value={form.hero.profileImage}
              onChange={(e) => handleHero("profileImage", e.target.value)}
            />
          </>
        )}
        {current === 1 && (
          <>
            <h2 className="font-bold mb-2">About Me</h2>
            <textarea
              className="input"
              placeholder="Bio"
              value={form.about.bio}
              onChange={(e) => handleAbout("bio", e.target.value)}
            />
            <input
              className="input"
              placeholder="Email"
              value={form.about.email}
              onChange={(e) => handleAbout("email", e.target.value)}
            />
            <input
              className="input"
              placeholder="Phone"
              value={form.about.phone}
              onChange={(e) => handleAbout("phone", e.target.value)}
            />
            <input
              className="input"
              placeholder="Location"
              value={form.about.location}
              onChange={(e) => handleAbout("location", e.target.value)}
            />
            <input
              className="input"
              placeholder="LinkedIn"
              value={form.about.socials.linkedin || ""}
              onChange={(e) =>
                handleAbout("socials", { linkedin: e.target.value })
              }
            />
            <input
              className="input"
              placeholder="Github"
              value={form.about.socials.github || ""}
              onChange={(e) =>
                handleAbout("socials", { github: e.target.value })
              }
            />
          </>
        )}
        {current === 2 && (
          <>
            <h2 className="font-bold mb-2">Skills (use % like in UI)</h2>
            {form.skills.map((s, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input
                  className="input"
                  placeholder="Skill"
                  value={s.name}
                  onChange={(e) =>
                    handleArr<Skill>("skills", i, "name", e.target.value)
                  }
                />
                <input
                  type="number"
                  className="input w-20"
                  placeholder="%"
                  value={s.percentage}
                  onChange={(e) =>
                    handleArr<Skill>(
                      "skills",
                      i,
                      "percentage",
                      e.target.valueAsNumber || 0
                    )
                  }
                />
              </div>
            ))}
            <button
              className="bg-accent text-white px-3 py-1 rounded"
              onClick={() =>
                setForm((f) => ({
                  ...f,
                  skills: [...f.skills, { name: "", percentage: 80 }],
                }))
              }
            >
              + Add Skill
            </button>
          </>
        )}
        {current === 3 && (
          <>
            <h2 className="font-bold mb-2">Services</h2>
            {form.services.map((s, i) => (
              <div key={i} className="mb-2">
                <input
                  className="input"
                  placeholder="Title"
                  value={s.title}
                  onChange={(e) =>
                    handleArr<Service>("services", i, "title", e.target.value)
                  }
                />
                <br />
                <textarea
                  className="input"
                  placeholder="Description"
                  value={s.description}
                  onChange={(e) =>
                    handleArr<Service>(
                      "services",
                      i,
                      "description",
                      e.target.value
                    )
                  }
                />
              </div>
            ))}
          </>
        )}
        {current === 4 && (
          <>
            <h2 className="font-bold mb-2">Portfolio Projects</h2>
            {form.portfolio.map((p, i) => (
              <div key={i} className="mb-2">
                <input
                  className="input"
                  placeholder="Title"
                  value={p.title}
                  onChange={(e) =>
                    handleArr<Project>("portfolio", i, "title", e.target.value)
                  }
                />
                <br />
                <input
                  className="input"
                  placeholder="Image URL"
                  value={p.image}
                  onChange={(e) =>
                    handleArr<Project>("portfolio", i, "image", e.target.value)
                  }
                />
                <br />
                <textarea
                  className="input"
                  placeholder="Description"
                  value={p.description}
                  onChange={(e) =>
                    handleArr<Project>(
                      "portfolio",
                      i,
                      "description",
                      e.target.value
                    )
                  }
                />
              </div>
            ))}
          </>
        )}
        {current === 5 && (
          <>
            <h2 className="font-bold mb-2">Testimonials</h2>
            {form.testimonials.map((t, i) => (
              <div key={i} className="mb-2">
                <input
                  className="input"
                  placeholder="Name"
                  value={t.name}
                  onChange={(e) =>
                    handleArr<Testimonial>(
                      "testimonials",
                      i,
                      "name",
                      e.target.value
                    )
                  }
                />
                <br />
                <input
                  className="input"
                  placeholder="Role"
                  value={t.role}
                  onChange={(e) =>
                    handleArr<Testimonial>(
                      "testimonials",
                      i,
                      "role",
                      e.target.value
                    )
                  }
                />
                <br />
                <textarea
                  className="input"
                  placeholder="Quote"
                  value={t.quote}
                  onChange={(e) =>
                    handleArr<Testimonial>(
                      "testimonials",
                      i,
                      "quote",
                      e.target.value
                    )
                  }
                />
              </div>
            ))}
            <button
              className="bg-accent text-white px-3 py-1 rounded"
              onClick={() =>
                setForm((f) => ({
                  ...f,
                  testimonials: [
                    ...f.testimonials,
                    { name: "", role: "", quote: "" },
                  ],
                }))
              }
            >
              + Add Testimonial
            </button>
          </>
        )}
        {current === 6 && (
          <>
            <h2 className="font-bold mb-2">Blog (optional)</h2>
            <input
              className="input"
              placeholder="Title"
              value={form?.blog?.title}
              onChange={(e) => handleBlog("title", e.target.value)}
            />
            <textarea
              className="input"
              placeholder="Summary"
              value={form?.blog?.summary}
              onChange={(e) => handleBlog("summary", e.target.value)}
            />
          </>
        )}
        {current === 7 && (
          <>
            <h2 className="font-bold mb-2">Contact</h2>
            <textarea
              className="input"
              placeholder="Message"
              value={form.contact.message}
              onChange={(e) => handleContact("message", e.target.value)}
            />
            <input
              className="input"
              placeholder="Email"
              value={form.contact.email}
              onChange={(e) => handleContact("email", e.target.value)}
            />
            <input
              className="input"
              placeholder="Phone"
              value={form.contact.phone}
              onChange={(e) => handleContact("phone", e.target.value)}
            />
          </>
        )}

        <div className="flex justify-between mt-6">
          <button
            className="bg-gray-200 px-4 py-2 rounded"
            disabled={current === 0}
            onClick={() => setCurrent((c) => c - 1)}
          >
            Previous
          </button>
          {current < 7 ? (
            <button
              className="bg-accent text-white px-6 py-2 rounded"
              onClick={() => setCurrent((c) => c + 1)}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-yellow-500 text-black font-bold px-6 py-2 rounded"
              onClick={handleSubmit}
            >
              Submit Portfolio
            </button>
          )}
        </div>
      </div>
      <style>{`.input{ width:100%; margin-bottom:0.5rem; padding:0.5rem; border-radius:0.5rem; border:1px solid #ececec; }`}</style>
    </div>
  );
}
