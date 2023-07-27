import React from "react";
import styles from "./Hero.module.css";
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <form action="">
        <div className={styles.text}>
          <label htmlFor="where">Where</label>
          <input
            className={styles.text_input}
            type="text"
            id="where"
            name="where"
            placeholder="Search Location"
          />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label htmlFor="">From</label>
          <input type="date" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label htmlFor="">Until</label>
          <input type="date" />
        </div>
        <div className={styles.search_btn}>
          <AiOutlineSearch size={25} className={styles.icon} />
          <button className={styles.btn}>Search for cars</button>
        </div>
      </form>
    </section>
  );
};

export default Hero;
