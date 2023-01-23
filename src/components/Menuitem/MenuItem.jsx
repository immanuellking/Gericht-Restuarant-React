import React from 'react';

const MenuItem = ({ title, price, tags}) => (
  <div className="w-full my-4 flex flex-col">
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <p className="p__cormorant" style={{color: "#DCCA87"}}>{title}</p>
      </div>

      <div className="w-24 h-px bg-color-golden my-0 mx-4" />

      <div className="flex justify-end items-end">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="w-full mt-1">
      <p className="p__opensans" style={{color: "#AAA"}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
