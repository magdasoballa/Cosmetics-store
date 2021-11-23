import { useEffect, useState } from "react/cjs/react.development";
import classes from "./reviews.module.scss";

function Reviews() {
    const [index, setIndex] = useState(0);
      const reviews = [
    {
      content:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."',
      picture: "/images/reviews/customer4.jpeg",
      name: "Marilyn Keller",
    },
    {
      content:
        '"Contrary to popular belief, Lorem Ipsum s not simply random text. It has roots in a piece of classical."',
      picture:
        "/images/reviews/photo-1476485010923-08421403348c.jpeg",
      name: "Amy Withahat",
    },
  ];

  const next = () => {
    setIndex((i) => (i + 1) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
    
  }, []);

  return (
    <div className={classes.reviewsContainer}>
      <div className={classes.image}>
      <div className={classes.content}>
        <div className={classes.title}>Testimonials</div>
        <h1>Our happy clients</h1>
        <p>{reviews[index].content}</p>
        <img src={reviews[index].picture} />
        <div className={classes.name}>{reviews[index].name}</div>
      </div>
      </div>
    </div>
  );
}

export default Reviews;
