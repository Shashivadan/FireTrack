import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

function Nav() {
  const Navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const signInHandle = () => {
    Navigate("/signin");
  };

  return (
    <div className="">
      <div className="font-Inter p-2 flex justify-between  ">
        <div>
          <div className="relative">
            <div className=" absolute md:flex md:items-center gap-6 mt-3 ">
              <h1 className={`hidden md:block font-bold text-2xl cursor-auto `}>
                FireTrick
              </h1>
              <h1
                onClick={handleToggle}
                className="ml-4 font-bold text-xl cursor-auto md:hidden "
              >
                Menu
              </h1>
              <div
                className={` ${
                  toggle ? "block " : "hidden "
                } mt-5  backdrop:mt-9 md:m-0 md:flex md:gap-3  z-10 `}
              >
                <h1
                  className={`font-bold text-xl md:hidden  cursor-auto ml-4 my-3 text-slate-300`}
                >
                  FireTrick
                </h1>
                <NavLink
                  className=" m-4 md:m-0 cursor-pointer  md:text-center text-slate-300 font-semibold text-[0.9rem] hover:text-white"
                  to={"/"}
                >
                  Home
                </NavLink>
                <a
                  href="#feature"
                  className=" m-4 md:m-0 block cursor-pointer md:text-center text-slate-300 font-semibold text-[0.9rem] hover:text-white"
                >
                  Features
                </a>
                <NavLink
                  to={"/heromdole"}
                  className=" m-4 md:m-0 block cursor-pointer md:text-center text-slate-300 font-semibold text-[0.9rem] hover:text-white"
                >
                  Doc
                </NavLink>
                <NavLink
                  to={"/heromdole"}
                  className=" m-4 md:m-0 block cursor-pointer  md:text-center text-slate-300 font-semibold text-[0.9rem] hover:text-white"
                >
                  Weather
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-2  md:flex gap-3 justify-center ">
          <Button
            onClick={signInHandle}
            className=" font-[550] bg-[#282c43] text-[0.8rem]"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
