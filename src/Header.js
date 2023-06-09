import React from 'react';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  render(){
    return (
      <>
      <Navbar>
        <NavItem><Link to="/home">Home</Link></NavItem>
        <NavItem><Link to="/projects">Projects</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
      </Navbar>
      </>
    );
  }
}

export default Header;