import React from "react";
import Drive from "../../images/drive.png";
import styles from "./Driver.module.css";
const Driver = () => {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <img src={Drive} alt="" />
      </div>
      <div className={styles.right}>
        <h2>
          Find your perfect <span>driver and car</span> and enjoy the ride.
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quae
          harum dolor distinctio eveniet voluptatum sit eum laborum! Vitae
          inventore beatae non nihil, debitis obcaecati minus possimus vero
          molestiae aliquid!
        </p>
        <button>Browser Cars</button>
      </div>
    </div>
  );
};

export default Driver;
