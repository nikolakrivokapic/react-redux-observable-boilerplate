import propTypes from 'prop-types';
import React from 'react';

const Card = ({src}) => (
    <div>
        <img src={src} alt="test" />
    </div>
);

Card.propTypes = {
    src: propTypes.string,
};

export default Card;
