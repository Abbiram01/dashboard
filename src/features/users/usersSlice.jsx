import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "./userAPI";

const initialState = {
  users: [],
  loading: false,
  error: null,
  searchQuery: "",
  minPoints: 0,
  maxPoints: 1000,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const data = await getUsers();
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setMinPoints: (state, action) => {
      state.minPoints = action.payload;
    },
    setMaxPoints: (state, action) => {
      state.maxPoints = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;  
        state.error = action.error.message; 
      });
    },
  });

export const { setSearchQuery, setMinPoints, setMaxPoints } = usersSlice.actions;

export default usersSlice.reducer;