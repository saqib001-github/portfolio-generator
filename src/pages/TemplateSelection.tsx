import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelectedTemplate } from '../store/portfolioSlice'
import type { TemplateType } from '../types/portfolio'
import { Eye, Edit2 } from 'lucide-react'

const templates = [
  {
    type: 'modern' as TemplateType,
    title: "Template 1",
    image: "https://placehold.co/400x210/fff200/202022?text=Modern+Yellow",
    desc: "Modern and clean design with yellow hero section and professional layout",
    features: [ "Yellow Hero Section", "Testimonials Carousel", "Grid Portfolio", "Contact Form" ]
  },
  {
    type: 'timeline' as TemplateType,
    title: "Template 2",
    image: "https://placehold.co/400x210/202022/fff200?text=Split+Timeline",
    desc: "Split-screen layout with timeline skills and masonry portfolio grid",
    features: [ "Split Hero Layout", "Timeline Skills", "Masonry Portfolio", "Blog Section" ]
  }
]

export default function TemplateSelection() {
  const [selected, setSelected] = useState<TemplateType | null>(null)
  const nav = useNavigate()
  const dispatch = useDispatch()

  function handleSelect(t: TemplateType) {
    setSelected(t)
    dispatch(setSelectedTemplate(t))
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 px-2 py-8 font-sans">
      <h1 className="text-3xl font-bold mb-1">Choose Your <span className="text-accent">Template</span></h1>
      <p className="mb-8 text-gray-600">Select a professional template that best represents your style</p>
      <div className="flex flex-col md:flex-row gap-8">
        {templates.map(t => (
          <div
            key={t.type}
            className={`bg-white shadow-xl rounded-2xl w-96 overflow-hidden transition ring-4 ${selected===t.type?"ring-accent":"ring-transparent"} hover:ring-yellow-400`}
          >
            <img src={t.image} className="w-full h-40 object-cover" />
            <div className="px-6 py-3">
              <h2 className="font-bold text-lg mb-1">{t.title}</h2>
              <p className="text-sm mb-3">{t.desc}</p>
              <ul className="text-xs text-gray-700 mb-2">
                {t.features.map(f => <li key={f} className="mb-1 flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 bg-accent rounded-full" />{f}</li>)}
              </ul>
              <div className="flex gap-2">
                <button
                  className="flex-1 bg-accent text-white rounded-full py-2 flex items-center gap-2 justify-center hover:bg-red-600"
                  onClick={() => { handleSelect(t.type); setTimeout(()=>nav("/form"),200) }}
                >
                  <Edit2 size={16}/>Customize This Template
                </button>
                <button className="flex-1 bg-yellow-100 text-gray-900 rounded-full py-2 flex items-center gap-2 justify-center hover:bg-yellow-200">
                  <Eye size={16}/>Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
