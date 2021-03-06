import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

export default function ShareButton({ onClick }) {
  return (
    <Button
      variant="info"
      block
      style={{ marginTop: '2rem' }}
      onClick={onClick}
    >
      공유하기
    </Button>

  );
}

ShareButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
