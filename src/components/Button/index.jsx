import { Component } from 'react/cjs/react.production.min';

import PropTypes from 'prop-types';

import './styles.css';

class Button extends Component {
  render() {
    const { text, onClick, disabled = false } = this.props;

    return (
      <button disabled={disabled} className="button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

Button.defaltProps = {
  disabled: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
