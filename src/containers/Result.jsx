import React from 'react';
// import PropTypes from 'prop-types';
import { useStore } from 'react-redux';
import ResultView from '../screens/ResultView';


function Percentage(selections, totalDist, totalCount) {
  const sum = Object.values(selections).reduce((acc, curr) => acc + curr);
  const high = totalDist.reduce((acc, curr, index) => {
    if ((25 - index) >= sum) return acc + curr;
    return acc;
  });
  return Math.round((high / totalCount) * 100);
}

function totalDistToGraph(totalDist, totalCount) {
  const t = totalDist;
  const graphData = [0, 1, 2, 3].map((val) => {
    const i = val * 5;
    return t[i] + t[i + 1] + t[i + 2] + t[i + 3] + t[i + 4];
  });
  graphData[3] += t[20];
  const res = graphData.map((val) => Math.round((val / totalCount) * 100));
  return res.reverse();
}

function singleDist(item, totalCount) {
  return item.map((val) => Math.round((val / totalCount) * 100));
}

export default function Result() {
  const { selection, total } = useStore().getState();
  const percentage = Percentage(selection, total.totalDist, total.totalCount);
  const distanceDist = singleDist(total.distance, total.totalCount);
  const colleagueDist = singleDist(total.colleague, total.totalCount);
  const salaryDist = singleDist(total.salary, total.totalCount);
  const jobDist = singleDist(total.job, total.totalCount);
  const careerDist = singleDist(total.career, total.totalCount);
  const totalGraph = totalDistToGraph(total.totalDist, total.totalCount);
  return (
    <ResultView
      percentage={percentage}
      totalDist={totalGraph}
      selection={selection}
      distanceDist={distanceDist}
      colleagueDist={colleagueDist}
      salaryDist={salaryDist}
      jobDist={jobDist}
      careerDist={careerDist}
    />
  );
}
