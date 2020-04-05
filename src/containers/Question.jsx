import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStore, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';

import QuestionView from '../screens/QuestionView';
import { result } from '../Actions';
import Ask from '../components/Ask';

import Statistics from '../statistics';

function Question({ resultDispatch }) {
  const store = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const onClick = () => {
    const { selections } = store.getState();
    const isValid = Object.keys(selections).length === 5;
    if (!isValid) {
      window.console.log('check answers');
    } else {
      setIsLoading(true);
      window.scrollTo(0, 0);
      setTimeout(() => {
        window.console.log(selections);
        window.console.log(Statistics);
        resultDispatch(Statistics);
        history.push('/result');
      }, 1500);
    }
  };
  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="통계 데이터를 가져오는 중..."
      styles={{
        overlay: (base) => ({
          ...base,
          height: '100%',
        }),
      }}
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
