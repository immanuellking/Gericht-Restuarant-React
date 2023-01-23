import React from 'react';

import { SubHeading } from "../../components";
import { images, data } from "../../constants";

const AwardCard = ({award : {imgUrl, title, subtitle}}) => (
  <div className="flex-1 flex justify-start items-start my-4 mx-0 sm:m-4 min-w-full  sm:min-w-[230px] 2xl:min-w-[320px]" >
    <img src={imgUrl} alt="award" className="w-[50px] h-[50px]" />
    <div className="flex flex-col ml-4">
      <p className="p__cormorant" style={{color: "#DDCA87"}} >{title}</p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
)



const Laurels = () => (
  <div className="app__bg app__wrapper section__padding " id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="flex justify-start items-center flex-wrap mt-12">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
