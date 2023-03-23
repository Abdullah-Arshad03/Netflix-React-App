import React from 'react';

function Cards(props) {

    return (
      <>
        <div className="cards">
          <div className="card">
          <div className="image">
            <img src={props.imgsrc} alt="dark series" className="card_img" />
            </div>
            <div className="card_info">
              <span className="card_category">{props.Category}</span>
              <h3 className="card_title"> {props.SeriesName} </h3>
              {/* link  */}
              <a href={props.link}>
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  export {Cards};
  