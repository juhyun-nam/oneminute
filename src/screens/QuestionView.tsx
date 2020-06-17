import * as React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

import QuestionHeading from '../components/QuestionHeading';
import QuestionList from '../containers/QuestionList';

type QuestionViewProps = {
  questionList: any,
  submit: any
};
export default function QuestionView({ questionList, submit }: QuestionViewProps) {
  return (
    <Container>
      <QuestionHeading />
      <QuestionList questions={questionList} submit={submit} />
    </Container>
  );
}

QuestionView.propTypes = {
  questionList: PropTypes.arrayOf(PropTypes.object).isRequired,
  submit: PropTypes.func.isRequired,
};
