import React from 'react';

const SignUp: React.FC = () => {
  return (
    <label className="signup">
      <section className="signup__wrapper">
        <input
          type="text"
          className="signup__input"
          placeholder="your@email.com"
        />
        
        <button className="button button--dark">
          <a
            href={'href'}
            target="_blank"
            aria-label="Change to list page products"
            rel="noreferrer"
          >
            {'Sign up'}
          </a>
        </button>
      </section>
    </label>
  );
};

export default SignUp;
