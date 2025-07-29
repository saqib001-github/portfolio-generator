import axios from "axios";
import type { Portfolio } from "../types/portfolio";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const portfolioAPI = {
  // Create a new portfolio
  create: async (portfolio: Omit<Portfolio, "id" | "createdAt">) => {
    const response = await api.post("/portfolios", portfolio);
    return response.data.data;
  },

  // Get all portfolios
  getAll: async () => {
    const response = await api.get("/portfolios");
    return response.data.data;
  },

  // Get portfolio by ID
  getById: async (id: string) => {
    const response = await api.get(`/portfolios/${id}`);
    return response.data.data;
  },

  // Update portfolio
  update: async (id: string, portfolio: Partial<Portfolio>) => {
    const response = await api.put(`/portfolios/${id}`, portfolio);
    return response.data.data;
  },

  // Delete portfolio
  delete: async (id: string) => {
    const response = await api.delete(`/portfolios/${id}`);
    return response.data.data;
  },
};
