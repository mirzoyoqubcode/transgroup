import React from "react";
import CarouselImages from "../../subcomponents/Carousel/CarouselImages";
import Navbar from "../Navbar/Navbar";
import styles from "./Main.module.scss";
import Header from "../Header/Header";
import Feature from "../Features/Feature";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className={styles.body}>
      <div className={styles.body_header}>
        <CarouselImages />
        <Navbar />
        <Header />
      </div>
      <Feature />
      <Footer />
    </div>
  );
};

export default Main;
