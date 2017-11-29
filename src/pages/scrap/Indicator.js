import React from 'react'
import {
  connect,
} from 'react-redux';
import _ from 'lodash';

export default class Indicator extends React.Component {
  constructor(props) {
    super(props);
  }

  onSelect = (page) => {
    alert(page);
  };

  button(page, isSelected) {
    let pageText = isSelected ? "page" + page + " (selected)" : "page" + page;

    return (<button key={page}><img src="" alt={pageText} onClick={()=>this.onSelect(page)} /></button>);
  }

  render() {
    return (
      <div id="indicator">
        {_.times(this.props.page, i => this.button(i + 1, (i + 1) == this.props.current))}
      </div>
    );
  }
}