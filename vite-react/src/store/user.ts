import { isDev } from '@/utils/common'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface TUser {
  isLogin: Boolean
}

const initialState: TUser = {
  isLogin: true
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserValue: (state, action: PayloadAction<Partial<TUser>>) => {
      for (const [key, value] of Object.entries(action.payload)) {
        state[key] = value
      }
    }
  },
})

export const { setUserValue } = userSlice.actions

/**
 * 用户登录
 */
export const login = createAsyncThunk('user/login', async () => {
  if (isDev) {
    window.location.href = `/login`
    return
  }
})

export default userSlice.reducer