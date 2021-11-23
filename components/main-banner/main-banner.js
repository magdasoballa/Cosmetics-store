import classes from "./main-banner.module.scss";
import { useState, useEffect } from "react";

function MainBanner() {
  const [index, setIndex] = useState(0);
  const bannersArray = [
    "/images/main-banners/beige-banner-woman.jpeg",
    "/images/main-banners/bg-03-free-img.png",
    "/images/main-banners/green-banner-woman.jpeg",
  ];


  const next = () => {
    setIndex((i) => (i + 1) % bannersArray.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 50000);

    return () => {
      clearInterval(timer);
    };
    
  }, []);

  return (
    <div className={classes.banner}>
      <img src={bannersArray[index]} alt="test" />
      <section className={classes.title}>
        <h6>A whole new look</h6>
        <h1>Beauty pronounced</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
        <button>View more</button>
      </section>
    </div>
  );
  
  client.close()
}

export default MainBanner;
