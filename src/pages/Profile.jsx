import { useState } from "react";
import photoProfile from "../assets/img/user-1.png";
import bgCard from "../assets/img/bg-card-profile.jpg";
import { AiTwotoneSetting } from "react-icons/ai";

export default function Profile() {
  const [setting, setSetting] = useState(false);

  const handleProfile = () => {
    setSetting(!setting);
  };
  return (
    <div className="min-h-screen w-full px-10 md:mt-28 md:w-[400px]">
      <div className="relative mt-8 flex items-center justify-between">
        <h1 className="text-3xl text-darkSlate dark:text-white">Profile</h1>
        <p
          onClick={handleProfile}
          className="text-3xl text-darkSlate transition duration-300 hover:text-orange dark:text-slate-300"
        >
          <AiTwotoneSetting />
        </p>
        <div
          style={setting ? { display: "block" } : { display: "none" }}
          className="absolute right-10 top-full z-50 w-40 rounded-xl bg-cyan-700 px-5 pb-8 pt-10"
        >
          <button className="mb-4 text-white">Edit Pofile</button>
          <button className="text-white">Logout</button>
        </div>
      </div>
      <div className="relative mt-14 h-fit overflow-hidden rounded-xl shadow-xl">
        <img src={bgCard} alt="bg-img-profile" className="brightness-[30%]" />
        <div className="absolute left-0 top-0 z-10 h-full w-full px-7 py-4">
          <div className="mb-8 flex items-center justify-between">
            <img src={photoProfile} alt="photo-profile" className="w-14" />
            <p className="text-2xl text-white">James</p>
          </div>
          <ul>
            <li>
              <p className="mb-1 text-slate-300">Gender : Male</p>
            </li>
            <li>
              <p className="mb-1 text-slate-300">no.Hp : 0812345678</p>
            </li>
            <li>
              <p className="mb-1 text-slate-300">Email : james@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
