import Opensource from "@/components/Opensource";
import Feature from "./Feature";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/froestprediction");
    window.location.reload();
  }
  return (
    <>
      <div className=" scrollbar-none text-stone-50 w-full scroll-smooth">
        <div className=" bg-transparent h-fit max-w-screen-xl m-auto ">
          <Nav />
          <div className="h-fit mb-20">
            <div className=" mt-[13rem] flex  flex-col justify-center items-center ">
              <h1 className=" text-[2rem] tracking-tighter text-center w-[90%] font-[750] md:leading-[5rem] font-Inter md:text-[4.5rem]">
                Turning the Heat Down: Revolutionizing Forest Fire Prevention.
              </h1>
              <p className="mt-4 text-sm w-[60%] text-clip text-center text-slate-400 md:text-[1.2rem]">
                IEmpowering Tomorrow's Forests Today: Ignite Change with Our
                Innovative Fire Prevention Solutions
              </p>
              <div className=" mt-5 flex gap-2">
                <Button
                  onClick={handleClick}
                  className=" bg-white text-black text-[1rem] font-medium px-6 py-4  hover:bg-zinc-300 "
                >
                  Get Started
                </Button>
                <a
                  href="https://github.com/Shashivadan/FireTrack"
                  target="_black"
                >
                  <Button className=" text-[0.9rem] font-[600] px-6 py-4 bg-transparent border-slate-600 border-[1px] hover:bg-slate-500 ">
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <Feature />
          </div>
          <div className=" mb-10">
            <Opensource />
          </div>
          <div className=" mt-[5rem]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
