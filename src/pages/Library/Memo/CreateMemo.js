import React, {Component} from 'react';
import firebase from '../../../firebase';
import {connect} from "react-redux";


class CreateMemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memo_text: "",
      trip_key: ""
    }
  }

  handleChange(e) {
    console.log("memo",e.target.value);
    this.setState({memo_text: e.target.value})
  }

  handleClick() {
    console.log("this.state", this.state.memo_text);
    console.log("key", this.props.uid);
    const user_id = this.props.uid;
    const memo_id = firebase.database().ref('/memos').push().key;
    const update_data = {};
    update_data['/memos/' + memo_id] =
    update_data['/trips/' + memo_id] =
    console.log("memoid",memo_id)
    // const trip_keys = firebase.database().ref('/users/' + user_id + '/trips').once('value').then((snapshot) => {
    //   const string_keys = JSON.stringify(snapshot.val());
    //   console.log("string",string_keys);
    //   JSON.parse(string_keys, (key, value) => {
    //     if (value) {
    //       console.log("key",key);
    //       console.log("value",value);
    //     }
    //   });
    // });
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

const mapStateToProps = (state) => ({
  uid: state.auth.uid
});


export default connect(mapStateToProps)(CreateMemo);
