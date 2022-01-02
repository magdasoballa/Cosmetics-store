import classes from "./product-page.module.scss";
import Link from "next/link";

function ProductPage(props) {
  const { product } = props;
  return (
    <div className={classes.productContainer}>
      <img className={classes.picture} src={product.image_link} />
      <div>
        <p>{product.product_type}</p>
        <h2>{product.name}</h2>
        <p className={classes.price}>${product.price.padEnd(2, 0)}0</p>
      </div>
    </div>
  );
}

export default ProductPage;
