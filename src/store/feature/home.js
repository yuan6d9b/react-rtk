import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


/** 
 * extraInfo: 分发action传参
 * dispatch: 
 * getState:
 */
export const fetchMultidata = createAsyncThunk('fetch/homeMultidata', async (extraInfo, { dispatch, getState }) => {
  // extraInfo: dispatch(fetchMultidata(extraInfo))
  // console.log('1=======:', extraInfo)
  // console.log('2=======:', dispatch)
  // console.log('3=======:', getState)
  // console.log('4=======:', getState())


  const response = await fetch('http://123.207.32.32:8000/home/multidata')
  const data = await response.json()
  const result = data.data;
  return result // return的数据传递给fulfilled的payload
})

const homeSlice = createSlice({
  name: 'home', // name:用作action前缀
  initialState: {
    banners: [],
    recommends: []
  },
  // reducers: {
  //   changeBanners(state, { payload }) {
  //     state.banners = payload;
  //   },
  //   changeRecommends(state, { payload }) {
  //     state.recommends = payload;
  //   }
  // },
  extraReducers: {
    [fetchMultidata.fulfilled](state, { payload }) {
      const banners = payload.banner.list;
      const recommends = payload.recommend.list;
      state.banners = banners
      state.recommends = recommends
    }
  }
})

export const { changeBanners, changeRecommends } = homeSlice.actions
export default homeSlice.reducer