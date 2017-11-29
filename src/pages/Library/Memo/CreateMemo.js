import React, {Component} from 'react';
import firebase from '../../../firebase';
import * as ReactDOM from "react-dom";
import {isEmpty} from "lodash";


class CreateMemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memo_text: "",
      link_url: "",

    }
  }

  handleChange(e) {
    const input_text = e.target.value;
    const reg = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    console.log('if', reg.test(input_text));
    if (reg.test(input_text)) {
      this.setState(
        {
          memo_text: "",
          link_url: input_text
        }
      )
    } else {
      this.setState(
        {
          memo_text: input_text,
          link_url: ""
        }
      )
    }
  }

  handleClick() {
    console.log("memo_text", this.state.memo_text);
    console.log("link_url", this.state.link_url);
    console.log('trip_key', this.props);
    const trip_key = this.props.tripKey;
    if (isEmpty(this.state.memo_text)) {
      /*
      todo: when input is link...
      */
      return console.log('memo empty, todo when link url input');
    } else if (isEmpty(this.state.link_url)) {
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
    } else {
      return console.log('memo or link is required');
    }
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
