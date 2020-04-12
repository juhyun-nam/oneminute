import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

import ResultHeading from '../components/ResultHeading';
import TotalChart from '../components/TotalChart';
import ItemChart from '../components/ItemChart';


export default function ResultView({
  percentage,
  totalDist,
  selections,
  distanceDist,
  colleagueDist,
  salaryDist,
  jobDist,
  careerDist,
}) {
  const sum = Object.values(selections).reduce((acc, cur) => acc + cur);
  return (
    <Container>
      <ResultHeading
        heading={`총합은 ${sum}이고`}
        text={`당신은 상위 ${percentage}%입니다.`}
      />
      <br />
      <TotalChart title="전체 비율" data={totalDist} />
      <br />
      <h4>
        {'당신의 선택:  '}
        {`거리: ${selections.distance}  `}
        {`사람: ${selections.colleague}  `}
        {`돈: ${selections.salary}  `}
        {`일: ${selections.job}  `}
        {`커리어: ${selections.career}  `}
      </h4>
      <ItemChart datas={[distanceDist, colleagueDist, salaryDist, jobDist, careerDist]} />
    </Container>
  );
}

ResultView.propTypes = {
  percentage: PropTypes.number.isRequired,
  totalDist: PropTypes.arrayOf(PropTypes.number).isRequired,
  selections: PropTypes.shape({
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
