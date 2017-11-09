import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class Button extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
        <div>Button</div>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;