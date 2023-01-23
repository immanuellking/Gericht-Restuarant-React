import React from 'react';


const FooterOverlay = () => (
  <div className="app__footerOverlay w-full h-full flex flex-col absolute z-10" >
    <div className="app__footerOverlay-black h-1/4 bg-color-black"></div>
    <div className="app__footerOverlay-img app__bg h-3/4"></div>
  </div>
);

export default FooterOverlay;
