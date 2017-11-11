import React, {Component} from 'react';
import ImageUpload from "./ImageUpload";
import ImageSearch from "./ImageSearch";


class Contents extends Component {
    render() {
        const { type } = this.props;
        if (type === 'imageUpload') {
            return (
                <ImageUpload />
            )
        } else if (type === 'imageSearch') {
            return (
                <ImageSearch />
            )
        }
    }
}


export default Contents;
