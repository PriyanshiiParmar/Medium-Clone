const ContentDetail = ({ img, name, title, des, date_time }) => {
  return (
    <div className="random">
      <div className="content-details">
        
        <div className="cont-img-name">
          <img className="cont-img" src={img} alt=""></img>
          <span className="cont-name">{name}</span>
        </div>

        <h4 className="cont-title"><span >{title}</span>
        </h4>
        
        <h4 className="cont-des">
          <span>{des}</span>
        </h4>
        <span className="cont-date">{date_time}</span>
      </div>
      
      <div className="image-contaiainer">
        <span>
          <img className="cont-pic" src={img} alt=""></img>
        </span>
      </div>

    </div>
  );
};

export default ContentDetail;
