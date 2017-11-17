import React from 'react'

export default class Main extends React.Component {

  render() {
    return (
      <div className="main-page">
        <nav className="main-nav">
          <span className="scwrap-logo">scwrap</span>
          <span className="scwrap-profile">profile</span>
        </nav>
        <div className="container main-content">
          Scwrap 에서 여행을 SCRAP 하세요 ! 
        </div>
      </div>
    );
  }
}
