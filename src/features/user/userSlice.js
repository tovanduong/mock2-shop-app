import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getAllProduct,
  getCate,
} from '../../api/userAPI';

const initialState = {
  status: '',
  loading: false,
  product: [],
  category: [],
};

export const fetchGetAllProduct = createAsyncThunk('users/getAllProduct', async () => {
  const response = await getAllProduct();
  return response;
});
export const fetchGetAllCategory = createAsyncThunk('users/getCate', async (payload) => {
  const response = await getCate(payload);
  return response;
});

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },

  extraReducers: {
    [fetchGetAllProduct.fulfilled]: (state, action) => {
      state.status = 'success';
      state.product = action.payload;
      state.loading = false;
    },
    [fetchGetAllCategory.fulfilled]: (state, action) => {
      state.status = 'success';
      state.category = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter, searchProduct, countIncrease, countRemove } = UserSlice.actions;

export default UserSlice.reducer;
