import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import matchService from './matchService'

const initialState = {
  matches: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new match
export const createMatch = createAsyncThunk(
  'matches/create',
  async (matchData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await matchService.createMatch(matchData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user matchs
export const getMatches = createAsyncThunk(
  'matches/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await matchService.getMatches(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


//update user match
export const updateMatch = createAsyncThunk(
  'matches/update',
  async (payload, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await matchService.updateMatch(payload, token)

    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }

)
// Delete user match
export const deleteMatch = createAsyncThunk(
  'matches/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await matchService.deleteMatch(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMatch.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createMatch.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.matches.push(action.payload)
      })
      .addCase(createMatch.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getMatches.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMatches.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.matches = action.payload
      })
      .addCase(getMatches.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteMatch.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteMatch.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.matches = state.matches.filter(
          (match) => match._id !== action.payload.id
        )
      })

  },
})

export const { reset } = matchSlice.actions
export default matchSlice.reducer
