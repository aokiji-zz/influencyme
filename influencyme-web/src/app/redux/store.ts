import { configureStore } from '@reduxjs/toolkit'
import { calculatorReducer } from './slices/articles.slice'
import { authReducer } from './slices/auth.slice'
import { generalReducer } from './slices/general.slice'
import { userReducer } from './slices/user.slice'
import { campaignsApi } from '../services/campaings.service'

export const store = configureStore({
  reducer: {
    authReducer,
    userReducer,
    articlesReducer: calculatorReducer,
    generalReducer,

    [campaignsApi.reducerPath]: campaignsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat([campaignsApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
