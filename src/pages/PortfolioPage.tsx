import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import ModernTemplate from '../components/Portfolio/ModernTemplate'
import TimelineTemplate from '../components/Portfolio/TimelineTemplate'

export default function PortfolioPage() {
  const { id } = useParams()
  const nav = useNavigate()
  const item = useSelector((st:RootState)=>st.portfolio.portfolios.find(p=>p.id===id))
  if (!item) { nav("/professionals"); return null }
  return item.template === 'modern' ? <ModernTemplate portfolio={item}/> : <TimelineTemplate portfolio={item} />
}
