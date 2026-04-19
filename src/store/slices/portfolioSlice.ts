import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPortfolioData } from "../../services/firebase";
import type { PortfolioData } from "../../types/portfolio";

interface InitialState {
  data: PortfolioData | null;
  error: string | null;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: InitialState = {
  data: null,
  error: null,
  status: "idle",
};

export const loadPortfolio = createAsyncThunk(
  "fetch/portfolio",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchPortfolioData();
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  },
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadPortfolio.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadPortfolio.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(loadPortfolio.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      }),
});

export default portfolioSlice.reducer;
