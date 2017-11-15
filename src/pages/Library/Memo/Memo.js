import React, {Component} from 'react';
import MemoList from "./MemoList";
import update from 'react-addons-update'
import MemoCreate from "./MemoCreate";
import MemoDelete from "./MemoDelete";
import MemoEdit from "./MemoEdit";


class Memo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memoList: [
        {memo:""}
      ],
      selectedKey: -1,
      selected: {
        memo: ""
      }
    };
  }

  createMemo(memo) {
    let newState = update(this.state, {
      memoList: {
        $push: [{"memo": memo}]
      }
    });
    this.setState(newState);
  }

  deleteMemo () {
    if(this.state.selectedKey === -1){
      console.log("memo not selected");
      return;
    }

    this.setState({
      memoList: update(
        this.state.memoList,
        {
          $splice: [[this.state.selectedKey, 1]]
        }
      ),
      selectedKey: -1
    });
  }

  editMemo(memo) {
    this.setState({
      memoList: update(
        this.state.memoList,
        {
          [this.state.selectedKey]: {
            memo: { $set: memo }
          }
        }
      ),
      selected: {
        memo: memo,
      }
    });
  }

  onSelect(key) {
    if(key === this.state.selectedKey){
      console.log("key select cancelled");
      this.setState({
        selectedKey: -1,
        selected: {
          memo: ""
        }
      });
      return;
    }

    this.setState({
      selectedKey: key,
      selected: this.state.memoList[key]
    });
    console.log(key + " is selected");
  }

  isSelected(key) {
    if(this.state.selectedKey === key){
      return true;
    }else{
      return false;
    }
  }

  render() {
    const { memoList } = this.state;
    return (
      <div>
        <MemoCreate onInsert={this.createMemo.bind(this)}
                    memo={this.state.selected}/>
        <MemoDelete onRemove={this.deleteMemo.bind(this)}/>
        {/*<MemoEdit*/}
          {/*onEdit={this.editMemo.bind(this)}*/}
          {/*isSelected={(this.state.selectedKey !=-1)}*/}
          {/*memo={this.state.selected}/>*/}
        {
          memoList.map((memo, i) => {
            return(
              <MemoList
                key={i}
                memo={memo.memo}
                memoKey={i}
                isSelected={this.isSelected.bind(this)(i)}
                onSelect={this.onSelect.bind(this)}
              />
            )
          })
        }
      </div>
    );
  }
}



export default Memo;
