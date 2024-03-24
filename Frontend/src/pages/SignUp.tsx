import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const Navigate = useNavigate();

  const handleSignUpNavigate: () => void = () => {
    Navigate("/signin");
  };
  const handleHomeNavigate: () => void = () => {
    Navigate("/");
  };
  return (
    <div className="h-screen w-ful bg-[#030711]">
      <div className=" h-full w-full flex">
        <div className="bg-gray-800 h-full w-1/2 hidden lg:block "></div>
        <div className=" text-white w-full  flex justify-center items-center lg:w-1/2 relative ">
          <div className="flex absolute z-10  font-medium top-8 right-8">
            <Button onClick={handleSignUpNavigate} className=" bg-transparent">
              Sign In
            </Button>
            <Button onClick={handleHomeNavigate} className=" bg-transparent">
              Home
            </Button>
          </div>
          <div className=" sm:w-[350px]">
            <form className=" flex flex-col gap-5" action="">
              <div className="flex flex-col items-center">
                <h1 className=" text-2xl font-semibold tracking-tight">
                  Create an account
                </h1>
                <p className=" text-sm text-slate-500">
                  Enter your email below to create your account
                </p>
              </div>
              <div className=" flex flex-col gap-3 justify-center">
                <Input
                  className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                  type="text"
                  placeholder="username"
                />
                <Input
                  className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                  type="email"
                  placeholder="name@example.com"
                />
                <Input
                  className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                  type="email"
                  placeholder="password"
                />
                <Input
                  className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                  type="email"
                  placeholder="Re-enter password"
                />
              </div>
              <div className="">
                <Button className="h-10 w-full font-[700] py-2 px-4 bg-white text-slate-900 hover:bg-white hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                  Sign Up with Email
                </Button>
              </div>
              <p className="w-[350px] text-slate-500 text-sm text-center">
                By clicking continue, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
