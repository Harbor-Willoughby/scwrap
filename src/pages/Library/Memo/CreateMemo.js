import React, {Component} from 'react';
import firebase from '../../../firebase';
import * as ReactDOM from "react-dom";
import {isEmpty} from "lodash";


class CreateMemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memo_text: "",
      link: "",
    }
  }

  handleChange(e) {
    const input_text = e.target.value;
    console.log("input_text",input_text);
    const reg = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    console.log('if', reg.test(input_text));
    if (reg.test(input_text)) {
      this.setState(
        {
          memo_text: "",
          link: input_text
        }
      )
    } else {
      this.setState(
        {
          memo_text: input_text,
          link: ""
        }
      )
    }
  }

  handleClick() {
    console.log("memo_text", this.state.memo_text);
    console.log("link", this.state.link);
    console.log('trip_key', this.props);
    const trip_key = this.props.tripKey;
    if ((isEmpty(this.state.memo_text)) && (isEmpty(this.state.link))) {
      return console.log('memo or link is required');
    } else if (isEmpty(this.state.link)) {
      // memo text
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
    } else if (isEmpty(this.state.memo_text)) {
      // link_text
      /*
      todo : when link type input
       */
      

      return console.log("this is link")
    }
    return console.log('memo or link is required');
  }


  render() {
    const style = {
      resize: "None"
    };
    return (
      <div>
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
      </div>
    );
  }
}

export default CreateMemo;