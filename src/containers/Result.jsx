import React from 'react';
import { useStore } from 'react-redux';
import ResultView from '../screens/ResultView';

export default function Result() {
  const { selections, statistics } = useStore().getState();
  return (
    <ResultView userSelection={selections} statistics={statistics} />
  );
}
