import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import {
  BsFillPersonFill,
  BsSunFill,
  BsMoonStarsFill,
  BsToggle2On,
} from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const html = document.querySelector("html");
  const checkMode = localStorage.theme === "dark";
  const [checked, setChecked] = useState(checkMode);

  const handleDarkMode = (e) => {
    if (e.target.checked) {
      html.classList.add("dark");
      localStorage.theme = "dark";
      setChecked(true);
    } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
      setChecked(false);
    }
  };

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="fixed bottom-0 right-1/2 h-20 w-full translate-x-1/2 rounded-t-full pb-3 backdrop-blur-md md:top-0 md:rounded-t-none md:pb-0 lg:right-0 lg:translate-x-0">
      <p className="absolute left-0 top-1/2 hidden -translate-y-1/2 font-poiret text-3xl font-bold text-darkSlate dark:text-white md:block md:ps-5 lg:ps-14">
        MyCoffee
      </p>
      <ul className="absolute -top-5 left-1/2 right-10 flex -translate-x-1/2 items-center justify-evenly md:left-0 md:top-0 md:h-full md:w-full md:translate-x-0 md:justify-end md:pe-8 lg:pe-36">
        {/* home */}
        <Link to="/">
          <li className="group mx-5 lg:mx-10">
            <p className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-slate-500 text-3xl font-bold text-white transition duration-300 group-hover:scale-110 md:hidden">
              <HiHome />
            </p>
            <p className="text-center text-sm font-normal text-slate-500 transition duration-300 group-hover:text-orange dark:text-slate-300 md:text-lg">
              Home
            </p>
          </li>
        </Link>

        {/* darkmode */}
        <li className="group mx-5 lg:mx-10">
          <p className="mb-2 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-slate-500 text-2xl font-bold text-white transition duration-300 group-hover:scale-110 md:mb-0 md:w-44 md:rounded-2xl md:bg-transparent md:group-hover:scale-100">
            <input
              type="checkbox"
              id="darkMode"
              className="hidden h-full w-full"
              onClick={handleDarkMode}
            />
            {/* sm: */}
            <label
              className="flex gap-8 transition duration-300 md:hidden"
              style={
                checked
                  ? { transform: "translateX(-29px)" }
                  : { transform: "translateX(29px)" }
              }
              htmlFor="darkMode"
            >
              <span>
                <BsMoonStarsFill />
              </span>
              <span className="text-orange">
                <BsSunFill />
              </span>
            </label>
            {/* md: */}
            <label htmlFor="darkMode" className="hidden md:flex">
              <span className="pr-4 text-base font-normal text-slate-500 dark:text-slate-300">
                Light
              </span>
              <span
                className="text-2xl text-slate-500 transition duration-1000 dark:text-white"
                style={checked ? { rotate: "0deg" } : { rotate: "180deg" }}
              >
                <BsToggle2On />
              </span>
              <span className="pl-4 text-base font-normal text-slate-500 dark:text-slate-300">
                Dark
              </span>
            </label>
          </p>
          <p className="text-center text-sm font-normal text-darkSlate transition duration-300 group-hover:text-orange dark:text-slate-300 md:hidden md:text-lg">
            Theme
          </p>
        </li>

        {/* profile */}
        <Link to="/profile">
          <li className="group mx-5 lg:mx-10">
            <p className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-slate-500 text-3xl font-bold text-white transition duration-300 group-hover:scale-110 md:hidden">
              <BsFillPersonFill />
            </p>
            <p className="text-center text-sm font-normal text-slate-500 transition duration-300 group-hover:text-orange dark:text-slate-300 md:text-lg">
              Profil
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
