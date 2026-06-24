import userReducer from '@/store/modules/user'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    user: userReducer
  }
})