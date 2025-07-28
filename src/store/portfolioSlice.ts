import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Portfolio, TemplateType } from '../types/portfolio'

interface State {
  portfolios: Portfolio[]
  selectedTemplate: TemplateType | null
  currentPortfolio: Portfolio | null
  filterBy: string
}

const initialState: State = {
  portfolios: [],
  selectedTemplate: null,
  currentPortfolio: null,
  filterBy: "",
}

const slice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setSelectedTemplate: (st, a: PayloadAction<TemplateType>) => { st.selectedTemplate = a.payload },
    addPortfolio:        (st, a: PayloadAction<Portfolio>)    => { st.portfolios.push(a.payload) },
    updatePortfolio:     (st, a: PayloadAction<Portfolio>)    => {
      const i = st.portfolios.findIndex(x => x.id === a.payload.id)
      if (i !== -1) st.portfolios[i] = a.payload
    },
    setCurrentPortfolio: (st, a: PayloadAction<Portfolio|null>) => { st.currentPortfolio = a.payload },
    setFilterBy:         (st, a: PayloadAction<string>)       => { st.filterBy = a.payload }
  }
})

export const { setSelectedTemplate, addPortfolio, updatePortfolio, setCurrentPortfolio, setFilterBy } = slice.actions;
export default slice.reducer;
