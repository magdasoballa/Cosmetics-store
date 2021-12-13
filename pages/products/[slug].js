import Head from "next/head";
import { Fragment } from "react";
import SingleProduct from "../../components/single-product/single-product";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/layout/layout";
import ProductPage from "../../components/product-page/product-page";

const products = [
  {
    image_link:
      "/images/main-page-products-pictures/coco-body-oil-300x300.jpeg",
    product_type: "Feminine Deodorants",
    name: "Coco body oil",
    price: "60.0",
  },
  {
    image_link:
      "/images/main-page-products-pictures/daily-moisturizer-300x300.jpeg",
    product_type: "Skin Fresheners",
    name: "Daily moisturiser",
    price: "45.0",
  },
  {
    image_link:
      "/images/main-page-products-pictures/night-care-cream-300x300.jpeg",
    product_type: "Balms",
    name: "Night care cream",
    price: "25.0",
  },
  {
    image_link:
      "/images/main-page-products-pictures/rose-essential-oil-300x300.jpeg",
    product_type: "Face Cream",
    name: "Rose essential oil",
    price: "30.0",
  },
];

function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  return (
        <Fragment>
          <Head></Head>
          <ProductPage product={products.find(el => el.name === slug)}/>
        </Fragment>
  );
}

export default ProductDetailPage;
