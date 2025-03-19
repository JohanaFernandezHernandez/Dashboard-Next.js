import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';

import counterReducer from '../store/counter/counterSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter : counterReducer,

    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch'];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()