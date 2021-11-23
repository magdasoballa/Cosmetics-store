import classes from "./middle-banner.module.scss";

function MiddleBanner() {
  return (
    <div className={classes.bannerContainer}>
      <img
        src="/images/middle-banner/bg-02-free-img.jpeg"
        alt="middle-banner"
      />
      <section className={classes.content}>
        <h6>Be bold be daring</h6>
        <h1>A whole new look</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
        </p>
        <button>View more</button>
      </section>
      <section className={classes.advantages}>
        <div className={classes.singleAdvantage}>
          <div className={classes.icon}>
            <img
              src="/images/middle-banner/pngegg.png"
              alt="middle-banner-logo"
            />
          </div>
          <h1>Season sale</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        <div className={classes.singleAdvantage}>
        <div className={classes.icon}>
          <img
            src="/images/middle-banner/free-shipping-32.png"
            alt="middle-banner-logo"
          />
          </div>
          <h1>Free shipping</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        <div className={classes.singleAdvantage}>
        <div className={classes.icon}>
          <img
            src="/images/middle-banner/2412985_donate-icon-money-dark-grey-icon-png-transparent.png"
            alt="middle-banner-logo"
          />
        </div>
        <h1>Money back</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
      </section>
    </div>
  );
}

export default MiddleBanner;
