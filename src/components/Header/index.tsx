import React, {  } from 'react';

import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import cart from '../../assets/cart.svg';

const Header: React.FC = () => {

  return (
    <header className="header">
      <figure>
        <img src={search} alt="Search" />
      </figure>

      <figure>
        <img src={logo} alt="Logo" />
      </figure>

      <figure>
        <img src={cart} alt="Logo" />
      </figure>
    </header>
  );
};

export default Header;
