import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../features/auth/authSlice';
import UserReducer from '../features/user/userSlice';

const rootReducer = {

  auth: AuthReducer,
  user: UserReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

