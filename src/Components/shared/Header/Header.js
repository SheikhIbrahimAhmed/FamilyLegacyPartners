import React from 'react';
import image from  '../../../assets/Family Legacy.png';

const Header = () => {

  return (
    <div className='mt-4 flex items-center justify-center'>
      <img className='mx-auto' src={image} alt="Family Legacy" />
    </div>
  );
}

export default Header;

