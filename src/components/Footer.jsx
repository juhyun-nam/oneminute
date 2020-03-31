import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
  return (
    <Navbar
      fixed="bottom"
      variant="dark"
      bg="dark"
      className="flex-row-reverse"
    >
      <Navbar.Brand> juhyun-nam </Navbar.Brand>
    </Navbar>
  );
}
