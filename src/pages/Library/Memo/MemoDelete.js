import React, {Component} from 'react';


class MemoDelete extends Component {
  handleClick() {
    this.props.onRemove();
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Remove
      </button>
    );
  }
}


export default MemoDelete;
