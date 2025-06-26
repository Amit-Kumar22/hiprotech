
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '@/app/config';
import { saveAuthToLocalStorage, clearAuthFromLocalStorage } from '@/app/utils/auth';

// Thunk to verify OTP and complete signup
export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async ({ email, otp, userData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/verify-otp`, { email, otp, userData });
      if (typeof window !== 'undefined' && window.toast) {
        window.toast(response.data.message || 'Signup complete!', 'success');
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

// Thunk to get user details
export const getUserDetail = createAsyncThunk(
  'auth/getUserDetail',
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/auth/getuserdetail`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      const msg = error.response?.data?.message || error.response?.data || error.message;
      return rejectWithValue(msg);
    }
  }
);

export const sendOtp = createAsyncThunk(
  'auth/sendOtp',
  async (formData, { rejectWithValue }) => {
    try {
      // formData should include all required fields except otp
      console.log('Sending OTP with data:', formData);
      const response = await axios.post(`${BASE_URL}/api/auth/send-otp`, formData);
      console.log('Send OTP response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Send OTP error:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      console.log('Signing up with data:', userData);
      const response = await axios.post(`${BASE_URL}/api/auth/signup`, userData);
      console.log('Signup response:', response.data);
      if (typeof window !== 'undefined' && window.toast) {
        window.toast(response.data.message || 'Signup successful!', 'success');
      }
      return response.data;
    } catch (error) {
      const msg = error.response?.data?.message || error.response?.data || error.message;
      if (typeof window !== 'undefined' && window.toast) {
        window.toast(msg, 'error');
      }
      console.error('Signup error:', msg);
      return rejectWithValue(msg);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      console.log('Logging in with credentials:', credentials);
      const response = await axios.post(`${BASE_URL}/api/auth/login`, credentials);
      console.log('Login response:', response.data);
      if (typeof window !== 'undefined' && window.toast) {
        window.toast(response.data.message || 'Login successful!', 'success');
      }
      return response.data;
    } catch (error) {
      const msg = error.response?.data?.message || error.response?.data || error.message;
      if (typeof window !== 'undefined' && window.toast) {
        window.toast(msg, 'error');
      }
      console.error('Login error:', msg);
      return rejectWithValue(msg);
    }
  }
);


export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      console.log('Forgot password for:', email);
      const response = await axios.post(`${BASE_URL}/api/auth/forgot-password`, { email });
      console.log('Forgot password response:', response.data);
      if (typeof window !== 'undefined' && window.toast) {
        window.toast(response.data.message || 'Password reset email sent!', 'success');
      }
      return response.data;
    } catch (error) {
      const msg = error.response?.data?.message || error.response?.data || error.message;
      if (typeof window !== 'undefined' && window.toast) {
        window.toast(msg, 'error');
      }
      console.error('Forgot password error:', msg);
      return rejectWithValue(msg);
    }
  }
);


export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (data, { rejectWithValue }) => {
    try {
      console.log('Resetting password with data:', data);
      const response = await axios.post(`${BASE_URL}/api/auth/reset-password`, data);
      console.log('Reset password response:', response.data);
      if (typeof window !== 'undefined' && window.toast) {
        window.toast(response.data.message || 'Password reset successful!', 'success');
      }
      return response.data;
    } catch (error) {
      const msg = error.response?.data?.message || error.response?.data || error.message;
      if (typeof window !== 'undefined' && window.toast) {
        window.toast(msg, 'error');
      }
      console.error('Reset password error:', msg);
      return rejectWithValue(msg);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    otpSent: false,
    tempUser: null, // store temp user data for OTP step
    signupSuccess: false,
    forgotSuccess: false,
    resetSuccess: false,
    // toast removed
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      clearAuthFromLocalStorage();
    },
    clearError: (state) => {
      state.error = null;
    },
    clearStatus: (state) => {
      state.otpSent = false;
      state.signupSuccess = false;
      state.forgotSuccess = false;
      state.resetSuccess = false;
    },
    // showToast and hideToast removed
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otpSent = true;
        // toast removed
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        // toast removed
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload && action.payload.message && action.payload.message.includes('OTP sent')) {
          state.otpSent = true;
          state.tempUser = action.payload.tempUser;
        } else {
          state.signupSuccess = true;
        }
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.signupSuccess = true;
        state.otpSent = false;
        state.tempUser = null;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        // toast removed
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        saveAuthToLocalStorage(action.payload.user, action.payload.token);
        // toast removed
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        // toast removed
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.forgotSuccess = true;
        // toast removed
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        // toast removed
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.resetSuccess = true;
        // toast removed
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        // toast removed
      });
    // Handle getUserDetail thunk
    builder
      .addCase(getUserDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user || action.payload;
      })
      .addCase(getUserDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { logout, clearError, clearStatus } = authSlice.actions;
export default authSlice.reducer;
