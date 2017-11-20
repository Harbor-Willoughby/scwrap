import React, {Component} from 'react';
import CreateMemo from "./CreateMemo";
import MemoList from "./MemoList";


class Memo extends Component {
  render() {
    const style = {
      resize: "None"
    };

    return (
      <div>
        <CreateMemo style={style}/>
        <MemoList />
      </div>
    );
  }
}


export default Memo;
