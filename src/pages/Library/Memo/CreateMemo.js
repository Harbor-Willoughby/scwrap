import React, {Component} from 'react';
import firebase from '../../../firebase';


class CreateMemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memo_text: ""
    }
  }

  handleChange(e) {
    console.log("memo",e.target.value);
    this.setState({memo_text: e.target.value})
  }

  handleClick() {
    console.log("this.state", this.state.memo_text);
    return (
      firebase.database().ref('/memos').set({
        content: this.state.memo_text
      })
    )
  }

  render() {
    const style = {
      resize: "None"
    };
    return (
      <div>
        <textarea name="body" id="" cols="15" rows="5" style={style} placeholder="Memo & Link" onChange={this.handleChange.bind(this)}></textarea>
        <button onClick={this.handleClick.bind(this)}>+</button>
      </div>
    );
  }
}


export default CreateMemo;
