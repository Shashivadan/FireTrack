import { Button } from "./ui/button";

function Nav() {
  return (
    <div>
      <div className=" font-Inter p-2 flex justify-between items-center">
        <div className="flex items-center gap-6 mt-3">
          <h1 className=" font-bold text-2xl">FireTrick</h1>
          <div className=" text-center text-slate-300 font-semibold text-[0.9rem] hover:text-white">
            Home
          </div>
          <div className=" text-center text-slate-300 font-semibold text-[0.9rem] hover:text-white">
            Features
          </div>
          <div className=" text-center text-slate-300 font-semibold text-[0.9rem] hover:text-white">
            Doc
          </div>
          {/* <div className=" text-center text-slate-300 font-semibold text-[0.9rem] hover:text-white">
            Features
          </div> */}
        </div>
        <div className=" flex gap-3">
          <Button className=" font-semibold bg-[#282c43]">Sign In</Button>
          <Button className=" font-semibold bg-[#282c43]">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
