import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

import ResultHeading from '../components/ResultHeading';
import TotalChart from '../components/TotalChart';
import ItemChart from '../components/ItemChart';


export default function ResultView({ userSelection, statistics }) {
  const percentage = 54;
  const { totalCount, singleDistribution } = statistics;
  const dist = statistics.totalDistribution;
  const rangePercentage = (i) => {
    const start = 5 * i;
    const sum = dist[start] + dist[start + 1] + dist[start + 2] + dist[start + 3] + dist[start + 4];
    return Math.round((sum / totalCount) * 100);
  };
  const data = [0, 1, 2, 3].map(rangePercentage);
  const singlePercentage = singleDistribution.map((v1) => v1.map((v2) => (v2 / totalCount) * 100));
  window.console.log(singlePercentage);
  const renderItem = (v, i) => (
    <ItemChart
      key={`${v}-${i}`}
      title={v}
      subtitle={`당신의 선택은 ${userSelection[v]}`}
      data={singlePercentage[i]}
    />
  );
  return (
    <Container>
      <ResultHeading text={`당신은 상위 ${percentage}%입니다.`} />
      <TotalChart title="전체 비율" data={data} />
      {Object.keys(userSelection).map(renderItem)}
    </Container>
  );
}

ResultView.propTypes = {
  userSelection: PropTypes.shape({
    거리: PropTypes.number,
    사람: PropTypes.number,
    돈: PropTypes.number,
    일: PropTypes.number,
    커리어: PropTypes.number,
  }).isRequired,
  statistics: PropTypes.shape({
    totalCount: PropTypes.number.isRequired,
    singleDistribution: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    totalDistribution: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};
