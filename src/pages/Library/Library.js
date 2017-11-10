import React, {Component} from 'react';
import Contents from "./Contents";


class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content_type: 'imageUpload'
        }
    }

    changeContentType(type) {
        this.setState({content_type: type})
    }


    render() {
        return (
            <div>
                <button onClick={() => this.changeContentType('imageUpload')}>이미지 업로드</button>
                <button onClick={() => this.changeContentType('imageSearch')}>이미지 검색</button>
                <Contents type={this.state.content_type}/>
            </div>
        )
    }
}


export default Library;
