import React from 'react'
import { loginEmailUser } from '../../actions';
import {
  connect,
} from 'react-redux';


class LoginForm extends React.Component {
  submitEmailForm = (e) => {
    e.preventDefault();

    const form = document.forms["loginEmailForm"];
    const email = form.email.value;
    const password = form.password.value;

    this.props.loginEmailUser(email, password);
  };

  render() {
    return (
      <section id="loginForm">
       <form id="loginEmailForm">
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="submit" value="Login" onClick={this.submitEmailForm} />
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  loginEmailUser: (email, password) => dispatch(loginEmailUser(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
