import React, {Component} from 'react';
import CreateMemo from "./CreateMemo";
import MemoList from "./MemoList";


class Memo extends Component {
  render() {
    const style = {
      resize: "None"
    };
    const { tripKey } = this.props;
    return (
      <div>
        <CreateMemo style={style} tripKey={tripKey}/>
        <MemoList tripKey={tripKey}/>
      </div>
    );
  }
}


export default Memo;
