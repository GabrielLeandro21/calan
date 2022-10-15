import React from 'react';
import { Layout } from './layout';
import { Home } from './pages/Home';

export const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};
