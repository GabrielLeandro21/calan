import React from 'react';

import { LayoutProps } from '../types/layout';

export const Layout: React.FC<{ children: JSX.Element }> = ({
  children,
}: LayoutProps) => {
  return (
    <>
      Header
      <main>{children}</main>
    </>
  );
};
