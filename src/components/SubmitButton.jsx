import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

export default function SubmitButton({ onClick }) {
  return (
    <Button
      variant="info"
      block
      style={{ marginTop: '2rem' }}
      onClick={onClick}
    >
      제출!
    </Button>
  );
}

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
