import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function QuestionCard({ title, answers }) {
  const renderForm = (text, index) => (
    <Form.Check
      type="radio"
      label={` ${5 - index}점 - ${text}`}
      key={`questionCard${title}`}
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
