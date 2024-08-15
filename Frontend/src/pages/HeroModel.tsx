import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Warning from "@/components/Warning";
import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import axios from "@/utils/AxiosBaseUrl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import useComponentSpanRender from "@/hooks/useComponentSpanRender";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import Instance from "@/utils/AxiosBaseUrl";
import { motion } from "framer-motion";
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
  const [isLoading, setIsLoading] = useState<boolean>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<FormTypes>({ resolver: zodResolver(ParameterSchema) });

  const onSubmit = async (data: FormTypes) => {
    setIsLoading(true);
    try {
      const { oxygen, temperature, humidity }: FormTypes = data;
      const responseData = await axios.get("/api/v1/model", {
        params: {
          oxygen,
          temperature,
          humidity,
        },
      });
      reset();
      setResult(responseData.data.data);
      setIsLoading(false);
      toast.success("Sussesfull");
    } catch (error: unknown) {
      toast.error("failed");
      console.log(error);
      if (isAxiosError(error)) {
        setError("root", { message: "Some Thing Went Wrong" });
      }
    }
  };

  const handleAutoPredict = () => {
    if (!navigator.geolocation) {
      return toast.error("Geolocation is not supported");
    }

    navigator.geolocation.getCurrentPosition(success, error);

    async function success(position: GeolocationPosition) {
      try {
        const latitude: number = position.coords.latitude;
        const longitude: number = position.coords.longitude;
        const response = await Instance.get("api/v1/autoperdiction", {
          params: {
            lat: latitude,
            lon: longitude,
          },
        });
        setResult(response.data.result);
        toast.success("Successful");
      } catch (error) {
        console.log(error);

        if (error instanceof Error) {
          toast.error(`Error: ${error.message}`);
        } else {
          toast.error("An unknown error occurred");
        }
      }
    }

    function error() {
      toast.error("Location not available");
    }
  };

  return (
    <>
      <div className="w-full md:max-w-screen-xl m-auto">
        <div className="h-[calc(100vh-52px)]">
          <div className="w-full h-full flex flex-col justify-center items-center ">
            <motion.form
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-[350px] flex flex-col gap-3 p-4"
              onSubmit={handleSubmit(onSubmit)}
              action=""
            >
              <h1 className="text-center text-lg font-[600] ">
                Enter The Conditions
              </h1>
              <Input
                min="0"
                {...register("temperature")}
                className="border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                type="number"
                placeholder="Temperature"
              />
              <motion.div className="text-[0.9rem] text-red-900">
                {errors.temperature && errors.temperature.message}
              </motion.div>
              <Input
                min={"0"}
                {...register("oxygen")}
                className="border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                type="number"
                placeholder="Oxygen"
              />
              <motion.span className=" text-[0.9rem] text-red-900">
                {errors.oxygen && errors.oxygen.message}
              </motion.span>
              <Input
                min={"0"}
                {...register("humidity")}
                className="border-slate-600 rounded-md px-3 py-2 text-sm h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                type="number"
                placeholder="Humidity"
              />
              <span className="text-[0.9rem] text-red-900">
                {errors.humidity && errors.humidity.message}
              </span>
              <Button
                type="submit"
                className="h-10 font-[700] py-2 px-4 bg-white text-slate-900 hover:bg-white hover:shadow-[0px_0px_10px_10px_rgba(255,255,255,0.1)]"
              >
                {isLoading ? (
                  <>
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
                  <>Predict</>
                )}
              </Button>
              <Button
                type="button"
                onClick={handleAutoPredict}
                className="h-10 font-[700] py-2 px-4 bg-white text-slate-900 hover:bg-white hover:shadow-[0px_0px_10px_10px_rgba(255,255,255,0.1)]"
              >
                Auto-Predict
              </Button>

              <span className=" text-[0.9rem] text-red-900">
                {errors.root && errors.root.message}
              </span>
            </motion.form>
            <div className="w-[70%] md:w-[50%]">
              {result && componentRenter ? (
                <Warning
                  probability={result.probability}
                  status={result.status}
                  value={result.value}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroModel;
