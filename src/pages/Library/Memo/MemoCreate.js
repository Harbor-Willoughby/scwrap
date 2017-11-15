import React, {Component} from 'react';
import TextArea from 'react-textarea-autosize'

class MemoCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memo: ""
    }
  }

  handleChange(e) {
    this.setState({memo: e.target.value});
  }

  handleClick() {
    if(!this.props.isSelected){
      console.log("memo not selected");
      this.props.onInsert(this.state.memo);
      this.setState({
        memo:""
      });
      return;
    }
    this.props.onEdit(this.state.memo);
    this.setState({
      memo:""
    });
  }


  render() {
    const style = {
      resizeNone : {
        resize: 'none'
      }
    };
    return (
      <div>
        <TextArea
          name="content"
          minRows={3}
          maxRows={20}
          placeholder="Memo or URL"
          value={this.state.memo}
          onChange={this.handleChange.bind(this)}
          style={style.resizeNone}/>
        <button onClick={this.handleClick.bind(this)}>+</button>
      </div>
    );
  }
}


export default MemoCreate;
