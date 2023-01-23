import React from 'react';

import { SubHeading } from "../../components";
import { images } from "../../constants"

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className="headtext__cormorant mb-12">Find Us</h1>
      <div>
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, RudHeath, CW9 7SG</p>
        <p className="p__cormorant my-8 mx-0" style={{color: "#DCCA87"}}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00am</p>
      </div>
      <button className="custom__button mt-8">Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
