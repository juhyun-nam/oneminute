import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function ResultHeading({ text }) {
  return (
    <Card bg="info" className="my-4">
      <Card.Body>
        {text}
      </Card.Body>
    </Card>
  );
}

ResultHeading.propTypes = {
  text: PropTypes.string.isRequired,
};
