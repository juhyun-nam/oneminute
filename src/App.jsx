import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Home from './screens/Home';
import Result from './screens/Result';
import Question from './screens/Question';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Container style={{ marginTop: '80px', marginBottom: '80px' }}>
        <BrowserRouter>
          <Switch>
            <Route path="/question">
              <Question />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
      <Footer />
    </>
  );
}
