import React from "react";
import BackgroundImage from "./assets/bg.jpg";
import FotoProfile from "./assets/pr.jpg";
import ServiceImage1 from "./assets/si1.png";
import ServiceImage2 from "./assets/si2.png";
import ServiceImage3 from "./assets/si3.jpg";
import WorkSection1 from "./assets/ws1.JPG";
import WorkSection2 from "./assets/ws2.jpg";
import WorkSection3 from "./assets/ws3.jpg";
import WorkSection4 from "./assets/ws4.jpg";
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
                className="w-64 h-64 rounded-full border-white shadow-xl flex-shrink-0 animate-pulse  "
                src={FotoProfile}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* identity Card */}

        {/* Services */}
        <section id="services" className="bg-gray-50 pt-20 pb-28 px-8">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-700">Services</h1>
              <p className="pt-2 text-xl">Heres What I Offer</p>
            </div>
            {/* Title */}
            <div className="mt-24 grid grid-cols-3 gap-20">
              {/* Services Inside Content 1 */}
              <div className="relative">
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-500 to bg-red-500 shadow-md rounded-lg transform skew-x-8 -rotate-6"></div>
                <div className="relative z-20 bg-white h-full rounded-md shadow-md">
                  <img
                    className="rounded-t-md"
                    style={{ height: "240px" }}
                    src={ServiceImage1}
                    alt="Service.jpg"
                  />
                  <div className="px-10 pb-6">
                    <h2 className=" pt-3 font-bold text-2xl">
                      Responsive Websites
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
              {/*Services Inside Content 1 */}

              {/*Services Inside Content 2 */}
              <div className="relative">
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-500 to bg-red-500 shadow-md rounded-lg transform skew-x-8 -rotate-6"></div>
                <div className="relative z-20 bg-white h-full rounded-md shadow-md">
                  <img
                    className="rounded-t-md bg-blue-200"
                    style={{ height: "240px" }}
                    src={ServiceImage2}
                    alt="Service.jpg"
                  />
                  <div className="px-10 pb-6">
                    <h2 className=" pt-3 font-bold text-2xl">
                      Mobile Applications
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
              {/*Services Inside Content 2 */}

              {/*Services Inside Content 3 */}
              <div className="relative">
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-500 to bg-red-500 shadow-md rounded-lg transform skew-x-8 -rotate-6"></div>
                <div className="relative z-20 bg-white h-full rounded-md shadow-md">
                  <img
                    className="rounded-t-md"
                    style={{ height: "240px" }}
                    src={ServiceImage3}
                    alt="Service.jpg"
                  />
                  <div className="px-10 pb-6">
                    <h2 className=" pt-3 font-bold text-2xl">
                      Mobile Applications
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
              {/* Services Inside Content 3 */}
            </div>
          </div>
        </section>
        {/* Services */}

        {/* work */}
        <section id="work" className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-700">Work</h1>
              <p className=" pt-3 text-xl">Here is My Portofolio</p>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-14">
              {/* Work Inside Content 1 */}
              <div className="bg-white rounded-lg col-span-2">
                <img
                  className="object-cover w-full rounded-t-md h-80"
                  src={WorkSection1}
                  alt=""
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Work Title
                  </h3>
                  <p className="pt-3 text-md font-bold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat optio error placeat id perspiciatis nesciunt
                    accusantium voluptatem suscipit labore. Omnis cupiditate eos
                    quasi, dolore voluptate itaque recusandae id repudiandae
                    exercitationem?
                  </p>
                  <a
                    className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"
                    href=""
                  >
                    View More
                  </a>
                </div>
              </div>
              {/* Work Inside Content 1 */}

              {/* Work Inside Content 2 */}
              <div className="bg-white rounded-lg col-span-1">
                <img
                  className="object-cover w-full rounded-t-md h-80"
                  src={WorkSection2}
                  alt=""
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Work Title
                  </h3>
                  <p className="pt-3 text-md font-bold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat optio error placeat id perspiciatis nesciunt
                    accusantium voluptatem suscipit labore. Omnis cupiditate eos
                    quasi, dolore voluptate itaque recusandae id repudiandae
                    exercitationem?
                  </p>
                  <a
                    className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"
                    href=""
                  >
                    View More
                  </a>
                </div>
              </div>
              {/* Work Inside Content 2 */}

              {/* Work Inside Content 3 */}
              <div className="bg-white rounded-lg col-span-1">
                <img
                  className="object-cover w-full rounded-t-md h-80"
                  src={WorkSection3}
                  alt=""
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Work Title
                  </h3>
                  <p className="pt-3 text-md font-bold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat optio error placeat id perspiciatis nesciunt
                    accusantium voluptatem suscipit labore. Omnis cupiditate eos
                    quasi, dolore voluptate itaque recusandae id repudiandae
                    exercitationem?
                  </p>
                  <a
                    className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"
                    href=""
                  >
                    View More
                  </a>
                </div>
              </div>
              {/* Work Inside Content 3 */}

              {/* Work Inside Content 4 */}
              <div className="bg-white rounded-lg col-span-2">
                <img
                  className="object-cover w-full rounded-t-md h-80"
                  src={WorkSection4}
                  alt=""
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Work Title
                  </h3>
                  <p className="pt-3 text-md font-bold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat optio error placeat id perspiciatis nesciunt
                    accusantium voluptatem suscipit labore. Omnis cupiditate eos
                    quasi, dolore voluptate itaque recusandae id repudiandae
                    exercitationem?
                  </p>
                  <a
                    className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"
                    href=""
                  >
                    View More
                  </a>
                </div>
              </div>
              {/* Work Inside Content 4 */}
            </div>
          </div>
        </section>
        {/* work */}

        {/* Contact */}
        <section className="bg-gray-50 pt-20 pb-28 px-80 " id="contact">
          <div className="max-w-6xl m-auto">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-700">Contact</h1>
              <p className="pt-2 text-xl">Get in Touch Me</p>
            </div>
            <div className="mt-16 relative max-w-4xl mx-auto">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-500 to bg-red-500 shadow-md rounded-lg transform skew-x-8 rotate-6"></div>
              <div className="relative z-20 bg-white rounded-md shadow-md p-12">
                <form className="grid grid-cols-2 gap-x-8 gap-y-6" action="">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-gray-200 outline-none px-6 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="border border-gray-200 outline-none px-6 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="col-span-2 border border-gray-200 outline-none px-6 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  />
                  <textarea
                    className="col-span-2 border border-gray-200 outline-none px-6 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                  <div>
                  <button className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
                  Send message
                  </button>
                  </div>
                 
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Contact */}
      </div>
    </React.Fragment>
  );
}

export default App;
