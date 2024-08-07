import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { getAuthToken } from "../utils/AxiosBaseUrl";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "@/utils/AxiosBaseUrl";
import { useSetRecoilState } from "recoil";
import { globleUserAtom } from "@/store/atoms/authAtom";
import { toast } from "sonner";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { isAxiosError } from "axios";

const schema = z
  .object({
    username: z
      .string()
      .min(5, { message: "username must contain 5 characters" }),
    email: z.string().email({ message: "Must include a valid email" }),
    password: z
      .string()
      .min(5, { message: "password must contain 4 characters" }),
    confirmPassword: z
      .string()
      .min(4, { message: "password must contain 4 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords does not match",
  });

type FormFields = z.infer<typeof schema>;

function SignUp() {
  const [isLoading, setIsLoading] = useState<boolean>();
  const setCurrentUser = useSetRecoilState(globleUserAtom);
  const Navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    // reset,
    setError,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      setIsLoading(true);
      const { username, password, email } = data;
      const response = await axios.post("api/v1/signup", {
        username,
        email,
        password,
      });
      const responseData = await response.data;

      localStorage.setItem("currentUser", responseData.user.username);
      localStorage.setItem("token", responseData.token);
      setCurrentUser(localStorage.getItem("currentUser"));
      getAuthToken();
      setIsLoading(false);
      Navigate("/");
      toast.success("sign up successful");
      window.location.reload();
    } catch (error: unknown) {
      setIsLoading(false);
      toast.error("sign up failed");
      if (isAxiosError(error)) {
        if (error?.response?.data?.massege) {
          setError("root", { message: error?.response?.data?.massege });
          return;
        }
      }
      setError("root", { message: "Some the went wrong" });
    }
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
                  {...register("username")}
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
                  {...register("email")}
                  className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                  type="email"
                  placeholder="name@example.com"
                />
                <p className=" text-sm text-red-900 ">
                  {errors.email?.message}
                </p>

                <Input
                  {...register("password")}
                  className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                  type="password"
                  placeholder="password"
                />
                <p className=" text-sm text-red-900 ">
                  {errors.password?.message}
                </p>

                <Input
                  {...register("confirmPassword")}
                  className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                  type="password"
                  placeholder="Re-enter password"
                />
                <p className="text-sm text-red-900 ">
                  {errors.confirmPassword?.message}
                </p>
              </div>
              <div className="">
                <Button
                  type="submit"
                  className="h-10 w-full font-[700] py-2 px-4 bg-white text-slate-900 hover:bg-white hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                >
                  {isLoading ? (
                    <>
                      {" "}
                      <Oval
                        visible={true}
                        height="20"
                        width="20"
                        color="#000000"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </>
                  ) : (
                    <> Sign Up with Email</>
                  )}
                </Button>
              </div>
              <p className="text-sm text-red-900 ">{errors.root?.message}</p>
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
