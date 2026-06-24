// 封装token方法 save get remove
const TOKEN = 'TOKEN'

export function setToken(token) {
  localStorage.setItem(TOKEN, token)
}

export function getToken() {
  return localStorage.getItem(TOKEN)
}

export function removeToken() {
  localStorage.removeItem(TOKEN)
}
