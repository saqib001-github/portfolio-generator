import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TemplateSelection from './pages/TemplateSelection'
import PortfolioPage from './pages/PortfolioPage'
import PortfolioForm from './pages/PortfoliForm'
import ProfessionalsList from './pages/ProfessionslsList'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TemplateSelection />} />
          <Route path="/form" element={<PortfolioForm />} />
          <Route path="/professionals" element={<ProfessionalsList />} />
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
