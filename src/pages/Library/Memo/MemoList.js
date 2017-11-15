import React, {Component} from 'react';
import TextArea from 'react-textarea-autosize'
import {isEmpty} from "lodash";



class MemoList extends Component {

  handleClick() {
    this.props.onSelect(this.props.memoKey);
  }


  render() {
    const { memo, isSelected } = this.props;

    // 수정할때 선택됐다는걸 알게하기위해 스타일 적용
    const style = {
      resizeNone: {
        resize: 'none'
      }
    };

    return (
      isEmpty(memo) ?
        <div></div> :
          <textarea
            style={style.resizeNone}
            onClick={this.handleClick.bind(this)}
          >
          {memo}
        </textarea>
    );
  }
}


export default MemoList;
