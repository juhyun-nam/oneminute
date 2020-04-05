import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';

import Reducer from './Reducer';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import Question from './containers/Question';
import Result from './containers/Result';

const store = createStore(Reducer);

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Container style={{ marginTop: '80px', marginBottom: '80px' }}>
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
        </Container>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
