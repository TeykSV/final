import React from "react";
import home from "./home.svg";
import bike1 from "./bike1.svg";
import bike2 from "./bike2.svg";
import bike3 from "./bike3.svg";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <img className="ride" src={home} alt="bike" />
      <div className="blob">
        <div>
          <span>
            Потерялся велесипед? <br />
            Не расстраивайтесь и не опускауте руки.
          </span>
        </div>
        <img src={bike2} alt="bike" />
        <div>
          <span>
            Внимательно осмотрите место где вы его оставили и сделайте фотографии этого места.
          </span>
        </div>
        <img src={bike1} alt="bike" />
        <div>
          <span>
            Cообщитe о происшествии на нашем сайте заполнив специальную форму.
          </span>
        </div>
        <img src={bike3} alt="bike" />
      </div>
    </div>
  );
};