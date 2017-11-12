import React, {Component} from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebase';
import map from 'lodash/map';
import { objectValue } from '../../util/objectUtill';
import ReactDOM from 'react-dom';
import isEmpty from 'lodash/isEmpty';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import {
  connect,
} from 'react-redux';

const propTypes = {};
const defaultProps = {};

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	trip: undefined,
    };
  }
  componentDidMount = () => {
    this.requestTrip(this.props.uid);
  };

  componentWillReceiveProps = (next) => {
    this.requestTrip(next.uid);
  }

  requestTrip = (uid) => {
    const key = '/users/' + uid + "/trips";
    firebase.database().ref(key).orderByChild('timestamp').on('value', snapshot => {
      // 현재 trips date를 가져오는 부분
      const trips = [];
      map(snapshot.val(), (value, tripKey) => {
        firebase.database().ref('/trips/' + tripKey).on('value', snapshot => {
          const trip = snapshot.val();
          trip.key = tripKey;
          trips.push(trip);

          this.setState({
            trips: trips
          });
        });
      });
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    firebase.database().ref('/users/' + this.props.uid + "/trips").push(true).then(ref => {
      const key = ref.key;
      
      firebase.database().ref('/trips/' + key).set({
        text: text,
        uid: this.props.uid,
        timestamp: Date.now()
      }).catch(err => {
        firebase.database().ref('/users/' + this.props.uid + "/trips/" + key).remove();
        console.log(err);
      });
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render() {
    return (
      <div>
        Main

          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >

            <input

              type="text"

              ref="textInput"

              placeholder="Type to add new tasks"

            />

          </form>
        <div>
          {this.state.trips === undefined ? (
              <div>
                데이터 로딩중
              </div>
            ) : this.state.trips.map((trip) => {
                return (
                  <div key={trip.key}>
                    <Link to={`/trip/${trip.key}`}><h1>{trip.text}</h1></Link>
                    <p>time: {trip.timestamp}</p>
                  </div>
                )
              })
          }
        </div>
      </div>
    );
  }
}

Trip.propTypes = propTypes;
Trip.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  uid: state.auth.uid
})

export default connect(mapStateToProps)(Trip);