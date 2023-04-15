import React from 'react';
import backgroundimg from '../../assets/backgrounhome1.png'

const HeaderPart = ({ product }) => {
  return (
    <div
      className="relative w-full  bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundimg})` ,height:'200px' }}
    >
  <h1 className='text-7xl'>testtttttttttttttttttttttttttttttssssssssssssssssss</h1>
   
    </div>
  );
};

export default HeaderPart;
