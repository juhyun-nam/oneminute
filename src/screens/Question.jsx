import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import QuestionCard from '../components/QuestionCard';
import Ask from '../components/Ask';

export default function Question() {
  const history = useHistory();
  const handleOnClick = () => {
    history.push('/result');
  };
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
        variant="primary"
        block
        style={{ marginTop: '2rem' }}
        onClick={handleOnClick}
      >
        제출!
      </Button>
    </Container>
  );
}
