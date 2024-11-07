import { configureStore } from '@reduxjs/toolkit'
import { crmApi } from '../services/crmApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [crmApi.reducerPath]: crmApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(crmApi.middleware),
})
setupListeners(store.dispatch)