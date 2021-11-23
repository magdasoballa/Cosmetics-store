import classes from "./single-product.module.scss";

function SingleProduct({ product }) {
    return (
      <div className={classes.productContainer}>
        <img className={classes.picture} src={product.image_link} />
        <p>{product.product_type}</p>
        <h2>{product.name}</h2>
        <p className={classes.price}>${product.price.padEnd(2, 0)}0</p>
      </div>
    );
  }


export default SingleProduct;
