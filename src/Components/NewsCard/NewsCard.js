import React from "react";
import './newscard.css'
import '../../Assets/no-image.png'

const NewsCard = ({ newsItem }) => {
  const fulldate = new Date(newsItem.pubDate); // Sat  Jan 09 2021  17:45:30  GMT+0530
  var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
  const hour = parseInt(date[4].substring(0, 2)); //
  const time = hour > 12 ? true : false;

  console.log(newsItem,'newsItem')
  return (
    <div className="newsCard">
      
      <img
        alt={newsItem.title}
        src={
          newsItem.image_url
            ? newsItem.image_url
            : require('../../Assets/no-image.png')
        }
        className="newsImage"
      />

      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author">
            <a href={newsItem.link} target="_blank" rel="noreferrer">
              <b>short</b>{' '}
            </a>
            <span className="muted">
              by {newsItem.creator ? newsItem.creator :" unknown "}{' '}
              / {" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
            <div className="description">{newsItem.description?newsItem.description:'Read full news by Clicking below'}</div>
            <span className="readmore">
                read more at 
                <a href={newsItem.link} target="_blank" className="source" rel="noreferrer">
              <b> {newsItem.source_id}</b>
            </a> 
            </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
