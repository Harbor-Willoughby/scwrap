import React from 'react'
import {
  connect,
} from 'react-redux';

export default class Day extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id="day">
        <h2 className="">DAY {this.props.tripDay}</h2>
        <p className="">
            <span className="year">{this.props.year}</span>
            <span className="dot">.</span>
            <span className="month">{this.props.month}</span>
            <span className="dot">.</span>
            <span className="day">{this.props.day}</span>
        </p>
        <button className="addButton"><img src="" alt="ADD" className="addIcon" /></button>
      </div>
    );
  }
}