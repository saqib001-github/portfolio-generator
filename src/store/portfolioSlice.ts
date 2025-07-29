import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Portfolio, TemplateType } from "../types/portfolio";
import { portfolioAPI } from "../services/api";

interface State {
  portfolios: Portfolio[];
  selectedTemplate: TemplateType | null;
  currentPortfolio: Portfolio | null;
  filterBy: string;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  portfolios: [],
  selectedTemplate: null,
  currentPortfolio: null,
  filterBy: "",
  loading: false,
  error: null,
};

export const fetchPortfolios = createAsyncThunk(
  "portfolio/fetchAll",
  async () => {
    const portfolios = await portfolioAPI.getAll();
    return portfolios;
  }
);

export const createPortfolio = createAsyncThunk(
  "portfolio/create",
  async (portfolio: Omit<Portfolio, "id" | "createdAt">) => {
    const response = await portfolioAPI.create(portfolio);
    return response;
  }
);

export const updatePortfolioById = createAsyncThunk(
  "portfolio/update",
  async ({ id, portfolio }: { id: string; portfolio: Partial<Portfolio> }) => {
    const response = await portfolioAPI.update(id, portfolio);
    return response;
  }
);

export const deletePortfolioById = createAsyncThunk(
  "portfolio/delete",
  async (id: string) => {
    await portfolioAPI.delete(id);
    return id;
  }
);

const slice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setSelectedTemplate: (st, a: PayloadAction<TemplateType>) => {
      st.selectedTemplate = a.payload;
    },
    setCurrentPortfolio: (st, a: PayloadAction<Portfolio | null>) => {
      st.currentPortfolio = a.payload;
    },
    setFilterBy: (st, a: PayloadAction<string>) => {
      st.filterBy = a.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolios.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPortfolios.fulfilled, (state, action) => {
        state.loading = false;
        state.portfolios = action.payload;
      })
      .addCase(fetchPortfolios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch portfolios";
      })
      .addCase(createPortfolio.fulfilled, (state, action) => {
        state.portfolios.push(action.payload);
      })
      .addCase(updatePortfolioById.fulfilled, (state, action) => {
        const index = state.portfolios.findIndex(
          (p) => p._id === action.payload.id
        );
        if (index !== -1) {
          state.portfolios[index] = action.payload;
        }
      })
      .addCase(deletePortfolioById.fulfilled, (state, action) => {
        state.portfolios = state.portfolios.filter(
          (p) => p._id !== action.payload
        );
      });
  },
});

export const { setSelectedTemplate, setCurrentPortfolio, setFilterBy } =
  slice.actions;
export default slice.reducer;
