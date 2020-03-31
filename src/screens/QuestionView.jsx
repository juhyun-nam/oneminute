import * as React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

import QuestionHeading from '../components/QuestionHeading';
import SubmitButton from '../components/SubmitButton';
import QuestionCard from '../components/QuestionCard';
import Ask from '../components/Ask';

export default function QuestionView({ onClick }) {
  const renderQuestionCard = (elem) => (
    <QuestionCard
      key={`ask${elem.title}`}
      title={elem.title}
      answers={elem.answers}
    />
  );
  return (
    <Container>
      <QuestionHeading />
      {Ask.questions.map(renderQuestionCard)}
      <SubmitButton onClick={onClick} />
    </Container>
  );
}

QuestionView.propTypes = {
  onClick: PropTypes.func.isRequired,
};
