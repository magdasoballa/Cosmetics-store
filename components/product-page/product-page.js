import classes from "./product-page.module.scss";
import Link from 'next/link';
import { useRouter } from 'next/router'


function ProductPage(props) {
  const router = useRouter()
  const { slug } = router.query
  var {product} = props
  const linkPath = `/products/${props.product.name}`
    return (
      <Link href={linkPath}>
      <a>
      <div className={classes.productContainer}>
        <img className={classes.picture} src={product.image_link} />
        <div>
        <p>{product.product_type}</p>
        <h2>{product.name}</h2>
        <p className={classes.price}>${product.price.padEnd(2, 0)}0</p>
        </div>
      </div>
      </a>
      </Link>
    );
  }

export default ProductPage;
