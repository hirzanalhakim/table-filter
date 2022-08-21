import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
}

export const fetchData = createAsyncThunk(
  'randomUser/fetchData',
  async (query) => {
    let url = `https://randomuser.me/api/?page=${query?.page}&results=${query?.pageSize}&seed=${query?.seed}`
    if (query?.gender) {
      url += `&gender=${query?.gender}`
    }
    if (query?.sortOrder) {
      url += `&sortOrder=${query?.sortOrder}`
    }
    if (query?.sortBy) {
      url += `&sortBy=${query?.sortBy}`
    }
    const response = await axios.get(url)
    return response?.data
  }
)

export const randomUser = createSlice({
  name: 'randomUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload?.results
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = randomUser.actions

export default randomUser.reducer
