import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = process.env.REACT_APP_API_KEY;

export const fetchitems = createAsyncThunk(
    'items/fetchitems',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${api}/products`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );



  export const fetchSingleItem = createAsyncThunk(
    'items/fetchSingleItem',
    async (itemId, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${api}/product/getproduct/${itemId}`);
        console.log(response.data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );



  export const fetchCategory = createAsyncThunk(
    'items/fetchCategory',
    async (itemId, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${api}/products/categories`);
        console.log(response.data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const fetchByCategory = createAsyncThunk(
    'items/fetchByCategory',
    async (category, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${api}/products/category/${category}`);
        console.log(response.data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );



  