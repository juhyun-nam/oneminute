import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectionAction } from '../Actions';
import QuestionCard from '../components/QuestionCard';

function QuestionList({ questions, selectionDispatch, submit }) {
  const [selectNo, setSelectNo] = useState(0);
  const question = questions[selectNo];
  const onChange = (val) => {
    selectionDispatch(question.key, Number(val));
    if (selectNo >= 4) {
      submit();
    } else {
      setSelectNo(selectNo + 1);
    }
  };
  return (
    <>
      <QuestionCard
        title={`${question.title} (${selectNo + 1}/5)`}
        answers={question.answers}
        onClick={onChange}
        lastQuestion={selectNo >= 4}
      />
    </>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectionDispatch: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  selectionDispatch: selectionAction,
};

export default connect(null, mapDispatchToProps)(QuestionList);
