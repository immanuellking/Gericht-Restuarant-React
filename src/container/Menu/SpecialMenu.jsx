import React from 'react';

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants"

const SpecialMenu = () => (
  <div className="flex__center section__padding flex-col bg-color-black">
    <div className="mb-8 menu_fits">
      <SubHeading title="Menu That Fits Your Palette" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="w-full my-8 mx-0 flex flex-col justify-center items-center xl:items-start xl:flex-row">
      {/* LEFT SIDE MENU WINE & BEER*/}
      <div className="flex__center flex-1 w-full flex-col">
        <p className="font-fontBase font-semibold text-4xl sm:text-5xl tracking-wider leading-10 text-color-white">Wine & Beer</p>
        <div className="flex flex-col my-8 mx-0 w-full">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      {/* TODAYS SPECIAL IMAGE */}
      <div className="w-full sm:w-96 my-12 xl:my-0 xl:mx-0 menu_img">
        <img src={images.menu} alt="menu_img" className="w-full h-auto" />
      </div>

      {/* RIGHT SIDE MENU COCKTAILS*/}
      <div className="flex__center flex-1 w-full flex-col">
        <p className="font-fontBase font-semibold text-5xl tracking-wider leading-10 text-color-white">Cocktails</p>
        <div className="flex flex-col my-8 mx-0 w-full">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div className="mt-4">
      <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
