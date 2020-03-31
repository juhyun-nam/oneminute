import React from 'react';
import { useHistory } from 'react-router-dom';
import QuestionView from '../screens/QuestionView';

export default function Home() {
  const history = useHistory();
  return (
    <QuestionView onClick={() => history.push('/result')} />
  );
}
