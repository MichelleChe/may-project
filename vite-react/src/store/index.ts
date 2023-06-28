import { configureStore } from '@reduxjs/toolkit'

import testSlice from './test.ts'
import testSlice2 from './test2.ts'

const store = configureStore({
  reducer: {
    test: testSlice,
    test2: testSlice2
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store