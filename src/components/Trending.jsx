// import React from "react";
const Trending = ({ id, img, title, des, date_time }) => {
  return (
     <div className="trend-items">
      <div className="trend-img-title"> 
       <img className ="trend-img"src={img} alt="" />
      <span className="trend-title">{title}</span>
      </div>
   
      <h4 className="trend-des">{des}</h4>
      <h5 className="trend-date">{date_time}</h5>
    </div>
    
  );
};
export default Trending;
