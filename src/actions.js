export const loginGoogleUser = () => ({
  type: 'LOGIN_GOOGLE_USER_REQUEST',
})

export const loginFacebookUser = () => ({
  type: 'LOGIN_FACEBOOK_USER_REQUEST',
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

