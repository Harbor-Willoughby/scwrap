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
    firebase.database().ref('/trips').orderByChild('createdAt').on('value', snapshot => {
      // 현재 trips date를 가져오는 부분
      console.log(snapshot.val());

      this.setState({
        trips: map(snapshot.val(), (trip, key) => ({ id: key, ...trip })),
      })
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    firebase.database().ref('/trips').push({
      title: text,
      posted_by: {
        name: '윌로비',
        photoUrl: 'https://image.com',
      },
      startDate: '2017-10-31',
      endDate: '2017-11-03',
      thumbnailImageUrl: 'https://image.com',
      createdAt: new Date().toString()
    })
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
          {isEmpty(this.state.trips) ? (
              <div>
                데이터 로딩중
              </div>
            ) : this.state.trips.map((trip) => {
              console.log(trip);
                return (
                  <div key={trip.id}>
                    <Link to={`/trip/${trip.id}`}><h1>{trip.title}</h1></Link>
                    <p>게시자: {trip.posted_by.name}</p>
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

export default Trip;