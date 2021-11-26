import Head from 'next/head';
import { Fragment } from 'react';
import Layout from '../../components/layout/layout';
import ProductsSection from '../../components/products-section/products-section'

function AllProductsPage() {
  return (
    <Fragment>
      <Head>
        <title>Products page</title>
      </Head>
      <ProductsSection />
    </Fragment>
  );
}

export default AllProductsPage;
