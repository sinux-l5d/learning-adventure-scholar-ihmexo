import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../components/exercice/dataSlice'

export default configureStore({
  reducer: {
    data: dataReducer,
  },
})