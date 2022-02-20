import { faCoffee } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const RenderData = (props) => {
  const { img_src, event_name, event_date, views, likes, shares, index } =
    props;
  return (
    <div className="container">
      <h1>{event_name}</h1>
     
      <img alt={`Image ${index + 1}`} src={img_src} className="image" />
      <div className="conatiner_like_view_share">
        <p className="like container_para">
        <FontAwesomeIcon
        icon="fa-solid fa-heart"
        className="font_awesome font_awesome_first"
        />
          {likes}
        </p>
        <p className="view container_para">
          <FontAwesomeIcon
            icon="fa-solid fa-eye"
            className="font_awesome font_awesome_second"
          />
          {views}
        </p>
        <p className="share container_para">
          <FontAwesomeIcon
            icon="fa-solid fa-share"
            className="font_awesome font_awesome_third"
          />
          {shares}
        </p>
      </div>
      <p className="date">{event_date}</p>
    </div>
  );
};

export default RenderData;
