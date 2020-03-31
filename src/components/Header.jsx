import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" className="mb-4">
      <Navbar.Brand> 직장 점수 </Navbar.Brand>
    </Navbar>
  );
}
