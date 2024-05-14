import { useEffect, useState } from "react";
import Span from "../Component/Span";

const Landing = () => {
  const [secondLine, setSecondLine] = useState(false);
  const [thirdLine, setThirdLine] = useState(false);
  const [fourthLine, setFourthLine] = useState(false);
  const [fifthLine, setFifthLine] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if (window.scrollY > 0) {
      setSecondLine(true);
    } else {
      setSecondLine(false);
    }

    if (window.scrollY > 50) {
      setThirdLine(true);
    } else {
      setThirdLine(false);
    }

    if (window.scrollY > 100) {
      setFourthLine(true);
    } else {
      setFourthLine(false);
    }

    if (window.scrollY > 150) {
      setFifthLine(true);
    } else {
      setFifthLine(false);
    }

    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        setRerender(!rerender);
      } else if (window.scrollY > 100) {
        setRerender(!rerender);
      } else {
        setRerender(!rerender);
      }
    });
  }, [rerender]);

  return (
    <div className="landing-container">
      <h1>
        <Span classname="active">Lorem ipsum dolor sit consectetur.</Span>{" "}
        <Span classname={secondLine ? "active" : undefined}>
          Neque dolores expedita Lorem.
        </Span>{" "}
        <Span classname={thirdLine ? "active" : undefined}>
          facere voluptate ipsum!
        </Span>{" "}
        <Span classname={fourthLine ? "active" : undefined}>
          Voluptates blandi tiistenetur optio
        </Span>{" "}
        <Span classname={fifthLine ? "active" : undefined}>
          consectetur adipisicing elit?
        </Span>
      </h1>
    </div>
  );
};

export default Landing;
