import React from 'react'
import TopNav from '../shared/top-nav';

export default class Main extends React.Component {

  render() {
    return (

        <div className="main-content">
          <TopNav/>
          <div className="container">
            <h1><span className="scwrap-icon scwrap-iconic-logo"></span> 에서 여행을 SCRAP 하세요 <span className="scwrap-exclamination">!</span></h1>
            <div className="new-trip">
              <input />
              <div className="inner-addon right-addon">
                  <span className="scwrap-icon scwrap-iconic-calendar"></span>
                  <input type="text" className="form-control" />
              </div>
              <button className="fit">NEXT</button>
            </div>
          </div>
        </div>
    );
  }
}
