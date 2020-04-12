import React from 'react';
import PropTypes from 'prop-types';

export default function ResultHeading({ heading, text }) {
  return (
    <div>
      <h3>
        {heading}
      </h3>
      <p>
        {text}
      </p>
    </div>
  );
}

ResultHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
