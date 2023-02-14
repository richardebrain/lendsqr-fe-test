import React from 'react';

import Star from './Star';

type props = {
    rating: number

}

const StarReview = ({ rating }: props) => {
    let stars = [];
    for (let i = 0; i < 3; i++) {
        let filled = false;
        if (i < rating) {
            filled = true;
        }
        stars.push(<Star key={i} filled={filled} />);
    }
    return (
        <div>
            {stars}
        </div>
    );
};

export default StarReview;