import React, {useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md"

import images from "../../constants/images"

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  
  return (
  <nav className="w-full flex justify-between items-center bg-color-black p-4 sm:py-4 sm:px-8" >
    <div className="flex justify-start items-center">
      <img src={images.gericht} alt="app logo" className="w-28 sm:w-36 2xl:w-52" />
    </div>

    <ul className="flex-1 hidden lg:flex justify-center items-center">
      <li className="p__opensans mx-4 hover:text-color-gray"><a href="#home">Home</a></li>
      <li className="p__opensans mx-4 hover:text-color-gray"><a href="#about">About</a></li>
      <li className="p__opensans mx-4 hover:text-color-gray"><a href="#menu">Menu</a></li>
      <li className="p__opensans mx-4 hover:text-color-gray"><a href="#awards">Awards</a></li>
      <li className="p__opensans mx-4 hover:text-color-gray"><a href="#contact">Contact</a></li>
    </ul>

    <div className="hidden sm:flex justify-end items-center">
      <a href="#login" className="p__opensans mx-4 transition-all duration-500 border-b border-b-black hover:border-b hover:border-b-color-golden" >
        Log In / Register
      </a>
      <div className="w-px h-7 bg-color-gray" />
      <a href="/" className="p__opensans mx-4 transition-all duration-500 border-b border-b-black hover:border-b hover:border-b-color-golden" >Book Table</a>
    </div>


    {/* Navigation Bar for Smaller Screen */}

    <div className="flex lg:hidden">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {setToggleMenu(true)}} />


      {toggleMenu && ( 
      <div className="flex__center slide-bottom fixed top-0 left-0 w-full h-screen bg-color-black transition-all duration-500 ease-linear flex-col z-50">
        <MdOutlineRestaurantMenu className="text-color-golden cursor-pointer absolute top-5 right-5" fontSize={27} onClick={() => {setToggleMenu(false)}} />
        <ul className="">
          <li className="my-8 text-color-golden text-3xl text-center font-fontBase hover:text-color-white"><a href="#home">Home</a></li>
          <li className="my-8 text-color-golden text-3xl text-center font-fontBase hover:text-color-white"><a href="#about">About</a></li>
          <li className="my-8 text-color-golden text-3xl text-center font-fontBase hover:text-color-white"><a href="#menu">Menu</a></li>
          <li className="my-8 text-color-golden text-3xl text-center font-fontBase hover:text-color-white"><a href="#awards">Awards</a></li>
          <li className="my-8 text-color-golden text-3xl text-center font-fontBase hover:text-color-white"><a href="#contact">Contact</a></li>
        </ul>
        <div className="flex sm:hidden justify-end items-center">
          <a href="#login" className="p__opensans mx-4 transition-all duration-500 border-b border-b-black hover:border-b hover:border-b-color-golden" >
           Log In / Register
          </a>
          <div className="w-px h-7 bg-color-gray" />
          <a href="/" className="p__opensans mx-4 transition-all duration-500 border-b border-b-black hover:border-b hover:border-b-color-golden" >Book Table</a>
        </div>
      </div>
      )};

    </div>

  </nav>
);
};
 
export default Navbar;
