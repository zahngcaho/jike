// 和用户相关的状态管理
import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: ''
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    }
  }
})

// async action
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 异步请求数据
    await request.post('/authorizations', loginForm).then(res => {
      // 保存 token 到 store
      dispatch(setToken(res.data.token))
    }).catch(err => {
      console.log(err)
    })
  }
}

const { setToken } = userStore.actions

export { fetchLogin, setToken }
export default userStore.reducer