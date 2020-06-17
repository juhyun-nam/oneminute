import React from 'react';
import { useHistory } from 'react-router-dom';
import HomeView from '../screens/HomeView';

export default function Home() {
  const history = useHistory();
  return (
    <HomeView onClick={() => history.push('/question')} />
  );
}
