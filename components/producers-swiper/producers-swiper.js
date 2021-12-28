import classes from "./producers-swiper.module.scss";

function ProducersSwiper() {
  const logosArr = [
    "/images/producers-logo/logo-1.svg",
    "/images/producers-logo/logo-2.svg",
    "/images/producers-logo/logo-3.svg",
    "/images/producers-logo/logo-4.svg",
    "/images/producers-logo/logo-5.svg",
    "/images/producers-logo/logo-1.svg",
    "/images/producers-logo/logo-2.svg",
    "/images/producers-logo/logo-3.svg",
    "/images/producers-logo/logo-4.svg",
    "/images/producers-logo/logo-5.svg",
  ];

  return (
    <div className={classes.producersContainer}>
      <div className={classes.slider}>
        <div className={classes.slideTrack}>
          {logosArr.map((el) => (
            <div className={classes.slide} key={logosArr.indexOf(el)}>
              <img src={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProducersSwiper;
