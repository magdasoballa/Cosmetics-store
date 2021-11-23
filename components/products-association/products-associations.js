import { useEffect, useState } from "react/cjs/react.development";
import SingleProduct from "../single-product/single-product";
import classes from "./products-associations.module.scss";

function ProductsAssociations() {
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

  return (
    <div className={classes.productsContainer}>
      <h3>Blossom into a New You!</h3>
      <h1>Latest products</h1>
      <p>Lorem ipsum dolor sit amet.</p>

      <section className={classes.products}>
        {products.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </section>
    </div>
  );
}

export default ProductsAssociations;
