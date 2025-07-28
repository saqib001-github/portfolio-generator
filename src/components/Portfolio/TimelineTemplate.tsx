import type { Portfolio } from '../../types/portfolio'

export default function TimelineTemplate({portfolio}:{portfolio:Portfolio}){
return (
<div className="bg-gray-50">
  <header className="bg-gray-900 text-yellow-300 py-8 px-4">
   <div className="max-w-3xl mx-auto text-center">
     <img src={portfolio.hero.profileImage} className="w-24 h-24 rounded-full mx-auto"/>
     <h1 className="text-3xl font-bold">{portfolio.hero.name}</h1>
     <h2 className="text-xl">{portfolio.hero.title}</h2>
     <div>{portfolio.hero.tagline}</div>
   </div>
  </header>
  <section className="py-8 px-6 relative">
    <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2 justify-center"> Skills Timeline</h2>
    <div className="relative pl-10">
      <div className="border-l-4 border-yellow-400 absolute left-7 top-0 h-full"></div>
      {portfolio.skills.map((s,i)=>(
        <div key={i} className="mb-8 flex items-center">
          <div className="mr-6 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold">{i+1}</div>
          <div>
            <div className="font-bold">{s.name}</div>
            <div className="text-xs text-gray-600">Proficiency: {s.percentage}%</div>
          </div>
        </div>
      ))}
    </div>
  </section>
  <section className="py-8 px-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Portfolio Gallery (Masonry)</h2>
    <div className="columns-2 md:columns-3 gap-4 space-y-4">
      {portfolio.portfolio.map((p,i)=>(
        <img key={i} src={p.image} alt={p.title} className="rounded-xl w-full mb-2"/>
      ))}
    </div>
  </section>
</div>
)
}
