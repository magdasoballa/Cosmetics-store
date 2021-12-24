import SingleProduct from "../single-product/single-product";
import classes from "./products-section.module.scss";

function ProductsSection({ products }) {
  return (
    <div className={classes.productsContainer}>
      <h3>A Brush of Perfection</h3>
      <h1>Add a flavor to being a girl</h1>
      <p>Lorem ipsum dolor sit amet, consectetur.</p>

      <section className={classes.products}>
        {products.slice(423, 431).map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </section>
    </div>
  );
}

export default ProductsSection;
