import React from 'react';

import { images } from "../../constants";
import { SubHeading } from '../../components';


const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_img" className="w-4/5 sm:w-96" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="flex flex-col w-full mt-20">
        <div className="flex justify-start items-end">
          <img src={images.quote} alt="quote" className="w-12 h-10 mb-4 mr-4" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, nemo?</p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quisquam laboriosam repellendus. Porro, voluptas soluta omnis deserunt provident at unde ab reprehenderit officia vero quod hic eaque ratione voluptates non.
        </p>
      </div>

      <div className="w-full mt-12">
        <p className="font-fontBase font-normal text-3xl text-color-golden">Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" className="w-64 mt-12" />
      </div>
    </div>
  </div>
);

export default Chef;
