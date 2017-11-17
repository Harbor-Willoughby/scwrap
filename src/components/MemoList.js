import React, {Component} from 'react';
import MemoContents from "./MemoContents";
import MemoWrite from "./MemoWrite";


class MemoList extends Component {
  render() {
    const mapToComponents = data => {
      return data.map((memo, i) => {
        return (<MemoWrite
          data={memo}
          key={memo.id}
        />);
      });
    };

    return (
      <div>
        {mapToComponents(this.props.data)}
      </div>
    );
  }
}
MemoList.defaultProps = {
  data: [],
};

export default MemoList;
