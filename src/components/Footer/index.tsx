import React from 'react';

import logo from '../../assets/avion.svg';

const footers = [
  {
    title: 'New arrivals',
  },
  {
    title: 'Best sellers',
  },
  {
    title: 'Recently viewed',
  },
  {
    title: 'Popular this week',
  },
  {
    title: 'All products',
  },
];

const socials = [
  {
    icons: 'footers',
  },
  {
    icons: 'footers',
  },
  {
    icons: 'footers',
  },
  {
    icons: 'footers',
  },
];
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section className="footer__container">
        <div>
          <div>
            <figure className="footer__logo">
              <img src={logo} alt="logo footer" />
            </figure>

            <div className="footer__content">
              <p>21 New York Street</p>
              <p>New York City</p>
              <p>United States of America</p>
              <p>432 34</p>
            </div>
          </div>
        </div>

        <div className="footer__wrapper">
          <nav className="footer__nav">
            <h2 className="footer__title" aria-describedby="menu">
              Menu
            </h2>
            <ul className="footer__unlist" id="menu">
              {footers.map(({ title }) => (
                <li key={title} className="footer__item">
                  <a href="">{title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__nav">
            <h2 className="footer__title" aria-describedby="categories">
              Categories
            </h2>
            <ul className="footer__unlist" id="categories">
              {footers.map(({ title }) => (
                <li key={title} className="footer__item">
                  <a href="">{title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__nav">
            <h2 className="footer__title" aria-describedby="ourCompany">
              Our company
            </h2>
            <ul className="footer__unlist" id="ourCompany">
              {footers.map(({ title }) => (
                <li key={title} className="footer__item">
                  <a href="">{title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="footer__credits">Copyright 2022 Avion LTD</section>
    </footer>
  );
};

export default Footer;
