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
    };
  }

  searchImage = () => {
    const searchDOM = ReactDOM.findDOMNode(this.refs.search);
    let text = searchDOM.value.trim();

    const pageDOM = ReactDOM.findDOMNode(this.refs.page);
    let page = pageDOM.value.trim();

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
          // console.log(data);
          console.log(data.items);

          this.setState({
            photos: map(data.items, (photo, key) => ({ id: key, ...photo })),
          });
        });
      });
  };

  render() {
    return (
      <div>
        Search
        <div id="gsearch">
          <input type="text" ref="search" placeholder="검색어 입력" />
          <input type="text" ref="page" placeholder="페이지번호" value={this.state.page} onChange={e => this.setState({page: e.target.value})} />
          <button onClick={()=>this.searchImage(1)}>검색</button>
        </div>

        <div>
          {
            isEmpty(this.state.photos) ? (
              <div>
                데이터 없음
              </div>
            ) : this.state.photos.map((photo) => {
              return (
                <div key={photo.id}>
                  {photo.title}<br />
                  <img
                    src={photo.link}
                    width={photo.image.width}
                    height={photo.image.height}
                    alt={photo.snippet}
                  />
                </div>
              )
            })
          }
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