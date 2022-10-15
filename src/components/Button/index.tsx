import React from 'react';
import { buttonProps } from '../../types/button';

const Button: React.FC<buttonProps> = ({ title, href }: buttonProps) => {
  return (
    <button className="button">
      <a
        href={href}
        target="_blank"
        aria-label="Change to list page products"
        rel="noreferrer"
      >
        {title}
      </a>
    </button>
  );
};

export default Button;
