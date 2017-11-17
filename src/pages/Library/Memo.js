import React, {Component} from 'react';
import MemoWrite from "../../components/MemoWrite";
import {connect} from "react-redux";
import {memoPostRequest} from "../../actions/memo";
import MemoList from "../../components/MemoList";


class Memo extends Component {

  handlePost(contents) {
    return this.props.memoPostRequest(contents).then(
      () => {
        if(this.props.postStatus.status === "SUCCESS") {
          console.log("success", 2000)
        } else {
          switch(this.props.postStatus.error) {
            case 1:
              console.log("You are not logged in");
              break;
            case 2:
              console.log("Please write something");
              break;
            default:
              console.log("Something Broke");
              break;
          }
        }
      }
    );
  }

  render() {
    const write = (
      <MemoWrite onPost={this.handlePost.bind(this)}/>
    );
    const mockData = [
      {
        "id": "578b958ec1da760909c263f4",
        "contents": "Testing",
        "is_edited": false,
        "date": {
          "edited": "2016-07-17T14:26:22.428Z",
          "created": "2016-07-17T14:26:22.428Z"
        }
      },
      {
        "id": "578b957ec1da760909c263f3",
        "contents": "Data",
        "is_edited": false,
        "date": {
          "edited": "2016-07-17T14:26:06.999Z",
          "created": "2016-07-17T14:26:06.999Z"
        }
      },
      {
        "id": "578b957cc1da760909c263f2",
        "contents": "Mock",
        "is_edited": false,
        "date": {
          "edited": "2016-07-17T14:26:04.195Z",
          "created": "2016-07-17T14:26:04.195Z"
        }
      },
      {
        "id": "578b9579c1da760909c263f1",
        "contents": "Some",
        "is_edited": false,
        "date": {
          "edited": "2016-07-17T14:26:01.062Z",
          "created": "2016-07-17T14:26:01.062Z"
        }
      }
      ];
    return (
      <div>
        {write}
        <MemoList data={mockData} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    postStatus: state.memo.post
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    memoPostRequest: (contents) => {
      return dispatch(memoPostRequest(contents));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Memo);



