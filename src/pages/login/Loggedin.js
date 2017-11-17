import React from 'react'
import { logoutUser } from '../../actions';
import {
  connect,
} from 'react-redux';

class Loggedin extends React.Component {
  render() {
    return (
      <content id="loggedIn">
        {this.props.uid}
        {this.props.name}
        {this.props.email}
        <img src={this.props.profileImageUrl}/>
        <button className="logout" onClick={this.props.logoutUser}>로그아웃</button>
      </content>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoggedIn: !!state.auth.uid,
  uid: state.auth.uid,
  name: state.auth.name,
  email: state.auth.email,
  profileImageUrl: state.auth.profileImageUrl,
})

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Loggedin);
