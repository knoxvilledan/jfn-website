import React from "react";
import styles from "./home.module.css";
import HeroSection from "../components/HeroSection"; // Add this line

const Home = () => {
  return (
    <div className={`${styles.background} flex flex-col`}>
      <HeroSection /> {/* Add this line */}
      <div className={styles.container}>
        <h1 className="text-4xl font-bold animate-pulse">Under Construction</h1>
        <h2 className="text-2xl mt-4 animate-bounce">Coming Soon!</h2>
      </div>
    </div>
  );
};

export default Home;
