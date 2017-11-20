import React from 'react'
import {
  connect,
} from 'react-redux';
import SimpleLogin from './SimpleLogin';
import LoginForm from './LoginForm';
import Loggedin from './Loggedin';
import SignUp from './SignUp';
import Finish from './Finish';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreateEmailUser: false,
    };
  }

  showSignUpForm = (e) => {
    this.setState({isCreateEmailUser: true});
  };
  
  render() {
    return (
      <div id="login" className="hero is-fullheight">
      <div className="hero-body">
        <div className="container login-box">
          <div className="columns">
            <div className="column login-form">
              <div className="hero-body">
                <div>
                  <SimpleLogin />
                  <LoginForm />
                    { this.state.isCreateEmailUser && this.props.isLoggedIn ? <Finish /> : null }
                  <Loggedin />
                </div>
              </div>
            </div>
            <div className="column login-message hero is-three-fifths">
              <div className="hero-body">
                <div className="container">
                  <h2><span className="hello">안녕하세요<span class="scwrap-exclamination">!</span></span></h2>
                  <h2><span className="nicetomeetyou">처음 뵙겠습니다<span class="period">.</span></span></h2>
                  <p><span class="scwrap-icon scwrap-icon-scwrap"></span> 의 회원이 되어주세요<span class="scwrap-exclamination">!</span></p>
                  { this.state.isCreateEmailUser ? 
                  <SignUp onComplete={this.showFinishEmailUser} />
                  : <button className="signup" onClick={this.showSignUpForm}>Sign up</button> 
                   }
                 </div>
               </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.auth.uid,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
