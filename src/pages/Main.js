import React from 'react'

export default class Main extends React.Component {

  render() {
    return (
      <div className="main-page">
        <nav className="main-nav">
          <span className="scwrap-logo">scwrap</span>
          <span className="scwrap-profile">profile</span>
        </nav>
        <div className="main-content hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1>Scwrap 에서 여행을 SCRAP 하세요 !</h1>
              <div className="new-trip">
                <input />
                <input />
                <button>NEXT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
