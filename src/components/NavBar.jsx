import React from "react";
import { useState } from "react";
function NavBar() {
  const [navList, setNavList] = useState([
    { name: "Store", url: "dummy url" },
    { name: "Mac", url: "dummy url" },
    { name: "iPad", url: "dummy url" },
    { name: "iPhone", url: "dummy url" },
    { name: "Watch", url: "dummy url" },
    { name: "AirPods", url: "dummy url" },
    { name: "TV & Home", url: "dummy url" },
    { name: "Entertainment", url: "dummy url" },
    { name: "Accessories", url: "dummy url" },
    { name: "Support", url: "dummy url" },
  ]);
  return (
    <>
      <header>
        <nav className="px-3 py-2 flex justify-between items-center md:justify-center">
          <img
            src="public\assets\images\apple.svg"
            alt="logo"
            // width={23}
            // height={23}
            className="px-1 opacity-70 hover:opacity-90 duration-300 w-6 cursor-pointer"
          />
          <div className="hidden md:flex  ">
            <ul className="flex justify-evenly lg:min-w-[60vw] md:min-w-[80vw]">
              {navList.map((element, i) => (
                <li
                  key={i}
                  className="text-sm opacity-50 hover:opacity-90 duration-300 cursor-pointer font-thin"
                >
                  <a href="">{element.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-5 md:gap-7 px-3 py-1">
            <img
              src="public\assets\images\search.svg"
              alt=""
              className="w-4 opacity-70 hover:opacity-90 duration-300 cursor-pointer"
            />
            <img
              src="public\assets\images\bag.svg"
              alt=""
              className="w-4 opacity-70 hover:opacity-90 duration-300 cursor-pointer"
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
