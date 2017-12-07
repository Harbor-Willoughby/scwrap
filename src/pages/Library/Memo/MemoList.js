import React, {Component} from 'react';
import firebase from '../../../firebase';
import map from 'lodash/map';

class MemoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memos: undefined
    }
  }

  componentDidMount() {
    this.getMemos(this.props.tripKey);
  };

  getMemos(trip_key) {
    firebase.database().ref('/trips/' + trip_key + '/memos').on('value', snapshot => {
      const memos = [];
      console.log('value', snapshot.val());
      map(snapshot.val(), (value, memoKey) => {
        firebase.database().ref('/memos/' + memoKey).on('value', snapshot => {
          const memo = snapshot.val();
          memos.key = memoKey;
          memos.push(memo);
          this.setState({memos: memos})
          console.log('memos', memos);
        })
      });
    })
  }


  render() {
    const style = {
      color: "black"
    };
    return (
      <div style={style}>
        {this.state.memos === undefined ? (
          <div>
            데이터 로딩중
          </div>
        ) : this.state.memos.map((memo, i) => {
          if (memo.img_link) {
            return (
                <div key={i}>
                  <p>{memo.text}</p>
                  <img src={memo.img_link} alt="" height={200} width={200}/>
                </div>
            )
          } else {
            return (
                <div key={i}>
                  <p>{memo.text}</p>
                </div>
            )
          }
        })}
      </div>
    );
  }
}


export default MemoList;
