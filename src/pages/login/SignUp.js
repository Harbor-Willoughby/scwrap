import React from 'react'
import { createEmailUser } from '../../actions';
import {
  connect,
} from 'react-redux';

class SignUp extends React.Component {
  submitEmailForm = (e) => {
    e.preventDefault();

    const form = document.forms["signUpEmailForm"];
    const email = form.email.value;
    const password = form.password.value;

    this.props.createEmailUser(email, password);
  };

  render() {
    return (
      <content id="signUp">
        <form id="signUpEmailForm">
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input type="submit" value="Sign up" onClick={this.submitEmailForm} />
        </form>
      </content>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  createEmailUser: (email, password) => dispatch(createEmailUser(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
