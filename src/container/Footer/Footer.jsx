import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"

import { FooterOverlay, Newsletter } from "../../components";
import { images } from '../../constants';

const Footer = () => (
  <div className="sm:section__padding w-full relative flex justify-start items-center flex-col bg-color-black pt-0 pb-8 px-0" style={{zIndex: 1, paddingTop: 0}}>
    <FooterOverlay />
    <Newsletter />

    <div className="z-50 w-full flex flex-col justify-between items-center lg:flex-row lg:items-start mt-20 py-0 px-0 lg:px-8">

      <div className="flex-1 my-8 lg:my-4 lg:mx-4 w-full text-center">
        <h1 className="app__footer-headtext font-fontBase text-color-white font-normal capitalize text-3xl mb-4 2xl:text-5xl">Contact Us</h1>
        <p className="p__opensans">9, W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-333-1234</p>
        <p className="p__opensans">+1 212-999-8765</p>
      </div>

      <div className="flex-1 my-8 lg:my-4 lg:mx-4 w-full text-center flex flex-col justify-center items-center">
          <img src={images.gericht} alt="footer_logo" className="w-4/5 sm:w-[210px] mb-3" />
          <p className="p__opensans">The best way to find yourself  is to lose yourself in the service of others</p>
          <img src={images.spoon} alt="spoon_img" className="spoon__img mt-4 flex__center" />
          <div className="flex mt-2">
            <FiFacebook className="text-color-white m-2 text-2xl cursor-pointer hover:text-color-golden"/>
            <FiTwitter className="text-color-white m-2 text-2xl cursor-pointer hover:text-color-golden"/>
            <FiInstagram className="text-color-white m-2 text-2xl cursor-pointer hover:text-color-golden"/>
          </div>
      </div>

      <div className="flex-1 my-8 lg:my-4 lg:mx-4 w-full text-center">
        <h1 className="font-fontBase text-color-white font-normal capitalize text-3xl mb-4 2xl:text-5xl">Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans mb-4">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="z-50 mt-12">
      <p className="p__opensans">&copy; 2022 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
