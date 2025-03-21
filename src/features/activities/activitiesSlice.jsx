import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchActivities } from './activityAPI';  


const initialState = {
  activities: [],
  loading: false,
  error: null,
};


export const getActivities = createAsyncThunk('activities/fetchActivities', async () => {
  const activities = await fetchActivities();  
  return activities;  
});


const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActivities.pending, (state) => {
        state.loading = true;  
      })
      .addCase(getActivities.fulfilled, (state, action) => {
        state.loading = false;  
        state.activities = action.payload;  
      })
      .addCase(getActivities.rejected, (state, action) => {
        state.loading = false;  
        state.error = action.error.message;  
      });
  },
});

export default activitiesSlice.reducer;
