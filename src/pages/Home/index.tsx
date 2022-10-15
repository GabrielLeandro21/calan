import React from 'react';
import Feature from '../../components/Home/Feature';
import ProductsHighlighted from '../../components/Home/Products/Highlighted';
import ProductsPopular from '../../components/Home/Products/Popular';
import Subscribe from '../../components/Subscribe';

const MookProducts = [
  {
    price: '$32.32',
    title: 'The Dandy chair',
    image:
      'https://plus.unsplash.com/premium_photo-1664007755672-31c856f74ac3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    price: '$32.32',
    title: 'Rustic Vase Set',
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    price: '$32.32',
    title: 'The Silky Vase',
    image:
      'https://plus.unsplash.com/premium_photo-1664007755672-31c856f74ac3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    price: '$32.32',
    title: 'The Lucy Lamp',
    image:
      'https://plus.unsplash.com/premium_photo-1664007755672-31c856f74ac3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

const features = [
  {
    image: 'https://cdn-icons-png.flaticon.com/512/263/263142.png',
    title: 'Next day as standard',
    description: 'Order before 3pm and get your order the next day as standard',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/263/263142.png',
    title: 'Made by true artisans',
    description:
      'Handmade crafted goods made with real passion and craftmanship',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/263/263142.png',
    title: 'Unbeatable prices',
    description:
      'For our materials and quality you won’t find better prices anywhere',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/263/263142.png',
    title: 'Recycled packaging',
    description:
      'We use 100% recycled packaging to ensure our footprint is manageable',
  },
];
export const Home: React.FC = () => {
  return (
    <>
      <Feature feature={features} />
      <ProductsHighlighted products={MookProducts} />
      <ProductsPopular products={MookProducts} />
      <Subscribe />
    </>
  );
};
