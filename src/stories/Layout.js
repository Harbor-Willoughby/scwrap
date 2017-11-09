import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

const propTypes = {};

const defaultProps = {};

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
        <div className="layout">
          <header>Header</header>
          <div>
            content
          </div>
          <footer>
            footer
          </footer>
        </div>
    );
  }
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;