import React from 'react'
import firebase from '../firebase';
import { loginGoogleUser, loginFacebookUser, logoutUser } from '../actions';
import {
  connect,
} from 'react-redux';


class Login extends React.Component {
  render() {
    return (
      <div>
        Login
        <h1>
          {this.props.uid}
          {this.props.name}
          {this.props.email}
        </h1>
        <div>
          <img src={this.props.profileImageUrl}/>
        </div>
        <button
          onClick={this.props.loginGoogleUser}
        >
          구글로 로그인하기
        </button>
        <button
          onClick={this.props.loginFacebookUser}
        >
          페이스북으로 로그인하기
        </button>
        <button
          onClick={this.props.logoutUser}
        >
          로그아웃
        </button>
        <form id="step1form">
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <input type="submit" value="Login" onClick={this.props.loginEmailUser} />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoggedIn: !!state.auth.name,
  uid: state.auth.uid,
  name: state.auth.name,
  email: state.auth.email,
  profileImageUrl: state.auth.profileImageUrl,
})

const mapDispatchToProps = (dispatch) => ({
  loginGoogleUser: () => dispatch(loginGoogleUser()),
  loginFacebookUser: () => dispatch(loginFacebookUser()),
  logoutUser: () => dispatch(logoutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
