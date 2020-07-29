import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children, headerHr = false, footerHr = false }) => {
  return (
    <>
      <Header hr={headerHr} />
      <main className="text-gray-600">{children}</main>
      <Footer hr={footerHr} />
    </>
  );
};

export default Layout;
