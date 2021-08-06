import React from "react";
import HandPhone from "./assets/1.png";
import HandPhone2 from "./assets/2.png";
import HandPhone3 from "./assets/3.png";

function App() {
  return (
    <React.Fragment>
      <div className="antialiased relative text-white">
        <div className="absolute w-full h-10 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ">
          <div className="absolute z-20 top-2 right-10 inline-flex space-x-5 uppercase font-medium text-white">
            <a className="hover:text-black" href="#services">
              Home
            </a>
            <a className="hover:text-black" href="#Features">
              Features
            </a>
            <a className="hover:text-black" href="#Screenshoots">
              Screenshoots
            </a>
            <a className="hover:text-black" href="#Testimonial">
              Testimonial
            </a>
            <a className="hover:text-black" href="#Pricing">
              Pricing
            </a>
            <a className="hover:text-black" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>

      <section
        id="Services"
        className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-br-3xl  pt-20 pb-28 px-8"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-7 ">
          <div className="w-3/4 col-span-5 ">
            <h1 className="text-5xl font-extrabold">
              Best Extra Class Program For Your Future
            </h1>
            <p className=" font-semibold text-md mt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              mollitia, rerum repellat amet quas atque error reprehenderit
              eligendi officiis suscipit asperiores nobis ex dignissimos
              doloribus, culpa aperiam quod nihil accusamus!
            </p>
            <div>
              <button className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
                Download Now
              </button>
            </div>
          </div>
          <img
            className=" w-80 shadow-xl animate-bounce  "
            src={HandPhone}
            alt=""
          />
        </div>
      </section>

      {/* Features */}
      <section id="Features" className="bg-gray-50 pt-20 pb-28 px-8">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-700">Features</h1>
            </div>
            {/* Title */}
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-20">
              {/* Features Inside Content 1 */}
              <div className="relative">
    
                <div className="relative z-20 bg-white h-full rounded-md shadow-md">

                  <div className="px-10 pb-6">
                    <h2 className=" pt-3 font-bold text-2xl">
                      Clean Code
                    </h2>
                    <p className="pt-2 font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid numquam doloribus nesciunt maxime. Minus fuga
                      nostrum magnam, ipsum nobis optio pariatur consequuntur
                      quas exercitationem? At minima voluptate sint harum quis!
                    </p>
                  </div>
                </div>
              </div>
              {/*Features Inside Content 1 */}

              {/*Features Inside Content 2 */}
              <div className="relative">
    
                <div className="relative z-20 bg-white h-full rounded-md shadow-md">
                  <div className="px-10 pb-6">
                    <h2 className=" pt-3 font-bold text-2xl">
                      Auto Install System
                    </h2>
                    <p className="pt-2 font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid numquam doloribus nesciunt maxime. Minus fuga
                      nostrum magnam, ipsum nobis optio pariatur consequuntur
                      quas exercitationem? At minima voluptate sint harum quis!
                    </p>
                  </div>
                </div>
              </div>
              {/*Features Inside Content 2 */}

              {/*Features Inside Content 3 */}
              <div className="relative">
    
                <div className="relative z-20 bg-white h-full rounded-md shadow-md">
                  <div className="px-10 pb-6">
                    <h2 className=" pt-3 font-bold text-2xl">
                      Pixel Perfect Design
                    </h2>
                    <p className="pt-2 font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid numquam doloribus nesciunt maxime. Minus fuga
                      nostrum magnam, ipsum nobis optio pariatur consequuntur
                      quas exercitationem? At minima voluptate sint harum quis!
                    </p>
                  </div>
                </div>
              </div>
              {/* Features Inside Content 3 */}
            </div>
          </div>
        </section>
        {/* Features */}

      <section className="bg-gray-50 pt-20 pb-28 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-8">
          <div className="col-span-4">
            <img className="h-96 shadow-xl" src={HandPhone} alt="" />
          </div>

          <div className="col-span-4 grid-rows-8">
            <h1 className="text-6xl font-bold row-span-4 text-gray-700">
              Fun Fact
            </h1>
            <p className=" font-semibold text-md mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              numquam doloribus nesciunt maxime. Minus fuga nostrum magnam,
              ipsum nobis optio pariatur consequuntur
            </p>
          </div>
        </div>
      </section>

      <section  className="bg-white pt-20 pb-28 px-8" id="ScreenShoots">
        <div className="max-w-6xl mx-auto ">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-700">
            App Screenshoots 
            </h1>
          </div>
          <div className="pt-20 grid grid-cols-4">
            <img className=" w-60 shadow-xl  " src={HandPhone} alt="" />
            <img className=" w-60 shadow-xl   " src={HandPhone2} alt="" />
            <img className=" w-60 shadow-xl   " src={HandPhone3} alt="" />
            <img className=" w-60 shadow-xl  " src={HandPhone} alt="" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="App
      " className="bg-purple-500 pt-20 pb-28 px-8">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-700">Download App
              </h1>
            </div>
            {/* Title */}
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-20">
              {/* App
               Inside Content 1 */}
              <div className="relative">
    
                <div className="relative z-20 bg-white h-full rounded-md shadow-md">

                  <div className="px-10 pb-6">
                    <h2 className=" pt-3 font-bold text-2xl text-center">
                      Apps Store
                    </h2>
                    <p className="pt-5 font-semibold text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid numquam doloribus nesciunt maxime. Minus fuga
                    </p>
                  </div>
                </div>
              </div>
              {/*App
               Inside Content 1 */}

              {/*App
               Inside Content 2 */}
              <div className="relative">
    
                <div className="relative z-20 bg-white h-full rounded-md shadow-md">
                  <div className="px-10 pb-6">
                    <h2 className=" pt-3 font-bold text-2xl text-center">
                      Googleplay Store
                    </h2>
                    <p className="pt-5 font-semibold text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid numquam doloribus nesciunt maxime. Minus fuga
                    </p>
                  </div>
                  <div>
              <button className="mt-2 mb-4 px-6 py-2 text-white shadow-md rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
                Download Now
              </button>
            </div>
                </div>
              </div>
              {/*App
               Inside Content 2 */}

              {/*App
               Inside Content 3 */}
              <div className="relative">
    
                <div className="relative z-20 bg-white h-full rounded-md shadow-md">
                  <div className="px-10 pb-6">
                    <h2 className=" pt-3 font-bold text-2xl text-center">
                      Microsoft Store
                    </h2>
                    <p className="pt-5 font-semibold text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid numquam doloribus nesciunt maxime. Minus fuga
                    </p>
                  </div>
                </div>
              </div>
              {/* App
               Inside Content 3 */}
            </div>
          </div>
        </section>
        {/* App
         */}

      
    </React.Fragment>
  );
}

export default App;
