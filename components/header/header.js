import Image from "next/image";
import classes from "./header.module.scss";
import Link from "next/link";
import { BsHeart} from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc'
import { FiShoppingBag } from 'react-icons/fi'

function Header() {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.image}>
        <Link href="/">
          <a>
            <Image
              src="/images/main-logo.png"
              alt="Cosmetics logo"
              width={180}
              height={39}
            />
          </a>
        </Link>
      </div>
      <nav>
        <ul className={classes.navigation}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={classes.icons}>
          <div><BsHeart/></div>
          <div><VscAccount/></div>
          <div><FiShoppingBag/></div>
          </li>
        </ul >
      </nav>
    </div>
  );
}

export default Header;
