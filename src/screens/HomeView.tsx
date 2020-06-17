import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default function HomeView({ onClick }) {
  return (
    <>
      <Container>
        <Jumbotron onClick={onClick} style={{ cursor: 'pointer' }}>
          <h2>내 직장 점수 매기기</h2>
          <p className="lead">
            내가 생각하는 내 직장의 점수를 매겨보고,
            다른 사람들과 비교해보자.
          </p>
          <hr className="my-4" />
          <p>
            입력한 정보는 본 컨텐츠 이외의 용도로 사용하지 않습니다.
          </p>
          <Button>
            START
          </Button>
        </Jumbotron>
      </Container>
    </>
  );
}

HomeView.propTypes = {
  onClick: PropTypes.func.isRequired,
};
