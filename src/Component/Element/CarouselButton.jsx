import { GrPrevious, GrNext } from "react-icons/gr";

// eslint-disable-next-line react/prop-types
const CarouselButton = ({ prevButtonHandler, nextButtonHandler }) => {
  return (
    <div className="carousel-button-container">
      <GrPrevious
        className="prev-button"
        onClick={() => {
          prevButtonHandler();
        }}
      />
      <GrNext className="next-button" onClick={nextButtonHandler} />
    </div>
  );
};

export default CarouselButton;
