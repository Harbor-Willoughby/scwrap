import React, { Component } from 'react';
import TopNav from '../../shared/top-nav';
import img1 from '../../assets/images/box-dummy-01.jpg';
import img2 from '../../assets/images/box-dummy-02.jpg';
import img3 from '../../assets/images/box-dummy-03.jpg';
import img4 from '../../assets/images/box-dummy-04.jpg';
import img5 from '../../assets/images/box-dummy-05.jpg';
import img6 from '../../assets/images/box-dummy-06.jpg';

export default class ScrapDemo extends Component {
  render() {
    return (
      <div id="scrap-demo">
        <TopNav/>
        <div className="grid tile is-ancestor">
          <div className="day">
            <div>
              <h1>DAY 1</h1>
              <span>2017 - 10 - 21</span>
            </div>
          </div>
          <div className="tile">
              <img className="image" src={img1} />
          </div>
          <div className="tile is-vertical">
            <div className="box tile">
              <img className="image" src={img2} />
              <div>
                <h1>빨간지붕 마을</h1>
                <p><a href="https://github.com/storybooks/storybook">https://github.com/storybooks/storybook</a></p>
              </div>
            </div>
            <div className="box tile">
              <img className="image" src={img3} />
            </div>
          </div>
          <div className="tile is-vertical">
            <div className="box tile">
              <img className="image" src={img4} />
              <img className="image" src={img5} />
            </div>
            <div className="box tile">
               <div>
                 <h1>오랑주리 미술관</h1>
                 <p>여행자가 된 화가의 미술관 산책 여행자가 된 화가의 미술관 산책 </p>
                 <p>‘화가가 사랑한 파리 미술관’</p>
                 <p>(01)4477-8007</p>
                 <p>12:30~19:00(금 ~21:00)</p>
                 <p>화요일 휴관</p>
              </div>
              <img className="image" src={img6} />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
