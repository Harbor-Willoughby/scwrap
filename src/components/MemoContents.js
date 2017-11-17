import React, {Component} from 'react';

class MemoContents extends Component {


  // componentDidUpdate() {
  //
  //   $('#dropdown-button-'+this.props.data.id).dropdown({
  //     belowOrigin: true // Displays dropdown below the button
  //   });
  // }
  //
  // componentDidMount() {
  //   const $ = window.$;
  //   // WHEN COMPONENT MOUNTS, INITIALIZE DROPDOWN
  //   // (TRIGGERED WHEN REFRESHED)
  //   $('#dropdown-button-'+this.props.data.id).dropdown({
  //     belowOrigin: true // Displays dropdown below the button
  //   });
  // }


  render() {
    const { data } = this.props;
    const dropDownMenu = (
      <div className="option-button">
        <a className='dropdown-button'
           id={"dropdown-button" + data.id}
           data-activates={"dropdown" + data.id}>
          <i className="material-icons icon-button">more_vert</i>
        </a>
        <ul id={"dropdown" + data.id} className='dropdown-content'>
          <li><a>Edit</a></li>
          <li><a>Remove</a></li>
        </ul>
      </div>
    );

    const memoViewer = (
      <div>
        <div>
          {dropDownMenu}
        </div>
        <div>
          {data.contents}
        </div>
      </div>
    );

    return (
      <div>
        { memoViewer }
      </div>
    )
  }
}
MemoContents.defaultProps = {
  data: {
    id: 'id1234567890',
    contents: 'Contents',
    is_edited: false,
    date: {
      edited: new Date(),
      created: new Date()
    }
  }
}

export default MemoContents;
