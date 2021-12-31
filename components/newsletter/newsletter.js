import classes from "./newsletter.module.scss";
import { useRef } from "react";
import React from "react";

function Newsletter(props) {
  const emailInputRef = useRef();

  function sendNewsletter() {
    const enteredEmail = emailInputRef.current.value;
    props.newsletter(enteredEmail);
  }
  return (
    <div className={classes.newsletterContainer}>
      <h1>Sign up the makeup fan club</h1>
      <div className={classes.subscriptionData}>
        <input
          placeholder="Enter you email address"
          type="email"
          id="email"
          ref={emailInputRef}
        />
        <button onClick={sendNewsletter}>Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
