import './styles.css';

import PropTypes from 'prop-types';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input className="text-input" onChange={handleChange} value={searchValue} type="search" placeholder="Search" />
  );
};

TextInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
