import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

function Rating(props) {
  const rating = Math.round(props.rating * 2) / 2; // round to nearest half
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FaStar key={i} className="h-4 w-4 text-yellow-400" />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<FaStarHalfAlt key={i} className="h-4 w-4 text-yellow-400" />);
    } else {
      stars.push(<FaStar key={i} className="h-4 w-4 text-gray-400" />);
    }
  }

  return (
    <div>
      <div className='flex'>
        {stars}  </div>
     <span className='text-xs pl-2' > {props.numreviews} Reviews</span>
    
    </div>
  );
}

export default Rating;
