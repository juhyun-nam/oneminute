import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function QuestionCard({ title, answers }) {
  const renderForm = (text, index) => (
    <Form.Check
      type="radio"
      label={` ${5 - index}점 - ${text}`}
      name={`${title}-answer-form`}
      key={`${title}-questionCard-${index}`}
      value={`${5 - index}`}
      onChange={() => {}}
    />
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
        {answers.map(renderForm)}
      </Card.Body>
    </Card>
  );
}
QuestionCard.propTypes = {
  title: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
};
