import React from 'react';
import {Container, Navbar} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import Search from "../search/search"


const Header = () => {
  return (
    <div>
      <Navbar sticky={'top'} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Amin Blog</Navbar.Brand>
            <NavLink exact activeClassName={'activeRoute'}  to={'/'}>
              Home
            </NavLink>
          <NavLink activeClassName={'activeRoute'} to={'/blog'}>
            Blog
          </NavLink>
          <NavLink activeClassName={'activeRoute'} to={'/about-us'}>
            About US
          </NavLink>
          <NavLink activeClassName={'activeRoute'} to={'/contact-us'}>
            Contact Us
          </NavLink>
          <Search/>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;