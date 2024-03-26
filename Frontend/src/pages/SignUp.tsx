import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { authAtom } from "@/store/atoms/authAtom";
import { SubmitHandler, UseFormHandleSubmit, useForm } from "react-hook-form";
import { date } from "zod";

type FormFields = {
  username: string;
  email: string;
  password: string;
};

function SignUp() {
  const [auth, setauth] = useRecoilState(authAtom);
  const Navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen w-ful ">
      <div className=" h-full w-full flex">
        <div className="bg-gray-800 h-full w-1/2 hidden lg:block "></div>
        <div className=" text-white w-full  flex justify-center items-center lg:w-1/2 relative ">
          <div className="flex absolute z-10  font-medium top-8 right-8">
            <Button
              onClick={() => Navigate("/signin")}
              className=" bg-transparent"
            >
              Sign In
            </Button>
            <Button onClick={() => Navigate("/")} className=" bg-transparent">
              Home
            </Button>
          </div>
          <div className=" sm:w-[350px]">
            <form
              className=" flex flex-col gap-5"
              onSubmit={handleSubmit(onSubmit)}
              action=""
            >
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
                  {...register("username", {
                    required: "Enter is required",
                    minLength: {
                      value: 6,
                      message: "username must be more then 6 letters",
                    },
                  })}
                  className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                  type="text"
                  placeholder="username"
                />
                {errors.username && (
                  <p className=" text-sm text-red-900 ">
                    {errors.username?.message}
                  </p>
                )}
                <Input
                  {...register("email", { required: "Email is required" })}
                  className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                  type="email"
                  placeholder="name@example.com"
                />
                <p className=" text-sm text-red-900 ">
                  {errors.email?.message}
                </p>

                <Input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 letters",
                    },
                  })}
                  className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                  type="password"
                  placeholder="password"
                />
                <p className=" text-sm text-red-900 ">
                  {errors.password?.message}
                </p>

                <Input
                  className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                  type="password"
                  placeholder="Re-enter password"
                />
              </div>
              <div className="">
                <Button
                  type="submit"
                  className="h-10 w-full font-[700] py-2 px-4 bg-white text-slate-900 hover:bg-white hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                >
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
