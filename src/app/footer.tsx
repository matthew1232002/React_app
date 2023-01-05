import React from 'react';
import plusIcon from '~/assets/images/plus_icon.svg';
import mouseIcon from '~/assets/images/mouse_icon.svg';


const Footer = () => {
  return (
    <footer className="mb-12 text-[#909090]">
      To leave a comment, mouseover <img alt='icon' className='inline-block' src={plusIcon}/> on an image and click the left mouse button <img alt='icon' className='inline-block' src={mouseIcon}/>
    </footer>
  );
};

export default Footer;