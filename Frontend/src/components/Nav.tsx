import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function Nav() {
  const Navigate = useNavigate();

  const signInHandle = () => {
    Navigate("/signin");
  };

  return (
    <div>
      <div className=" font-Inter p-2 flex justify-between items-center ">
        <div className="flex items-center gap-6 mt-3">
          <h1 className=" font-bold text-2xl cursor-auto">FireTrick</h1>
          <NavLink
            className="  cursor-pointer text-center text-slate-300 font-semibold text-[0.9rem] hover:text-white"
            to={"/"}
          >
            Home
          </NavLink>
          <a
            href="#feature"
            className=" cursor-pointer text-center text-slate-300 font-semibold text-[0.9rem] hover:text-white"
          >
            Features
          </a>
          <NavLink
            to={""}
            className=" cursor-pointer text-center text-slate-300 font-semibold text-[0.9rem] hover:text-white"
          >
            Doc
          </NavLink>
        </div>
        <div className=" flex gap-3 justify-center ">
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
