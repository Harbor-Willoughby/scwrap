import React from 'react'
import {
  connect,
} from 'react-redux';
import _ from 'lodash';
import Box from './Box';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.data)
  }
  
  render() {
    return (
      <section id="grid">
        {_.map(this.props.data, (value, key) => <Box key={key} data={value} />)}
      </section>
    );
  }
}