import React from 'react';
import { productsProps } from '../../../../types/products';
import Button from '../../../Button';
import CardProducts from '../../../Card/Products';

const ProductsPopular: React.FC<productsProps> = ({
  products,
}: productsProps) => {
  const necessaryItems = products.slice(0, 3);
  return (
    <section className="products">
      <h2 className="products__title">Our popular products</h2>
      <div className="products__wrapper products__wrapper--grid">
        {necessaryItems.map(({ title, image, price }) => (
          <CardProducts key={title} image={image} title={title} price={price} />
        ))}
      </div>

      <Button title="View collection" href="#" />
    </section>
  );
};

export default ProductsPopular;
