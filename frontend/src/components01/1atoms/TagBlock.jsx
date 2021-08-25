import React from 'react';

import { BsArrowRight } from 'react-icons/bs';

const TagBlock = ({ title, link }) => {
  return (
    <>
      <div className="tag-block inter_regular">
        {title} <span className="dart-circle">⬤</span>
        <a href="#">
          {link} <BsArrowRight />
        </a>
      </div>
    </>
  );
};

export default TagBlock;
