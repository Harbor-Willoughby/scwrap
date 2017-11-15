import React, {Component} from 'react';


class MemoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memo: ""
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      memo: nextProps.memo.memo
    });
  }

  handleChange(e) {
    this.setState({memo: e.target.value});
  }

  handleClick() {
    if(!this.props.isSelected){
      console.log("memo not selected");
      return;
    }

    this.props.onEdit(this.state.memo);
  }

  render() {
    return (
      <div>
        <textarea
          name="content"
          cols="20"
          rows="10"
          placeholder="Memo or URL"
          value={this.state.memo}
          onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleClick.bind(this)}>edit</button>
      </div>
    );
  }
}


export default MemoEdit;
