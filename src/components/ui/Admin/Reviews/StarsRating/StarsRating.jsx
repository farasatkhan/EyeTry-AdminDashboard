import React from "react";

import StarFilled from "../../../../../assets/icons/star_filled.svg";
import StarUnFilled from "../../../../../assets/icons/star_unfilled.svg";

const StarsRating = ({ starsRecieved }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= starsRecieved) {
      stars.push(
        <img
          key={i}
          src={StarFilled}
          alt="star"
          className="object-contain h-full w-full"
        />
      );
    } else {
      stars.push(
        <img
          key={i}
          src={StarUnFilled}
          alt="star"
          className="object-contain h-4 w-4 shrink-0"
        />
      );
    }
  }

  return <div className="flex gap-1 h-4 w-4 shrink-0">{stars}</div>;
};

export default StarsRating;
