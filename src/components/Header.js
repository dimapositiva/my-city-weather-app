import React, { Component } from 'react';
import NavBar from './NavBar';
import Logo from './Logo';
import '../style/header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <NavBar />
      </header>
    );
  }
}

export default Header;
