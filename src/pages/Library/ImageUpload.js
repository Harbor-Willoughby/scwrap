import React, {Component} from 'react';
import Dropzone from "react-dropzone";
import {isEmpty} from "lodash";


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    }
  }

  dragDropImage(files) {
    console.log("files",files);
    this.setState({files: files})
  }

  deleteImage(file_key) {
    this.state.files.splice(file_key, 1);
    this.setState({files: this.state.files})
  }

  // 사진에 마우스오버하면 나오는 #은 "#+사진파일이름"
  saveImage(files) {
    console.log("image Upload", files)
  }

  render() {
    const { files } = this.state;
    return (
      <div>
        <div>
          <Dropzone onDrop={this.dragDropImage.bind(this)} multiple>
            <p>1.Drag and Drop</p>
            <p>2.Click this box</p>
            <p>multiple img upload at once</p>
          </Dropzone>
          <aside>
            {
              isEmpty(files) ? <div></div> :
                <div>
                  {
                    files.map((item, i) => {
                      console.log("item",item);
                      return (
                        <div key={i}>
                          <img src={item.preview} alt={item.name} height="200" width="200"/>
                          <button onClick={() => this.deleteImage(i)}>사진삭제</button>
                        </div>
                      )
                    })
                  }
                  <button onClick={() => this.saveImage(files)}>사진저장</button>
                </div>
            }
          </aside>
        </div>
      </div>
    );
  }
}



export default ImageUpload;
