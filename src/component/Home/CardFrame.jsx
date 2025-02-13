import React, { useEffect, useRef } from 'react';
import { BiDownload } from 'react-icons/bi';
import { toJpeg } from 'html-to-image';
import dancing_font from "../../font/DancingScript.ttf"

const CardFrame = ({ item, name, heading, image }) => {
  const cardRef = useRef();

  async function handleDownload () {
    if (cardRef.current) {
      try {
        const dataUrl = await toJpeg(cardRef.current ,{
          canvasWidth: 375,
          style:{
            margin: "0",
          }
        });
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${heading}-card.jpeg`;
        link.click();
      } catch (error) {
        console.error('Error downloading the card:', error);
      }
    }
  };

  return (
    <div className='flex justify-between'>
      <div
        ref={cardRef}
        className='w-[375px] sm:w-[400px] h-[500px] border shadow-lg m-4 rounded-lg p-2 flex flex-col justify-evenly bg-white'
      >
        <h1 className='text-5xl text-center fontfamily'>{heading}</h1>
        <img src={image} alt="" className='w-[100%] h-[200px]' />
        <p className='text-center text-[20px]'>{item}</p>
        <h3 className='text-center text-[50px] fontfamily'>{name}</h3>
        <BiDownload
        className='text-2xl text-pink-600 cursor-pointer'
        onClick={handleDownload}
        title='download card'
      />
      </div>
    </div>
  );
};

export default CardFrame;
