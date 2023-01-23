import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className="app__newsletter py-8 px-0  sm:py-8 sm:px-16 border-none sm:border-[1px] border-color-golden bg-color-black z-50" >
    <div className="app__newsletter-heading menu_fits text-center">
      <SubHeading title="NewsLetter" />
      <h1 className="headtext__cormorant text-3xl sm:text-6xl">Subscribe To Our News Letter</h1>
      <p className="p__opensans">And never miss our latest updates</p>
    </div>
    <div className="app_newletter-input flex__center flex-col w-full lg:flex-row mt-12">
      <input type="email" placeholder="Enter your Email" className="lg:w-[620px] border-[1px] border-color-golden rounded-md text-base 2xl:text-3xl font-fontBase text-color-white w-full mr-0 mb-8 lg:mb-0 lg:mr-8 py-3 px-4 bg-color-black" />
      <button className="custom__button w-max">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
