import { configureStore } from "@reduxjs/toolkit";

import countReducer from '../store/feature/count'
import homeReducer from '../store/feature/home'

const store = configureStore({
  reducer: {
    count: countReducer,
    home: homeReducer
  }
}
)

export default store