import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStore, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';

import { totalAction } from '../Actions';
import base from '../rebase';
import QuestionView from '../screens/QuestionView';
import Ask from '../components/Ask';


function update(sum, sel, total) {
  const career = [...total.career];
  career[sel.career - 1] = total.career[sel.career - 1] + 1;
  const colleague = [...total.colleague];
  colleague[sel.colleague - 1] = total.colleague[sel.colleague - 1] + 1;
  const distance = [...total.distance];
  distance[sel.distance - 1] = total.distance[sel.distance - 1] + 1;
  const job = [...total.job];
  job[sel.job - 1] = total.job[sel.job - 1] + 1;
  const salary = [...total.salary];
  salary[sel.salary - 1] = total.salary[sel.salary - 1] + 1;
  const totalCount = total.totalCount + 1;
  const totalDist = [...total.totalDist];
  const index = 25 - sum;
  totalDist[index] = total.totalDist[index] + 1;
  const res = {
    career, colleague, distance, job, salary, totalCount, totalDist,
  };
  return res;
}
function Question({ totalDispatch }) {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const store = useStore();
  const submit = () => {
    setIsLoading(true);
    base.get('employ/total', {})
      .then((total) => {
        const selection = { ...store.getState().selection };
        const sum = Object.values(selection).reduce((att, cur) => att + cur);
        const updated = update(sum, selection, total);
        return updated;
      })
      .catch((err) => { window.console.log(err); })
      .then((updated) => {
        window.console.log(updated);
        totalDispatch(updated);
        base.updateDoc('employ/total', updated)
          .then(() => {
            history.push('/result');
          }).catch((err) => { window.console.log(err); });
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
