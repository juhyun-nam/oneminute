import * as React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import QuestionCard from '../components/QuestionCard';
import Ask from '../components/Ask';

export default function QuestionView({ onClick }) {
  return (
    <Container>
      <Card
        bg="info"
        className="my-4"
      >
        <Card.Body>
          내가 생각했을 때 나의 직장은...?
        </Card.Body>
      </Card>
      {Ask.questions.map((elem) => (
        <QuestionCard key={`ask${elem.title}`} title={elem.title} answers={elem.answers} />))}
      <Button
        variant="info"
        block
        style={{ marginTop: '2rem' }}
        onClick={onClick}
      >
        제출!
      </Button>
    </Container>
  );
}

QuestionView.propTypes = {
  onClick: PropTypes.func.isRequired,
};
