import React from 'react';
import './card.styles.css';

const Card = (props) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img
        src={`https://robohash.org/${props.robot.id}?size=200x200`}
        alt='robotImage'
      />
      <h2> {props.robot.name}</h2>
      <p> {props.robot.email}</p>
    </div>
  );
};

export default Card;
