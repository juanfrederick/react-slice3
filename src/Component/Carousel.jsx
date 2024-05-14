import { useState } from "react";
import CarouselButton from "./Element/CarouselButton";

const Carousel = () => {
  const image = [
    {
      id: 1,
      link: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    },
    {
      id: 2,
      link: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      link: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    },
  ];

  const [dotPointer, setDotPointer] = useState(1);
  const [lastImage, SetLastImage] = useState(1);
  const [firstImage, setFirstImage] = useState(false);
  const [thirdImage, setThirdImage] = useState(false);

  const prevButtonHandler = () => {
    SetLastImage(3);
    if (dotPointer === 1) {
      setThirdImage(true);
      setDotPointer(3);
    } else {
      setThirdImage(false);
      setDotPointer(dotPointer - 1);
    }
  };

  const nextButtonHandler = () => {
    SetLastImage(1);
    if (dotPointer === 3) {
      setFirstImage(true);
      setDotPointer(1);
    } else {
      setFirstImage(false);
      setDotPointer(dotPointer + 1);
    }
  };

  return (
    <div className="carousel-container">
      <CarouselButton
        prevButtonHandler={prevButtonHandler}
        nextButtonHandler={nextButtonHandler}
      />
      <h1>Lorem ipsum</h1>
      <div className="image-container">
        {dotPointer === 1 ? (
          <img
            src={image[0].link}
            alt="picture"
            className={`${
              firstImage ? "image-animation-rl" : "image-animation-lr"
            }`}
          />
        ) : undefined}
        {dotPointer === 2 ? (
          <img
            src={image[1].link}
            alt="picture"
            className={
              lastImage === 1
                ? "image-animation-rl"
                : lastImage === 3
                ? "image-animation-lr"
                : ""
            }
          />
        ) : undefined}
        {dotPointer === 3 ? (
          <img
            src={image[2].link}
            alt="picture"
            className={`${
              thirdImage ? "image-animation-lr" : "image-animation-rl"
            }`}
          />
        ) : undefined}
      </div>
      <div className="dot-container">
        <div
          className={`dot ${dotPointer === 1 ? "dot-active" : undefined}`}
          onClick={() => {
            setDotPointer(1);
            SetLastImage(1);
            setFirstImage(false);
          }}
        ></div>
        <div
          className={`dot ${dotPointer === 2 ? "dot-active" : undefined}`}
          onClick={() => {
            setDotPointer(2);
          }}
        ></div>
        <div
          className={`dot ${dotPointer === 3 ? "dot-active" : undefined}`}
          onClick={() => {
            setDotPointer(3);
            SetLastImage(3);
            setThirdImage(false);
          }}
        ></div>
      </div>
    </div>
  );
};

export default Carousel;
