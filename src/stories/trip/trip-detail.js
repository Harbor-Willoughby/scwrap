import React, {Component} from 'react';
import firebase from '../../firebase';
import map from 'lodash/map';
import { objectValue } from '../../util/objectUtill';
import {
  connect,
} from 'react-redux';
import Library from "../../pages/Library/Library";

class TripDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	trip: undefined,
      tripKey: ""
    };
  }

  componentDidMount = () => {
    const key = this.props.match.params.tripKey;
    console.log('/trips/' + key);
    firebase.database().ref('/trips/' + key).once('value').then((snapshot) => {
      this.setState({
        trip: snapshot.val(),
        tripKey: key
      });
    });
  };

  render() {
    return (
    	<div>
        <div>TripDetail Component</div>
        <h1>{ objectValue(() => this.state.trip.text, '') }</h1>
        <Library tripKey={this.state.tripKey}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  uid: state.auth.uid
})

export default connect(mapStateToProps)(TripDetail);