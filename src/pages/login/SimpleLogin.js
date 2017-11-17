import React from 'react'
import { loginGoogleUser, loginFacebookUser } from '../../actions';
import {
  connect,
} from 'react-redux';

class SimpleLogin extends React.Component {
  render() {
    return (
        <content id="simpleLogin">
          <h3><span className="scwrap">Scwrap</span> 을 간편하게 이용하세요!</h3>
          <button className="login-facebook" onClick={this.props.loginFacebookUser}><span className="facebook">Facebook</span> 계정으로 로그인</button>
          <button className="login-google" onClick={this.props.loginGoogleUser}><span className="google">Google</span> 계정으로 로그인</button>
        </content>
    );
  }
}
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  loginGoogleUser: () => dispatch(loginGoogleUser()),
  loginFacebookUser: () => dispatch(loginFacebookUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleLogin);
