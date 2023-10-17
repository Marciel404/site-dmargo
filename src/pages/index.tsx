import FOOTER from '@/components/footer';
import HEADER from '@/components/header';
import SIDEBAR from '@/components/sidebar';
import { selectimagebutton, selectimagedivs } from '@/scripts/selectimages';
import React from 'react';

export default function () {
  setInterval(() => {
    selectimagebutton(+1)
  }, 20000)
  return (
    <main>
      <HEADER />
      <SIDEBAR />
      <div>

        <div className="divslider flex items-center">

          <button className="z-10 buttonslider hover:cursor-pointer h-10 w-10 p-3 rounded-full absolute border-none hidden" onClick={() => selectimagebutton(-1)!}>{"<"}</button>

          <ul className="flex overflow-hidden">

            <li className="list-none" id="slide1">
              <img className="w-full animate-fadeinright" src="/images/MargoNovidades.jpg" alt="sliede_image" />
            </li>

            <li className="list-none hidden" id="slide2">
              <img className="w-full animate-fadeinright" src="/images/SuperDescontos.jpg" alt="sliede_image" />
            </li>

            <li className="list-none hidden" id="slide3">
              <img className="w-full animate-fadeinright" src="/svgs/bolsa.svg" alt="sliede_image" />
            </li>

            <li className="list-none hidden" id="slide4">
              <img className="w-full animate-fadeinright" src="/svgs/loja.svg" alt="sliede_image" />
            </li>

          </ul>

          <button className="z-10 buttonslider hover:cursor-pointer h-10 w-10 p-3 rounded-full absolute right-0 border-none hidden" onClick={() => selectimagebutton(+1)!}>{">"}</button>

        </div>

        <div className="flex justify-center">
          <div className="w-10 h-1 border-solid rounded-lg m-1 hover:cursor-pointer bg-black" id="1" onClick={selectimagedivs} />
          <div className="w-1 h-1 border-solid rounded-lg m-1 hover:cursor-pointer" id="2" onClick={selectimagedivs} />
          <div className="w-1 h-1 border-solid rounded-lg m-1 hover:cursor-pointer" id="3" onClick={selectimagedivs} />
          <div className="w-1 h-1 border-solid rounded-lg m-1 hover:cursor-pointer" id="4" onClick={selectimagedivs} />
        </div>

      </div>
      <div className="h-screen border-8 border-solid border-black">
      </div>
      <FOOTER />
    </main>
  )
}