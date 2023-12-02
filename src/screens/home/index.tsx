// modules
import React from "react";
// styles
import styles from "./styles.module.css";
// components
import { Header } from "../../components";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentContainer}>
        <div>
          <h4 className={styles.name}>Vlad Khrushchev</h4>
          <span>Interactive Frontend-Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
