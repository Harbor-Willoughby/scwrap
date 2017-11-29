import React, {Component} from 'react';
import firebase from '../../../firebase';
import * as ReactDOM from "react-dom";


class CreateMemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memo_text: "",
    }
  }

  handleChange(e) {
    console.log("memo",e.target.value);
    this.setState({memo_text: e.target.value})
  }

  handleClick() {
    console.log("memo_text", this.state.memo_text);
    console.log('trip_key', this.props);
    const trip_key = this.props.tripKey;
    const memo_data = {
      text: this.state.memo_text,
      trip: trip_key
    };
    firebase.database().ref('/trips/' + trip_key + '/memos').push(true).then((snapshot) => {
      const memo_id = snapshot.key;
      firebase.database().ref('/memos/' + memo_id).set(memo_data).catch((error) => {
        firebase.database().ref('/trips/' + trip_key + '/memos').remove();
        console.log('save memo error', error);
      });
    });
    ReactDOM.findDOMNode(this.refs.memo_text_input).value = '';
  }


  render() {
    const style = {
      resize: "None"
    };
    return (
      <div>
        <textarea
          ref="memo_text_input"
          name="body"
          id="memo_text"
          cols="15"
          rows="5"
          style={style}
          placeholder="Memo & Link"
          onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>+</button>
      </div>
    );
  }
}

export default CreateMemo;
