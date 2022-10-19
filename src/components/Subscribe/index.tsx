import React from 'react';
import SignUp from '../Input/SignUp';

const Subscribe: React.FC = () => {
  return (
    <section className="subscribe">
      <section className="subscribe__wrapper">
        <h2 className="subscribe__title">Join the club and get the benefits</h2>
        <p className="subscribe__description">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>

        <div className="subscribe__button">
          <SignUp />
        </div>
      </section>
    </section>
  );
};

export default Subscribe;
