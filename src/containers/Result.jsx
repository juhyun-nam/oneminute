import React from 'react';
import { useHistory } from 'react-router-dom';
import ResultView from '../screens/ResultView';

export default function Home() {
  const history = useHistory();
  return (
    <ResultView onClick={() => history.push('/')} />
  );
}
