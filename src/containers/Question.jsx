import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStore, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';

import { result } from '../Actions';
import base from '../rebase';
import QuestionView from '../screens/QuestionView';
import Ask from '../components/Ask';

function Question({ resultDispatch }) {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const store = useStore();
  const onClick = () => {
    const { selections } = store.getState();
    const isValid = Object.keys(selections).length === 5;
    if (!isValid) {
      window.console.log('check answers');
      return;
    }
    setIsLoading(true);
    base.get('employ', {})
      .then((data) => data[0])
      .catch((err) => { window.console.log(err); })
      .then((res) => {
        window.console.log(res);
        resultDispatch(res);
        history.push('/result');
      });
  };
  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="통계 데이터를 가져오는 중..."
    >
      <QuestionView
        questionList={Ask.questions}
        onClick={onClick}
      />
    </LoadingOverlay>
  );
}
Question.propTypes = {
  resultDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  resultDispatch: result,
};

export default connect(null, mapDispatchToProps)(Question);
