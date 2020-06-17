import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

import ResultHeading from '../components/ResultHeading';
import TotalChart from '../components/TotalChart';
import ItemChart from '../components/ItemChart';

export default function ResultView({
  percentage,
  totalDist,
  selection,
  distanceDist,
  colleagueDist,
  salaryDist,
  jobDist,
  careerDist,
}) {
  const sum = Object.values(selection).reduce((acc, cur) => acc + cur);
  return (
    <Container>
      <br />
      <ResultHeading
        heading={`당신은 상위 ${percentage}% 입니다.`}
        text={`입력한 점수의 총합은 ${sum}점 입니다.`}
      />
      <hr className="my-4" />
      <h4>
        전체 분포 (%)
      </h4>
      <TotalChart data={totalDist} />
      <hr className="my-4" />
      <h4>
        각 문항별 분포 (%)
      </h4>
      <ItemChart datas={[distanceDist, colleagueDist, salaryDist, jobDist, careerDist]} />
      <div className="my-2">
        {'당신의 선택 ( '}
        {`거리: ${selection.distance}  `}
        {`사람: ${selection.colleague}  `}
        {`돈: ${selection.salary}  `}
        {`일: ${selection.job}  `}
        {`커리어: ${selection.career}  `}
        {')'}
      </div>
    </Container>
  );
}

ResultView.propTypes = {
  percentage: PropTypes.number.isRequired,
  totalDist: PropTypes.arrayOf(PropTypes.number).isRequired,
  selection: PropTypes.shape({
    distance: PropTypes.number,
    colleague: PropTypes.number,
    job: PropTypes.number,
    career: PropTypes.number,
    salary: PropTypes.number,
  }).isRequired,
  distanceDist: PropTypes.arrayOf(PropTypes.number).isRequired,
  colleagueDist: PropTypes.arrayOf(PropTypes.number).isRequired,
  salaryDist: PropTypes.arrayOf(PropTypes.number).isRequired,
  jobDist: PropTypes.arrayOf(PropTypes.number).isRequired,
  careerDist: PropTypes.arrayOf(PropTypes.number).isRequired,
};
