import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFetch from "../useFetch";
import { API_URL } from "../constants";
import MonthCard from "./MonthCard";
import Loading from "./Loading";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MonthList = () => {
  const { data: months, isPending, error } = useFetch(API_URL);

  return (
    <div className="container py-5">
      <h3
        className="mb-4 fs-5 fw-bold text-secondary"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        မြန်မာလများ
      </h3>
      {error && <div>{error}</div>}
      {isPending && <Loading />}
      {months && (
        <Carousel
          draggable={false}
          swipeable={true}
          responsive={responsive}
          infinite={false}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {months.map((month) => (
            <MonthCard month={month} key={month.id} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default MonthList;
