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
    console.log('uid',this.props.uid );
    // firebase.database().ref('/users/' + this.props.uid + '/trips').on('value', snapshot => {
    //   const trip_key_value = snapshot.val();
    //   console.log("value", JSON.stringify(trip_key_value));
    //   const trip_key = JSON.stringify(trip_key_value).split('"')[1];
    //   console.log("key", trip_key);
    //   const new_memo = firebase.database().ref('/memos').push();
        // tid: trip_key,
        // text: this.state.memo_text,
        // uid: this.props.uid
      // const new_memo_key = new_memo.key;
      // console.log("key", new_memo_key);
    // });
    // firebase.database().ref
    // console.log("this.state", this.state.memo_text);
    // console.log('uid',this.props.uid );
    const trip_key = firebase.database().ref('/users/' + this.props.uid + '/trips').on('value');
    console.log("trip_key", trip_key);
  };

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
  uid: state.auth.uid,
});


export default connect(mapStateToProps)(CreateMemo);
