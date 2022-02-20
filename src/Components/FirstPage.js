import React, { useEffect, useState } from "react";
import RenderData from "./RenderData";

const Firstpage = () => {
  const [data, setData] = useState([]);

  const [isSort, setIsSort] = useState(false);
  const [sorted, setSorted] = useState([]);

  //   console.log("Rendered");

  useEffect(() => {
    fetch("http://www.mocky.io/v2/59b3f0b0100000e30b236b7e")
      .then((res) => res.json())
      .then((result) => {
        setData(result.posts);
      });
  },[]);

  const sortByDate = () => {
    setIsSort(!isSort);
    setSorted(data.sort((a, b) => a.event_date - b.event_date));
  };

  const sortByLikes = () => {
    setIsSort(!isSort);
    setSorted(data.sort((a, b) => a.likes - b.likes));
  };

  const sortByviews = () => {
    setIsSort(!isSort);
    setSorted(data.sort((a, b) => a.views - b.views));
  };

  const sortByShare = () => {
    setIsSort(!isSort);
    setSorted(data.sort((a, b) => a.shares - b.shares));
  };
  return (
    <div>
      <nav className="header">
        <button className="btn" onClick={sortByDate}>
          Sort by date
        </button>
        <button className="btn" onClick={sortByLikes}>
          Sort by likes
        </button>
        <button className="btn" onClick={sortByviews}>
          Sort by views
        </button>
        <button className="btn" onClick={sortByShare}>
          Sort by share
        </button>
      </nav>
      {isSort
        ? sorted.map((elem, index) => (
            <RenderData
              key={elem.id + index}
              img_src={elem.thumbnail_image}
              event_name={elem.event_name}
              event_date={new Date(elem.event_date).toString()}
              views={elem.views}
              likes={elem.likes}
              shares={elem.shares}
              index={index}
            />
          ))
        : data.map((elem, index) => (
            <RenderData
              key={elem.id + index}
              img_src={elem.thumbnail_image}
              event_name={elem.event_name}
              event_date={new Date(elem.event_date).toString()}
              views={elem.views}
              likes={elem.likes}
              shares={elem.shares}
              index={index}
            />
          ))}
    </div>
  );
};

export default Firstpage;
