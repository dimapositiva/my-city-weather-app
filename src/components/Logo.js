import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () =>
  <div className='logo-wrapper'>
    <Link to='/' className='logo'>
      Weather app
    </Link>
  </div>;

export default Logo
