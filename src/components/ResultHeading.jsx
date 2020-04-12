import React from 'react';
import PropTypes from 'prop-types';

export default function ResultHeading({ heading, text }) {
  return (
    <div>
      <h2>
        {heading}
      </h2>
      <h3>
        {text}
      </h3>
    </div>
  );
}

ResultHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
