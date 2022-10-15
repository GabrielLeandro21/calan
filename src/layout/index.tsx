import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

import { LayoutProps } from '../types/layout';

export const Layout: React.FC<{ children: JSX.Element }> = ({
  children,
}: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
