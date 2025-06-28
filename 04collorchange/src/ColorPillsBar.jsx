import React, { useState } from 'react';
const ColorPillsBar = ({color}) => {

  const [rang, setRang] =useState()

  return (
    <>
    <div className='h-screen w-full duration-200'
    style={{backgroundColor:rang}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        {color.map((c, index) => (
          <button
          onClick={()=>setRang(c.name)}
          key={index}
          className={`px-4 py-1 mx-1 rounded-full font-medium border-2 ${c.color}`}
          >
            {c.name}
          </button>
        ))}
        </div>
      </div>
    </>
  );
};

export default ColorPillsBar;
