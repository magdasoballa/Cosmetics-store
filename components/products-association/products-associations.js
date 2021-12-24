import SingleProduct from "../single-product/single-product";
import classes from "./products-associations.module.scss";
import { useEffect, useState } from "react";

function ProductsAssociations() {
  const [isLoading, setIsLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function fetchProductsData() {
      const response = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json"
      );
      const data = await response.json();
      setProductsData(data);
      setIsLoading(false);
    }
    fetchProductsData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={classes.productsContainer}>
      <h3>Blossom into a New You!</h3>
      <h1>Latest products</h1>
      <p>Lorem ipsum dolor sit amet.</p>

      <section className={classes.products}>
        {productsData.slice(8, 12).map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </section>
    </div>
  );
}

export default ProductsAssociations;
