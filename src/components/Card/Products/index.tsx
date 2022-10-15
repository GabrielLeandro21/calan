import React from 'react';
import { CardProductsProps } from '../../../types/cards/products';

const CardProducts: React.FC<CardProductsProps> = ({ title, price, image }: CardProductsProps) => {
  return (
    <article className="card card__product">
      <a href="" className="card__wrapper" target={'_blank'}>
        <figure className="card__image">
          <img src={image} alt="Image card prodct" />
        </figure>
        <section>
          <h2 className="card__title">{title}</h2>
          <p className="card__price">{price}</p>
        </section>
      </a>
    </article>
  );
};

export default CardProducts;
