import Opensource from "@/components/Opensource";
import Feature from "./Feature";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="h-fit mb-20">
        <div className=" mt-[13rem] flex  flex-col justify-center items-center ">
          <div className=" bg-[#282c43] px-3 py-1 w-fit rounded-full text-sm font-[400]">
            Fellow my inst
          </div>
          <h1 className=" text-[4.5rem] tracking-tighter text-center w-[90%] font-[750] leading-[5rem] font-Inter">
            Turning the Heat Down: Revolutionizing Forest Fire Prevention.
          </h1>
          <p className="mt-4 text-[1.2rem] w-[60%] text-clip text-center text-slate-400">
            IEmpowering Tomorrow's Forests Today: Ignite Change with Our
            Innovative Fire Prevention Solutions
          </p>
          <div className=" mt-5 flex gap-2">
            <Button className=" bg-white text-black text-[1rem] font-medium px-6 py-4  hover:bg-zinc-300 ">
              Get Started
            </Button>
            <Button className=" text-[0.9rem] font-[600] px-6 py-4  bg-transparent border-slate-600 border-[1px] hover:bg-slate-500 ">
              GitHub
            </Button>
          </div>
        </div>
      </div>
      <Feature />
      <Opensource />
      <div className=" mt-[5rem]">
        <Footer />
      </div>
    </>
  );
}
