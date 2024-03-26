import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import Warning from "@/components/Warning";

function HeroModel() {
  return (
    <>
      <div className="w-full md:max-w-screen-xl m-auto">
        <Nav />
        <div className=" h-[calc(100vh-60px)]">
          <div className=" w-full h-full flex flex-col justify-center items-center ">
            <form
              className=" w-[350px] flex flex-col gap-3 p-4"
              max-w-screen-xl
              action=""
            >
              <h1 className=" text-center text-lg font-[600] ">
                Enter The Conditions
              </h1>
              <Input
                className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                type="email"
                placeholder="name@example.com"
              />
              <Input
                className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                type="email"
                placeholder="name@example.com"
              />
              <Input
                className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                type="email"
                placeholder="name@example.com"
              />
              <Button className="h-10 font-[700] py-2 px-4 bg-white text-slate-900 hover:bg-white hover:shadow-[0px_0px_10px_10px_rgba(255,255,255,0.1)]">
                Submit
              </Button>
            </form>
            <div className="w-[70%] md:w-[50%]">
              <Warning />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroModel;
