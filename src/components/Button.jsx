import React from 'react';
import PropTypes from 'prop-types';
import BootstrapButton from 'react-bootstrap/Button';

export default function Button({ onClick, text, variant }) {
  return (
    <BootstrapButton
      variant={variant}
      block
      style={{ marginTop: '2rem' }}
      onClick={onClick}
    >
      {text}
    </BootstrapButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
