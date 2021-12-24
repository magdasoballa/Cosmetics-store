import { Fragment } from "react";
import ProductsSection from "../../components/products-section/products-section";

export default function AllProductsPage({ products }) {
  return (
    <Fragment>
      <ProductsSection products={products} />
    </Fragment>
  );
}

export async function getStaticProps() {
  console.log("re-generating");
  const response = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const products = await response.json();

  if (!products) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  if (products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products,
    },
    revalidate: 1,
  };
}
