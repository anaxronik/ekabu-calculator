import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Navibar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
      <Navbar.Brand href="/">Калькулятор стоимости</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar" />
      <Navbar.Collapse id="responsive-navbar">
        <Nav className="mr-auto">
          <Nav.Link href="/">Калькулятор</Nav.Link>
          <Nav.Link href="/price">Прайс</Nav.Link>
          <Nav.Link href="/history">История</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/registration">Регистрация</Nav.Link>
          <Nav.Link href="/login">Войти</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
