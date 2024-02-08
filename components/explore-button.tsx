"use client"

import Image from 'next/image';
import { useEffect } from 'react';

const ExploreButton = () => {
  useEffect(() => {
    const str: string = "Scroll to explore";
    const text: HTMLParagraphElement | null = document.getElementById("text") as HTMLParagraphElement | null;

    if (text) {
      for (let i = 0; i < str.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = str[i];
        text.appendChild(span);
        span.style.transform = `rotate(${-90 + 11 * i}deg)`;
      }
    }
  }, []);

  return (
    <div className=" flex flex-col "  >
      <div className="containerClass">
        <p id="text" className="circularText"></p>
      </div>
      <Image
        src="/explore-icon.png"
        alt='explore-icon'
        className='mt-4 h-14'
      />
    </div>
  );
};

export default ExploreButton;
