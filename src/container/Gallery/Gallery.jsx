import React,{useRef, useEffect} from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";


const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef;

    console.log(current.scrollWidth)

    if(direction === "left") {
      current.scrollLeft -= 301
    } else {
      current.scrollLeft +=301
    }
  }

  return (
  <div className="flex__center flex flex-col lg:flex-row bg-color-black pt-16 pb-16 pl-8 pr-0 lg:pl-24 sm:pl-16 overflow-x-hidden">
    <div className="flex-1 flex flex-col justify-center items-start min-w-full sm:min-w-[500px] pr-8 2xl:min-w-[1000px]">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans text-[#AAA] mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repudiandae saepe ipsam repellat, illum mollitia iure neque exercitationem possimus molestias eum porro delectus enim sed.</p>
      <button className="custom__button mt-4">View More</button>
    </div>

    <div className="flex-1 flex flex-row max-w-full lg:max-w-[50%] my-20 mx-0 lg:my-0 relative">
      <div className="flex flex-row max-w-max overflow-x-hidden" ref={scrollRef}>
        {
          galleryImages.map((image, index) => (
            <div className="group flex__center relative min-w-[240px] h-[320px] sm:min-w-[301px] sm:h-[447px] mr-4 2xl:min-w-[400px] 2xl:h-[550px]" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" className="w-full h-full object-cover opacity-100 duration-500 ease-linear group-hover:opacity-30" />
              <BsInstagram className="absolute text-[2rem] opacity-50 text-white duration-500 ease-linear cursor-pointer group-hover:opacity-100" />
            </div>
          ))
        }
      </div>
      <div className="w-full flex justify-between items-center py-0 px-4 absolute bottom-[5%]">
        <BsArrowLeftShort className="text-color-golden text-4xl cursor-pointer bg-color-black rounded-md hover:text-color-white" onClick={() => scroll("left")} />
        <BsArrowRightShort className="text-color-golden text-4xl cursor-pointer bg-color-black rounded-md hover:text-color-white" onClick={() => scroll("right")} />
      </div>
    </div>
  </div>
)
};

export default Gallery;
