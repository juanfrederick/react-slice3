import { useState } from "react";

const Slider = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  //   setInterval(() => {
  //     if (first) {
  //       setFirst(false);
  //       setSecond(true);
  //     } else if (second) {
  //       setSecond(false);
  //       setThird(true);
  //     } else {
  //       setThird(false);
  //       setFirst(true);
  //     }
  //   }, 10000);

  return (
    <div className="slider-container">
      {first ? (
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="mountain"
        />
      ) : undefined}
      {second ? (
        <img
          src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="mountain"
        />
      ) : undefined}
      {third ? (
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="mountain"
        />
      ) : undefined}
      <div className="slider-btn-container">
        <button
          onClick={() => {
            setFirst(true);
            setSecond(false);
            setThird(false);
          }}
        >
          first
        </button>
        <button
          onClick={() => {
            setSecond(true);
            setFirst(false);
            setThird(false);
          }}
        >
          middle
        </button>
        <button
          onClick={() => {
            setThird(true);
            setFirst(false);
            setSecond(false);
          }}
        >
          last
        </button>
      </div>
    </div>
  );
};

export default Slider;
