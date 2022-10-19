import React from 'react';
import Button from '../../Button/Link';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div>
          <h1 className="hero__title">
            The furniture brand for the future, with timeless designs
          </h1>
          <div className="hero__button">
            <Button href="#" title="View collection" />
          </div>
        </div>

        <p className="hero__description">
          A new era in eco friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors and a beautiful way to
          display things digitally using modern web technologies.
        </p>

        <div className="hero__button--desktop">
          <Button href="#" title="View collection" />
        </div>
      </div>

      <figure className="hero__figure">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80"
          alt="Image hero"
        />
      </figure>
    </section>
  );
};

export default Hero;
