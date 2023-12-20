import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./CarouselImages.module.scss";
import image1 from "../../assets/images/metro1.jpg";
import image2 from "../../assets/images/metro2.jpg";
import image3 from "../../assets/images/metro3.jfif";
const CarouselImages = () => {
  return (
    <div className={styles.wrapper_carousel}>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={true}
        showStatus={false}
        interval={3000}
      >
        <div className={styles.slide_wrapper}>
          <img src={image1} />
        </div>
        <div className={styles.slide_wrapper}>
          <img src={image2} />
        </div>
        <div className={styles.slide_wrapper}>
          <img src={image3} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselImages;
