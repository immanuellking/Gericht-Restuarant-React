import React from 'react';

import { images } from "../../constants";

const AboutUs = () => (
  <div className='app__bg flex__center section__padding relative' id="about">
    <div className="flex__center absolute inset-0">
      <img src={images.G} alt="g letter" className="sm:w-96 z-0 w-4/5 h-80" />
    </div>

    <div className="flex__center flex-col w-full z-20 lg:flex-row">
      <div className="flex-1 flex flex-col justify-end items-end text-right">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="font-fontAlt font-normal tracking-tighter capitalize leading-7 text-sm sm:text-base text-color-grey my-4 mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero optio sunt, aliquam, dolor esse quia recusandae eos mollitia fugiat eaque magnam! Delectus, perferendis perspiciatis quam eum ut laboriosam ex.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="flex__center my-16 mx-0 lg:my-8 lg:mx-16">
        <img src={images.knife} alt="about_knife" style={{height: "910px"}} />
      </div>

      <div className="flex-1 flex flex-col justify-start items-start text-left">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="font-fontAlt font-normal tracking-tighter capitalize leading-7 text-sm sm:text-base text-color-grey my-4 mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero optio sunt, aliquam, dolor esse quia recusandae eos mollitia fugiat eaque magnam! Delectus, perferendis perspiciatis quam eum ut laboriosam ex.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
