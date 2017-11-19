import React from 'react'
import {
  connect,
} from 'react-redux';
import _ from 'lodash';
import Indicator from './Indicator';
import Day from './Day';
import Grid from './Grid';

const pictureDummy = {
    type: "picture",
    src: "https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/7845/SITours/eiffel-tower-summit-priority-access-with-host-in-paris-408219.jpg",
    name: "Paris"
};

const memoDummy = {
    type: "memo",
    title: "메모타이틀",
    text: "메모내용 링크는 http://www.google.com 링크 파싱이 필요함"
};

const tripDummy = [
    pictureDummy, pictureDummy, memoDummy, pictureDummy, memoDummy, pictureDummy
];

const dummy = [
    tripDummy,
    tripDummy,
    tripDummy
];

class Scrap extends React.Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div id="scrap">
        <Day tripDay="1" year="2017" month="10" day="20" />
        <Indicator page={3} current={1} />
        <section id="trip">
          {_.map(dummy, (value, key) => <Grid key={key} data={value} />)}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Scrap);
