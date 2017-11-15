import React from 'react'
import firebase from '../../firebase';
import ReactDOM from 'react-dom';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import { loginGoogleUser, logoutUser } from '../../actions';
import { connect } from 'react-redux';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      photos: null,
      prevPage : null,
      nextPage : null,
    };
  }

  searchNextPage() {
    this.setState({page: this.state.page + 10}, () => {
        this.searchImage()
      });
  }

  searchPrevPage() {
    this.setState({page: this.state.page - 10}, () => {
      this.searchImage()
    });
  }

  searchImages() {
    const searchDOM = ReactDOM.findDOMNode(this.refs.search);
    let text = searchDOM.value.trim();
    let page = this.state.page;

    const API_KEY = "AIzaSyCU03su66ziXV0bwEW2SWisrKT61JdyOvE";
    const API_ID = "007912717314554625778:w6rqq0udw3s";
    const API_URL = "https://www.googleapis.com/customsearch/v1?key=API_KEY&cx=API_ID&q=SEARCH_TEXT&searchType=image&start=PAGE_NUM";

    let url = API_URL.replace("API_KEY", API_KEY).replace("API_ID", API_ID).replace("SEARCH_TEXT", text).replace("PAGE_NUM", page);

    fetch(url)
      .then(res => {
        if (res.status !== 200) {
          console.log('Error Status Code: ' + res.status);
          return;
        }
        // Examine the text in the response
        res.json().then(data => {
          if (data.queries.previousPage) {
            this.setState({prevPage: true,
              nextPage: true,
              photos: map(data.items, (photo, key) => ({ id: key, ...photo }))})
          } else {
            this.setState({nextPage: true,
              prevPage: null,
              photos: map(data.items, (photo, key) => ({ id: key, ...photo }))
            });
          }
        });
      });
  };

  saveImages() {
    const value = document.getElementsByName('check_photo');
    const image = document.getElementsByTagName('img');
    const searchDOM = ReactDOM.findDOMNode(this.refs.search);
    const search_text = searchDOM.value.trim();

    const len = value.length;
    const image_list = [];
    for(var i=0; i<len; i++){
      var image_dict = {};
      if(value[i].checked === true){
        const img_url = image.item(value[i].value).src;
        const img_title = image.item(value[i].value).title;
        image_dict["search_text"] = search_text;
        image_dict["img_title"] = img_title;
        image_dict["img_url"] = img_url;
        // console.log("check src",image.item(value[i].value).src);
        // console.log("check title",image.item(value[i].value).title);
        image_list.push(image_dict)
      }
    }
    console.log("select image list",image_list)
    // return image_dict
  }


  renderPrevNextButton(next, prev) {
    if (prev) {
      return (
        <div>
          <button onClick={() => this.searchPrevPage()}>이전페이지</button>
          <button onClick={() => this.searchNextPage()}>다음페이지</button>
          <button onClick={() => this.saveImages()}>저장하기</button>
        </div>
      )
    } else if (next) {
      return (
        <div>
          <button onClick={() => this.searchNextPage()}>다음페이지</button>
          <button onClick={() => this.saveImages()}>저장하기</button>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }


  render() {
    const { photos, nextPage, prevPage } = this.state;
    return (
      <div>
        Search
        <div id="gsearch">
          <input type="text" ref="search" placeholder="검색어 입력" />
          <button onClick={()=>this.searchImages()}>검색</button>
        </div>
        <div>
          {
            isEmpty(photos) ?
                <div>
                  데이터 없음
                </div>
              : (
                <div>
                  {
                    photos.map((photo) => {
                      return (
                        <div key={photo.id}>
                          {photo.title}<br />
                          <img
                            src={photo.link}
                            title={photo.title}
                            // width={photo.image.width}
                            // height={photo.image.height}
                            width="200"
                            height="200"
                            alt={photo.snippet}
                          />
                          <input type="checkbox" name="check_photo" ref="checkbox" value={photo.id}/>
                        </div>
                      )
                    })
                  }
                </div>
              )
          }
        </div>
        <div>
          {this.renderPrevNextButton(nextPage, prevPage)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoggedIn: !!state.auth.name,
  name: state.auth.name,
  email: state.auth.email,
  profileImageUrl: state.auth.profileImageUrl,
});

const mapDispatchToProps = (dispatch) => ({
  loginGoogleUser: () => dispatch(loginGoogleUser()),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);