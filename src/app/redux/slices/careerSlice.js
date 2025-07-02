import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { BASE_URL } from '@/app/config';

// Thunk to fetch all jobs
export const fetchAllJobs = createAsyncThunk(
  'career/fetchAllJobs',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/jobs`, { params });
      return response.data;
    } catch (error) {
      const msg = error.response?.data?.message || error.response?.data || error.message;
      return rejectWithValue(msg);
    }
  }
);

// Thunk to apply for a job
export const applyJob = createAsyncThunk(
  'career/applyJob',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/job-applications`, formData);
      if (typeof window !== 'undefined' && window.toast) {
        window.toast(response.data.message || 'Application submitted!', 'success');
      }
      return response.data;
    } catch (error) {
      const msg = error.response?.data?.message || error.response?.data || error.message;
      if (typeof window !== 'undefined' && window.toast) {
        window.toast(msg, 'error');
      }
      return rejectWithValue(msg);
    }
  }
);

const careerSlice = createSlice({
  name: 'career',
  initialState: {
    jobs: [],
    loading: false,
    error: null,
    applicationSuccess: false,
  },
  reducers: {
    clearCareerError: (state) => {
      state.error = null;
    },
    clearApplicationStatus: (state) => {
      state.applicationSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllJobs.fulfilled, (state, action) => {
        state.loading = false;
        // Map _id to id for each job
        state.jobs = Array.isArray(action.payload)
          ? action.payload.map(job => ({ ...job, id: job._id }))
          : [];
      })
      .addCase(fetchAllJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(applyJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(applyJob.fulfilled, (state, action) => {
        state.loading = false;
        state.applicationSuccess = true;
      })
      .addCase(applyJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { clearCareerError, clearApplicationStatus } = careerSlice.actions;
export default careerSlice.reducer;
