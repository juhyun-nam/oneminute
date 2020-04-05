import * as React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import QuestionHeading from '../components/QuestionHeading';
import Button from '../components/Button';
import QuestionList from '../containers/QuestionList';

export default function QuestionView({ questionList, onClick }) {
  return (
    <Container>
      <QuestionHeading />
      <Form>
        <QuestionList questions={questionList} />
        <Button onClick={onClick} text="제출" variant="info" />
      </Form>
    </Container>
  );
}

QuestionView.propTypes = {
  questionList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
