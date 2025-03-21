import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRewards } from './rewardsAPI'; 


const initialState = {
  rewards: [],
  loading: false,
  error: null,
};


export const getRewards = createAsyncThunk('rewards/fetchRewards', async () => {
  const rewards = await fetchRewards();  
  return rewards;  
});


const rewardsSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRewards.pending, (state) => {
        state.loading = true;  
      })
      .addCase(getRewards.fulfilled, (state, action) => {
        state.loading = false;  
        state.rewards = action.payload;
      })
      .addCase(getRewards.rejected, (state, action) => {
        state.loading = false;  
        state.error = action.error.message;  
      });
  },
});

export default rewardsSlice.reducer;
