import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import careerReducer from './slices/careerSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    career: careerReducer,
  },
});

export default store;
