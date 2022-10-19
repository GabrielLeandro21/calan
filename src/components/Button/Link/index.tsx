import React from 'react';
import { Link } from 'react-router-dom';

import { buttonProps } from '../../../types/button/button';

const ButtonLink: React.FC<buttonProps> = ({
  title,
  href,
  color,
}: buttonProps) => {
  return (
    <button className={`button ${color ? `button--${color}` : ''}`}>
      <Link to={href} aria-label="Change to list page products">
        {title}
      </Link>
    </button>
  );
};

export default ButtonLink;