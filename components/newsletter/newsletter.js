import classes from "./newsletter.module.scss";

function Newsletter() {
  return (
    <div className={classes.newsletterContainer}>
      <h1>Sign up the makeup fan club</h1>
      <div className={classes.subscriptionData}>
        <input placeholder="Enter you email address" type="text" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
