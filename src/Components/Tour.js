import React, { useState } from "react";
export default Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div class="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div class="tour-info">
          <h4>{name}</h4>
          <h4 class="tour-price">${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...  `}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show less" : "Read more"}
        </button>
        <button onClick={() => removeTour(id)} className="delete-btn">
          Not interested
        </button>
      </footer>
    </div>
  );
};
