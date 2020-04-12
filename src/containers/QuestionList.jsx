import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selection } from '../Actions';
import QuestionCard from '../components/QuestionCard';

function QuestionList({ questions, selectionDispatch }) {
  const questionSize = 5;
  const [questionNo, setQuestionNo] = useState(0);
  const renderQuestionCard = (elem) => (
    <QuestionCard
      key={`ask${elem.title}`}
      title={elem.title}
      answers={elem.answers}
      dbKey={elem.key}
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
