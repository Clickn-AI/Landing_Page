import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMicrophone, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InteractiveCircle = () => {
  const {t} = useTranslation();
  library.add(faMicrophone, faSpinner);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
      setIsActive(!isActive); 
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center py-8 sm:py-0">
      <div
        id="circle"
        className="circle-container w-24 h-24 md:w-30 md:h-30 relative cursor-pointer rounded-full"
        tabIndex="0"
        onClick={handleClick}
      >
        <div className="w-full h-full animate-bounce-y">
          <div className="w-full h-full opacity-100">
            <div className="shadow-lg rounded-full relative w-full h-full" style={{ boxShadow: 'rgba(128, 255, 204, 0.2) 0px 0px 40px 23px'}}>
              <div className='inside-shadow absolute rounded-full'>
              <div className={`absolute z-10 w-full h-full flex items-center justify-center opacity-100 $`}>
                                    <FontAwesomeIcon icon={isActive ? faSpinner : faMicrophone} size="lg" className={isActive ? 'rotate' : ''} />
                                </div>
              {/* <div className="absolute z-10 w-full h-full flex items-center justify-center opacity-100 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 25.3333V28M16 25.3333C11.0957 25.3333 8.19568 22.3268 6.68571 20M16 25.3333C20.9043 25.3333 23.8043 22.3268 25.3143 20M21.3333 9.33333V14.6667C21.3333 17.6122 18.9455 20 16 20C13.0545 20 10.6667 17.6122 10.6667 14.6667V9.33333C10.6667 6.38781 13.0545 4 16 4C18.9455 4 21.3333 6.38781 21.3333 9.33333Z"
                    stroke="#94FFD2"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </div> */}
              </div>
              <div className="backdrop-blur-2xl w-full h-full rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-8 px-3 mt-2 bg-white bg-opacity-10 rounded-[100px] shadow border border-white border-opacity-10 backdrop-blur-[13.20px] justify-center items-center gap-2 inline-flex" style={{ letterSpacing: '0.2px', boxShadow: 'rgba(128, 255, 204, 0.2) 0px 0px 8px 0.5px', minWidth: '82px', opacity: 1, transform: 'none' }}>
        <div className="text-slate-200 text-sm font-normal font-sans leading-normal"> {t("Message")}</div>
      </div>
    </div>
  );
};

export default InteractiveCircle;