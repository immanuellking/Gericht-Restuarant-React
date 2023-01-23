import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';


const Header = () => (
    <div className="app__wrapper section__padding bg-color-black" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="font-fontBase text-color-golden uppercase text-8xl">The Key to Fine Dining</h1>
        <p className="p__opensans my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus inventore veniam natus? Debitis, maxime ducimus aspernatur delectus voluptates deserunt ad a. Consectetur quas quis tempora aperiam quibusdam iure. Nam?</p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
);

export default Header;
