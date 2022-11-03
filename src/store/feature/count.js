import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: 'count',
  initialState: {
    count: 0
  },
  reducers: {
    addNum(state, { payload }) {
      state.count = state.count + payload;
    },
    subNum(state, { payload }) {
      state.count = state.count - payload;
    }
  }
})
export const { addNum, subNum } = countSlice.actions
export default countSlice.reducer

