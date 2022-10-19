import React from 'react';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

import { CardProductsProps } from '../../../types/cards/products';
import { REACT_APP_BASE_URL } from '../../../../global/constants';

const CardProducts: React.FC<CardProductsProps> = ({
  title,
  price,
  image,
  slug,
}: CardProductsProps) => {
  return (
    <article className="card card__product">
      <Link to={`product/${slug}`} className="card__wrapper">
        <figure className="card__image">
          <img src={`${REACT_APP_BASE_URL}${image}`} alt="Image card product" />
        </figure>
        <section>
          <h2 className="card__title">{title}</h2>
          <p className="card__price">
            <NumericFormat
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'US$ '}
            />
          </p>
        </section>
      </Link>
    </article>
  );
};

export default CardProducts;
