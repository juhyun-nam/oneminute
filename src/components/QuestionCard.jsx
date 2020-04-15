import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import '../Card.css';

function Answer(title, onClick) {
  return (text, index) => {
    const score = 5 - index;
    return (
      <Button
        key={`answer${title}-${index}`}
        block
        size="lg"
        value={score}
        className="text-left"
        variant="primary"
        onClick={(e) => onClick(e.target.value)}
      >
        {` ${score}점 - ${text}`}
      </Button>
    );
  };
}

export default function QuestionCard({
  title, answers, onClick, lastQuestion,
}) {
  const [animate, setAnimate] = useState('bounceInRight');
  const decoratedOnClick = (val) => {
    if (!lastQuestion) {
      setAnimate('bounceOutLeft');
      setTimeout(() => {
        onClick(val);
        setAnimate('bounceInRight');
      }, 300);
    } else {
      onClick(val);
    }
  };

  return (
    <div className={`animated ${animate}`}>
      <Card
        border="primary"
        bg="secondary"
        text="white"
        className="my-4"
      >
        <Card.Img src="" />
        <Card.Body>
          <Card.Title>
            {title}
          </Card.Title>
          <hr />
          {answers.map(Answer(title, decoratedOnClick))}
        </Card.Body>
      </Card>
    </div>
  );
}
QuestionCard.propTypes = {
  title: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  lastQuestion: PropTypes.bool.isRequired,
};
