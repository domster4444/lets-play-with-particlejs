import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const InfoCard = (props) => {
  return (
    <>
      <div className="info-card">
        <img src={props.image} alt="card template description-here" />
        <h2 className="aeonik_bold">{props.title}</h2>
        <p className="inter_regular">{props.description}</p>
        <a href="" className="inter_regular">
          Learn more <BsArrowRight />
        </a>
      </div>
    </>
  );
};

export default InfoCard;
