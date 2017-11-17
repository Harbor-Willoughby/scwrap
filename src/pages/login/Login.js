import React from 'react'
import { loginGoogleUser, loginFacebookUser, loginEmailUser, logoutUser } from '../../actions';
import {
  connect,
} from 'react-redux';


class Login extends React.Component {
  submitEmailForm = (e) => {
    e.preventDefault();

    const form = document.forms["loginEmailForm"];
    const email = form.email.value;
    const password = form.password.value;

    this.props.loginEmailUser(email, password);
  };

  render() {
    return (
      <div id="login">
        <header>
          <h2><span className="hello">안녕하세요!</span> <span className="nicetomeetyou">처음 뵙겠습니다.</span></h2>
          <p><span className="scwrap">Scwrap</span> 의 회원이 되어주세요!</p>
          <button className="signup">Sign up</button>
        </header>
        <content>
          <h3><span className="scwrap">Scwrap</span> 을 간편하게 이용하세요!</h3>
          <button className="login-facebook" onClick={this.props.loginFacebookUser}> 페이스북으로 로그인하기</button>
          <button className="login-google" onClick={this.props.loginGoogleUser}>구글로 로그인하기</button>
          <form id="loginEmailForm">
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input type="submit" value="Login" onClick={this.submitEmailForm} />
          </form>
        </content>
        <content className="test">
          {this.props.uid}
          {this.props.name}
          {this.props.email}
          <img src={this.props.profileImageUrl}/>
          <button className="logout" onClick={this.props.logoutUser}>로그아웃</button>
        </content>
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
  loginEmailUser: (email, password) => dispatch(loginEmailUser(email, password)),
  logoutUser: () => dispatch(logoutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
