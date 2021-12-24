import { Fragment } from "react";
import ProductPage from "../../components/product-page/product-page";

function ProductDetailPage(props) {
  if (!props.loadedProduct) {
    return <p>Loading...</p>;
  }

  return <Fragment>{<ProductPage product={props.loadedProduct} />}</Fragment>;
}

async function getData() {
  const response = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const data = await response.json();

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productName = params.slug;

  const data = await getData();

  const product = data.find((product) => product.name === productName);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const productNames = data.map((product) => product.name);

  const pathsWithParams = productNames.map((name) => ({
    params: { slug: name },
  }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export default ProductDetailPage;
