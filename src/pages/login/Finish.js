import React from 'react'
import {
  connect,
} from 'react-redux';

class Finish extends React.Component {
  render() {
    return (
        <content id="simpleLogin">
          <h3><span className="welcome">환영합니다.</span> 반가워요</h3>
          <p><span className="scwrap">Scwrap</span> 의 회원이 되었어요!</p>
        </content>
    );
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Finish);
