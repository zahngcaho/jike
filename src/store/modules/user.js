// 和用户相关的状态管理
import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'
import { removeToken, getToken, setToken as _setToken } from '@/utils/token'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      _setToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
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

const fetchUserInfo = () => {
  return async (dispatch) => {
    await request.get('/user/profile').then(res => {
      dispatch(setUserInfo(res.data))
    })
  }
}

const { setToken, setUserInfo } = userStore.actions

export { fetchLogin, setToken, fetchUserInfo }
export default userStore.reducer