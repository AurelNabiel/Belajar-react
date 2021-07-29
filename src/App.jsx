import React from "react";
import BackgroundImage from "./assets/bg.jpg";
import FotoProfile from "./assets/pr.jpg";
function App() {
  return (
    <React.Fragment>
      <div className="antialiased relative text-gray-600">
        {/* ===================bagian luar=================== */}

        <div className="absolute w-full min-h-screen">
          <div
            className="absolute top-0 w-full h-1/2 bg-cover bg-bottom"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
          ></div>
          <div className="absolute z-20 bottom-10 right-0 left-0 inline-flex space-x-20 justify-center uppercase font-bold text-gray-600">
            <a className="hover:text-blue-600" href="#services">
              Services
            </a>
            <a className="hover:text-blue-600" href="#work">
              Work
            </a>
            <a className="hover:text-blue-600" href="#contact">
              Contact
            </a>
          </div>
        </div>

        {/* ===================bagian luar=================== */}

        {/* identity Card */}
        <div className="relative z-10 flex justify-center items-center min-h-screen h-auto ">
          <div className="max-w-4xl relative">
            <div className="absolute inset-0 transform -skew-x-4 rounded-lg z-10 -rotate-6 w-full max-w-4xl p-12 shadow-xl bg-gradient-to-r from-blue-500 to-red-500"></div>
            <div className="relative z-20 flex bg-white justify-between w-full max-w-4xl p-12 shadow-xl rounded-lg">
              <div className="flex flex-col space-y-6 py-6  justify-between">
                <div>
                  <h2 className="text-lg"> Hello I AM</h2>
                  <h1 className="text-4xl font-bold text-gray-800">
                    EijiGaen{" "}
                  </h1>
                </div>
                <p className="text-md leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora rem voluptatem asperiores earum eius deleniti iure?
                  Qui ullam dolorum quisquam quod labore tempore. Doloribus eos
                  fugiat inventore ab earum veritatis.
                </p>
              </div>
              <img
                className="w-64 h-64 rounded-full border-white shadow-xl flex-shrink-0"
                src={FotoProfile}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* identity Card */}
      </div>
    </React.Fragment>
  );
}

export default App;
