import React, {Component} from 'react';
import ImageUpload from "./ImageUpload";
import ImageSearch from "./ImageSearch";
import Memo from "./Memo/Memo";


class Contents extends Component {
  render() {
    const { type, tripKey } = this.props;
    if (type === 'imageUpload') {
      return (
        <ImageUpload />
      )
    } else if (type === 'imageSearch') {
      return (
        <ImageSearch />
      )
    } else if (type === 'memo') {
      return (
        <Memo tripKey={tripKey}/>
      )
    }
  }
}


export default Contents;
