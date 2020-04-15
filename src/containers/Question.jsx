import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStore, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';

import { totalAction } from '../Actions';
import base from '../rebase';
import QuestionView from '../screens/QuestionView';
import Ask from '../components/Ask';

function Question({ totalDispatch }) {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const store = useStore();
  const submit = () => {
    window.console.log(store.getState().selection);
    setIsLoading(true);
    base.get('employ', {})
      .then((data) => data[0])
      .catch((err) => { window.console.log(err); })
      .then((res) => {
        window.console.log(res);
        totalDispatch(res);
        history.push('/result');
      });
  };
  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="통계 데이터를 가져오는 중..."
      styles={{
        wrapper: {
          width: '100%',
          height: '100%',
        },
      }}
    >
      <QuestionView
        questionList={Ask.questions}
        submit={submit}
      />
    </LoadingOverlay>
  );
}
Question.propTypes = {
  totalDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  totalDispatch: totalAction,
};

export default connect(null, mapDispatchToProps)(Question);
