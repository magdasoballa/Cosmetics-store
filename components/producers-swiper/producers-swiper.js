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
  let randomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={classes.producersContainer}>
      <div className={classes.slider}>
        <div className={classes.slideTrack}>
          {logosArr.map((el, i) => (
            <div className={classes.slide} key={randomNumber[i]}>
              <img src={el} />
            </div>
          ))}
          {randomNumber}
        </div>
      </div>
    </div>
  );
}

export default ProducersSwiper;
