import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';

import Reducer from './Reducer';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';

const Question = lazy(() => import('./containers/Question'));
const Result = lazy(() => import('./containers/Result'));

const store = createStore(Reducer);

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<h2>Loading...please wait</h2>}>
          <Header />
          <Container style={{ marginTop: '80px', marginBottom: '120px' }}>
            <Switch>
              <Route path="/question">
                <Question />
              </Route>
              <Route path="/result">
                <Result />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}
