import React, {Component} from 'react';


class MemoWrite extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contents: ''
    };
  }

  handleChange(e) {
    this.setState({
      contents: e.target.value
    });
  }

  handlePost() {
    let contents = this.state.contents;

    this.props.onPost(contents).then(
      () => {
        this.setState({
          contents: ""
        });
      }
    );
  }
  render() {
    return (
      <div>
        <div>
          <textarea
            placeholder="Write memo"
            value={this.state.contents}
            onChange={this.handleChange.bind(this)}
          ></textarea>
        </div>
        <div>
          <button onClick={this.handlePost.bind(this)}>POST</button>
        </div>
      </div>
    );
  }
}



export default MemoWrite;
