export const loginGoogleUser = () => ({
  type: 'LOGIN_GOOGLE_USER_REQUEST',
})

export const loginFacebookUser = () => ({
  type: 'LOGIN_FACEBOOK_USER_REQUEST',
})

export const loginEmailUser = (email, password) => ({
  type: 'LOGIN_EMAIL_USER_REQUEST',
  payload: {
    email, password
  }
})

export const checkAuthStateChanged = (callback) => ({
  type: 'CHECK_AUTH_STATE_CHANGED',
  payload: callback,
})

// 실제적인 로그인이 일어났을 때 실행되는 action creator
// App.js 내의 auth.onAuthStateChanged 가 실행시켜줌
export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  payload: user,
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
})
