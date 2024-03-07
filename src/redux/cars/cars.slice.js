import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from '../../../src/redux/cars/cars.reducer';

const initialState = {
  carsData: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(getAllCars.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.carsData = payload;
      })
      .addCase(getAllCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const carReducer = carsSlice.reducer;
