import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-7 gap-y-1 gap-x-1  h-screen w-screen">
        <div className="bg-red-500  col-span-1">1</div>
        <div className="bg-blue-500 col-span-6 overflow-auto ">
          <div className=" h-12 bg-gray-600">A</div>
          <div className="h-full flex items-center justify-center bg-purple-600">
            <form className="pt-10 px-10">
              <label className="font-bold text-xl" htmlFor="username">Username</label>
              <input className="border bg-pink-700 w-full px-8 py-3 hover:bg-white focus: bg-black" type="text" />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
