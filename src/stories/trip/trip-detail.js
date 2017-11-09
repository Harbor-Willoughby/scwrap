import React, {Component} from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebase';
import map from 'lodash/map';
import { objectValue } from '../../util/objectUtill';

const propTypes = {};
const defaultProps = {};

class TripDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	trip: undefined,
    };
  }

  componentDidMount = () => {
  	var id = this.props.match.params.tripId;
  	console.log('id : ' + id);
    firebase.database().ref('/trips/' + id).once('value').then((snapshot) => {
    	this.setState({
    		trip: snapshot.val()
    	});
	});
  }

  render() {
    return (
    	<div>
        	<div>TripDetail Component</div>
        	<h1>{ objectValue(() => this.state.trip.title, '') }</h1>
        </div>
    );
  }
}

TripDetail.propTypes = propTypes;
TripDetail.defaultProps = defaultProps;

export default TripDetail;