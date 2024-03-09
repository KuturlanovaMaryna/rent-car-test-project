import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://65e86d994bb72f0a9c4f4d30.mockapi.io',
});

export const getAllCars = createAsyncThunk(
  'cars/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(`/adverts`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const FilteredCars = createAsyncThunk(
  'get/filteredCars',
  async (data, thunkApi) => {
    const url = `https://65e86d994bb72f0a9c4f4d30.mockapi.io/adverts?filter=${data}`;
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
