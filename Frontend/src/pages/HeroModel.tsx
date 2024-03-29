import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import Warning from "@/components/Warning";
import { useForm } from "react-hook-form";

import axios from "@/utils/AxiosBaseUrl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import useComponentSpanRender from "@/hooks/useComponentSpanRender";

type PropType = {
  status: string;
  probability: number;
  value: boolean;
};

const ParameterSchema = z
  .object({
    oxygen: z.coerce
      .number()
      .gte(1, { message: "Oxygen parameter is required" }),
    temperature: z.coerce
      .number()
      .gte(1, { message: "Temperature parameter is required" }),
    humidity: z.coerce.number().gte(1, {
      message: "Humidity parameter is required ",
    }),
  })
  .partial();

type FormTypes = z.infer<typeof ParameterSchema>;

function HeroModel() {
  const [result, setResult] = useState<null | PropType>();
  const componentRenter = useComponentSpanRender(result);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<FormTypes>({ resolver: zodResolver(ParameterSchema) });

  const onSubmit = async (data: FormTypes) => {
    try {
      const { oxygen, temperature, humidity }: FormTypes = data;

      const responseData = await axios.get("/api/v1/model", {
        params: {
          oxygen,
          temperature,
          humidity,
        },
        headers: {
          token: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      reset();
      setResult(responseData.data.data);
      // console.log(responseData.data.data);

      // console.log(result);
    } catch (error) {
      console.log(error);
      setError("root", { message: "Some thing went wrong" });
    }
  };

  return (
    <>
      <div className="w-full md:max-w-screen-xl m-auto">
        <Nav />
        <div className=" h-[calc(100vh-60px)]">
          <div className=" w-full h-full flex flex-col justify-center items-center ">
            <form
              className=" w-[350px] flex flex-col gap-3 p-4"
              onSubmit={handleSubmit(onSubmit)}
              action=""
            >
              <h1 className=" text-center text-lg font-[600] ">
                Enter The Conditions
              </h1>
              <Input
                {...register("temperature")}
                className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                type="number"
                placeholder="name@example.com"
              />
              <span className=" text-[0.9rem] text-red-900">
                {errors.temperature && errors.temperature.message}
              </span>
              <Input
                {...register("oxygen")}
                className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                type="number"
                placeholder="name@example.com"
              />
              <span className=" text-[0.9rem] text-red-900">
                {errors.oxygen && errors.oxygen.message}
              </span>
              <Input
                {...register("humidity")}
                className="  border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                type="number"
                placeholder="name@example.com"
              />
              <span className=" text-[0.9rem] text-red-900">
                {errors.humidity && errors.humidity.message}
              </span>
              <Button
                type="submit"
                className="h-10 font-[700] py-2 px-4 bg-white text-slate-900 hover:bg-white hover:shadow-[0px_0px_10px_10px_rgba(255,255,255,0.1)]"
              >
                Submit
              </Button>
              <span className=" text-[0.9rem] text-red-900">
                {errors.root && errors.root.message}
              </span>
            </form>
            <div className="w-[70%] md:w-[50%]">
              {result && componentRenter && (
                <Warning
                  probability={result.probability}
                  status={result.status}
                  value={result.value}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroModel;
