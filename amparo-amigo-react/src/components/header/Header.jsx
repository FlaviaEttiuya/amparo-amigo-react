import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

export default function Header() {
  return (
    <>
      <header id="header">
          <Navbar expand="md" dark >
            <NavbarBrand href="/">
              <div id="logo">
                <h1><a href="/" className="scrollto">AmparoAmigo</a></h1>
                <a href="/"><img src="#" alt="" title="" /></a>
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() { }} />
            <Collapse navbar >
              <Nav className="me-auto nav-menu" navbar>
                <NavItem className="menu-active">
                  <NavLink className="menu-active" href="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/sobre/">
                    Sobre Nós
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/sobre/">
                    Seja Voluntário
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/sobre/">
                    Encontre um Voluntário
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/sobre/">
                    Meu Acesso
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
      </header>
    </>
  );
}