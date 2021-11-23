import { useEffect, useState } from "react/cjs/react.development";
import SingleProduct from "../single-product/single-product";
import classes from "./products-section.module.scss";

function ProductsSection() {
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
      <h3>A Brush of Perfection</h3>
      <h1>Add a flavor to being a girl</h1>
      <p>Lorem ipsum dolor sit amet, consectetur.</p>
    
      <section className={classes.products}>
          {productsData.slice(423,431).map((product) => (
            <SingleProduct product={product} key={product.id}/>
          ))}
      </section>
    </div>
  );
}

export default ProductsSection;
