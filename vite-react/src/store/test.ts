import { sleep } from '@/utils/common'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface TTest{
  value: number
  name: string
}

const initialState: TTest = {
  value: 0,
  name: 'vv'
}

export const testSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTestValue: (state, action: PayloadAction<Partial<TTest>>) => {
      for (const [key, value] of Object.entries(action.payload)) {
        state[key] = value
      }
    }
  },
})

export const { setTestValue } = testSlice.actions

export const testAsync = createAsyncThunk('testAsync', async (_, { dispatch }) => {
  await sleep(2000)
  dispatch(setTestValue({ value: 3 }))
})


export const selectTestName = (state: TTest) => state.name
export default testSlice.reducer