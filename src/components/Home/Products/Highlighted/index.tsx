import React from 'react';
import { productsProps } from '../../../../types/products';
import Button from '../../../Button';
import CardProducts from '../../../Card/Products';

const ProductsHighlighted: React.FC<productsProps> = ({ products }: productsProps) => {
  return (
    <section className="products">
      <h2 className='products__title'>New ceramics</h2>
      <div className="products__wrapper">
        {products.map(({ title, image, price }) => (
          <CardProducts key={title} image={image} title={title} price={price} />
        ))}
      </div>

      <Button title="View collection" href="#" />
    </section>
  );
};

export default ProductsHighlighted;
