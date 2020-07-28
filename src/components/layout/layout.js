import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-gray-600">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
