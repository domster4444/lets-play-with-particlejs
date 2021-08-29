import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

const Infocard = styled.a`
  overflow: hidden;
  margin: 1rem;
  width: 25rem;
  text-decoration: none;
  border: 1px solid rgb(50, 49, 49);
  border-radius:2rem;
padding: 2rem 2rem;
  transition: all 0.6s ease;
  &:hover {
    transition: all 0.2s ease;
    transform: scale(1.03);
    img {
      transform: scale(1.2);
    }
  }
`;
const CardImg = styled.img`
  width: 100%;
`;
const CardTitle = styled.h2`
  color: white;
  margin-top: 1.5rem;
`;
const CardParagraph = styled.p`
  margin-top: 1.5rem;
  color: #7a8087;
  font-size: 1.5rem;
`;
const CardLink = styled.a`
  font-size: 1.5rem;
`;

const InfoCard = (props) => {
  return (
    <>
      <Infocard href="https://google.com">
        <CardImg src={props.image} alt="card template description-here" />
        <CardTitle className="aeonik_bold">{props.title}</CardTitle>
        <CardParagraph className="inter_regular">
          {props.description}
        </CardParagraph>
        <CardLink href="" className="inter_regular">
          Learn more <BsArrowRight />
        </CardLink>
      </Infocard>
    </>
  );
};

export default InfoCard;
