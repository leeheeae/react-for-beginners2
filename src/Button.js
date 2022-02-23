import PropTypes from 'prop-types';
import styled from './Button.module.css';

function Button({ text, onClick }) {
  return (
    <button className={styled.btn} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string,
};
