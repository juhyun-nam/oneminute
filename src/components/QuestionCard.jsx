import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function QuestionCard({ title, answers, changeDispatch }) {
  const onChange = (val) => {
    changeDispatch(title, Number(val));
  };
  const renderForm = (text, index) => (
    <ToggleButton
      block
      size="lg"
      className="text-left"
      variant="secondary"
      key={`${title}-questionCard-${index}`}
      value={5 - index}
    >
      {` ${5 - index}점 - ${text}`}
    </ToggleButton>
  );
  return (
    <Card
      bg="dark"
      text="white"
      className="my-4"
    >
      <Card.Header>{title}</Card.Header>
      <Card.Img src="" />
      <Card.Body>
        <ToggleButtonGroup
          className="d-block"
          name={`${title}-answer-form`}
          type="radio"
          onChange={onChange}
        >
          {answers.map(renderForm)}
        </ToggleButtonGroup>
      </Card.Body>
    </Card>
  );
}
QuestionCard.propTypes = {
  title: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeDispatch: PropTypes.func.isRequired,
};
