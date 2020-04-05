import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selection } from '../Actions';
import QuestionCard from '../components/QuestionCard';

function QuestionList({ questions, selectionDispatch }) {
  const renderQuestionCard = (elem) => (
    <QuestionCard
      key={`ask${elem.title}`}
      title={elem.title}
      answers={elem.answers}
      changeDispatch={selectionDispatch}
    />
  );
  return (
    <>
      {questions.map(renderQuestionCard)}
    </>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectionDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  selectionDispatch: selection,
};

export default connect(null, mapDispatchToProps)(QuestionList);
