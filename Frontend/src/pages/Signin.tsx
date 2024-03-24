import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

function Signin() {
  const Navigate = useNavigate();

  const handleBackNavigation: () => void = () => {
    Navigate("/");
  };
  const handleSignUpNavigation: () => void = () => {
    Navigate("/signup");
  };
  return (
    <div className=" relative bg-[#030711] min-h-screen w-full ">
      <Button
        onClick={handleBackNavigation}
        className=" absolute z-10 top-[3rem] left-[3rem] bg-transparent text-md font-[450]"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        {"  "}
        Back
      </Button>
      <div className=" w-[70%] m-auto flex justify-center items-center h-screen">
        <div className="  p-2 rounded-lg ">
          <form
            className=" w-[350px] flex flex-col gap-5 justify-between"
            action=""
          >
            <div className="flex  flex-col items-center">
              <h1 className=" font-bold text-2xl text-white ">Welcome back</h1>
              <p className=" text-sm text-slate-600">
                Enter your email to sign in to your account
              </p>
            </div>
            <div className="flex  flex-col gap-3">
              <Input
                className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                type="email"
                placeholder="name@example.com"
              />
              <Input
                className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                type="password"
                placeholder="password"
              />
            </div>
            <Button className="h-10 font-[700] py-2 px-4 bg-white text-slate-900 hover:bg-white hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
              Sign In with Email
            </Button>

            <div className=" text-center text-sm text-slate-500 cursor-pointer">
              <p
                onClick={handleSignUpNavigation}
                className="underline underline-offset-4  decoration-[1px]  "
              >
                Don't have an account? Sign Up
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
