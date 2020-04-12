import React from 'react';
import { useHistory } from 'react-router-dom';
import HomeView from '../screens/HomeView';

export default function Home() {
  /*
  db.collection('employ').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      window.console.log(doc.data());
    });
  });
  */
  const history = useHistory();
  return (
    <HomeView onClick={() => history.push('/question')} />
  );
}
