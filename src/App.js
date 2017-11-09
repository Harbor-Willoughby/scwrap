import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import {
  connect,
} from 'react-redux';
import Main from './pages/Main';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Trip from './stories/trip/trip';
import TripDetail from './stories/trip/trip-detail';
import logo from './logo.svg';
import './App.css';
import store from './store';
import firebase from './firebase';
import { loginUser, logoutUser } from './actions';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.loginUser(user);
      } 
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Welcome to Build 002</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  Main
                </Link>
              </li>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/mypage">
                  MyPage
                </Link>
              </li>
              <li>
                <Link to="/trip">
                  Trip
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/mypage" component={MyPage} />
            <Route exact path="/trip" component={Trip} /> 
            <Route path="/trip/:tripId" component={TripDetail} /> 
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser()),
}))(App);
