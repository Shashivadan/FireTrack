import Nav from "@/components/Nav";
import { Input } from "@/components/ui/input";
function Assistanse() {
  return (
    <>
      <div className="w-full md:max-w-screen-xl m-auto px-3 md:px-2">
        <Nav />
        <div className="h-[calc(100vh-60px)] py-6">
          <div className=" h-full w-full bg-slate-800 rounded-2xl">
            <div className="h-[90%]  w-full "></div>
            <div className=" h-[10%] flex justify-center items-center mx-2 md:px-2">
              <Input
                type="text"
                className=" h-16 border-slate-500 border-none bg-slate-700 rounded-2xl text-xl leading-normal"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assistanse;
