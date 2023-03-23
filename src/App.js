import React from "react";
import { Cards } from "./Cards";
import { Sdata } from "./Sdata";
import "./index.css";



function App() {
  return (
    <>
      <div className="heading">
        <h1>LIST OF TOP 6 NETFLIX SERIES IN 2023</h1>
      </div>

      <div className="netflix_cards">
        {Sdata.map((card) => {
          return (
            <Cards
              imgsrc={card.imgsrc}
              Category={card.Category}
              SeriesName={card.SeriesName}
              link={card.link}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
