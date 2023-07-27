import React from "react";
import styles from "./Luxury.module.css";
const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h2>Luxury Selection</h2>
        <div className={styles.text_bg}>
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </span>
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1599912027611-484b9fc447af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1599912027611-484b9fc447af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1599912027611-484b9fc447af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1599912027611-484b9fc447af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
