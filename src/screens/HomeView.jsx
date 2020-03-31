import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function HomeView({ onClick }) {
  return (
    <>
      <Container>
        <Jumbotron onClick={onClick} style={{ cursor: 'pointer' }}>
          <h1>내 직장 점수 매기기</h1>
          <p>
            내가 생각하는 내 직장 점수를 매겨보고
            다른 사람들과 나의 만족도를 비교해보자.
          </p>
          <h2>
            START!!
          </h2>
        </Jumbotron>
      </Container>
    </>
  );
}

HomeView.propTypes = {
  onClick: PropTypes.func.isRequired,
};
