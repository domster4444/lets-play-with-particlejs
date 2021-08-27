import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
const TagBlockWrapper = styled.div`
  background-color: rgba(0, 148, 255, 0.26);
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DartCircle = styled.div`
  margin: 0rem 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;

const TagBlock = ({ title, link }) => {
  return (
    <>
      <TagBlockWrapper>
        {title} <DartCircle>⬤</DartCircle>
        <a href="#">
          {link} <BsArrowRight />
        </a>
      </TagBlockWrapper>
    </>
  );
};

export default TagBlock;
