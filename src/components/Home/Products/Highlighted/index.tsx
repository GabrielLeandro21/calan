import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../../services/products.service';
import { ProductsProps } from '../../../../types/products';
import Button from '../../../Button/Link';
import CardProducts from '../../../Card/Products';

const ProductsHighlighted: React.FC = () => {
  const [highlightedProduct, setHighlightedProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const getHighlightedProduct = async () => {
    try {
      setLoading(true);
      const { data } = await getProducts();
      setHighlightedProduct(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getHighlightedProduct();
    })();
  }, []);

  const necessaryItems = highlightedProduct.slice(0, 4);

  return (
    <section className="products">
      <h2 className="products__title">New ceramics</h2>
      <div className="products__wrapper">
        {necessaryItems.map(({ attributes }: ProductsProps) => (
          <CardProducts
            key={attributes.title}
            image={attributes.image.data.attributes.url}
            title={attributes.title}
            price={attributes.price}
            slug={attributes.slug}
          />
        ))}
      </div>

      <Button title="View collection" href="#" />
    </section>
  );
};

export default ProductsHighlighted;
