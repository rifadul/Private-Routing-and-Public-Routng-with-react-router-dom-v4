/* eslint-disable no-unused-vars */

export const UseAuth = () => {
    const setToken = () => {
        localStorage.setItem('token', 'hello auth');
    }
    setToken()
    const auth = false
  return auth
}
