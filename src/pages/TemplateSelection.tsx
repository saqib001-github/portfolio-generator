import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedTemplate } from "../store/portfolioSlice";
import type { TemplateType } from "../types/portfolio";
import { Eye, Edit2 } from "lucide-react";

const templates = [
  {
    type: "modern" as TemplateType,
    title: "Modern Template",
    image: "https://placehold.co/400x210/6366f1/ffffff?text=Modern+Purple",
    desc: "Sleek contemporary design with gradient backgrounds, glass morphism effects, and smooth animations",
    features: [
      "Gradient Hero Section",
      "Animated Skill Cards",
      "Interactive Portfolio Grid",
      "Modern Testimonials",
      "Glass Morphism UI",
    ],
  },
  {
    type: "timeline" as TemplateType,
    title: "Timeline Template",
    image: "https://placehold.co/400x210/1e293b/ffffff?text=Timeline+Dark",
    desc: "Professional timeline layout with alternating skills journey and masonry portfolio gallery",
    features: [
      "Dark Gradient Hero",
      "Interactive Timeline",
      "Skill Progress Bars",
      "Masonry Gallery",
      "Professional Badges",
    ],
  },
  {
    type: "classic" as TemplateType,
    title: "Classic Template",
    image: "https://placehold.co/400x210/fff200/202022?text=Classic+Yellow",
    desc: "Traditional clean design with yellow accents and straightforward professional layout",
    features: [
      "Yellow Hero Section",
      "Circular Skill Progress",
      "Grid Portfolio Layout",
      "Testimonials Cards",
      "Contact Information",
    ],
  },
];

export default function TemplateSelection() {
  const [selected, setSelected] = useState<TemplateType | null>(null);
  const nav = useNavigate();
  const dispatch = useDispatch();

  function handleSelect(t: TemplateType) {
    setSelected(t);
    dispatch(setSelectedTemplate(t));
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-yellow-50 to-yellow-100 px-2 py-10">
      <div className="w-full max-w-6xl">
        {/* increase max width for row */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 text-center tracking-tight">
          Choose Your <span className="text-accent">Template</span>
        </h1>

        <p className="mb-12 text-gray-600 text-center text-base">
          Select a professional template that fits your style
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-stretch justify-center w-full">
          {/* larger gap */}
          {templates.map((t) => (
            <div
              key={t.type}
              className={`
        bg-white group transition 
        shadow-xl hover:shadow-2xl 
        rounded-2xl w-full md:w-[440px] xl:w-[510px] overflow-hidden
        ring-4 ${
          selected === t.type ? "ring-accent scale-105" : "ring-transparent"
        } 
        hover:ring-yellow-400 hover:scale-105
        flex flex-col min-h-[520px] /* Optional: fix card height a bit */
       `}
            >
              <img
                src={t.image}
                alt={t.title}
                className="w-full h-56 object-cover" // h-56 = 224px, slightly taller
                draggable={false}
                style={{ background: "#fff" }}
              />

              <div className="px-8 py-6 flex-1 flex flex-col">
                {/* more padding */}
                <h2 className="font-extrabold text-2xl text-gray-800 mb-3">
                  {t.title}
                </h2>

                <p className="text-gray-600 mb-4 leading-snug text-base">
                  {t.desc}
                </p>

                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="inline-block w-2.5 h-2.5 bg-accent rounded-full shadow ring-2 ring-yellow-300 mr-1" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 md:flex-row">
                  <button
                    className={`
flex-1 flex items-center gap-2 justify-center font-semibold rounded-full py-2.5
           bg-accent text-white shadow-md hover:bg-yellow-600 transition
           ring-1 ring-yellow-400 text-base
          `}
                    onClick={() => {
                      handleSelect(t.type);
                      setTimeout(() => nav("/form"), 180);
                    }}
                  >
                    <Edit2 size={18} />
                    Customize
                  </button>

                  <button
                    className="flex-1 flex items-center gap-2 justify-center py-2.5 bg-yellow-100 text-gray-800 rounded-full font-semibold shadow-sm hover:bg-yellow-200 border border-yellow-200 transition text-base"
                    onClick={() => alert("Preview coming soon!")}
                  >
                    <Eye size={18} />
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Utilities for accent color */}
      <style>{`
    .text-accent { color:#FFA500 !important }
    .bg-accent { background:#FFA500 !important }
    .ring-accent { --tw-ring-color: #FFA500!important; }
   `}</style>
    </div>
  );
}
