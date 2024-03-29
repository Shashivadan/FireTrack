import Card from "@/components/Card";
import { featuresList } from "@/utils/cardDate";
import { Fragment } from "react/jsx-runtime";
import FeatureTypes from "@/utils/cardDate";

function Feature() {
  return (
    <>
      <div
        className=" md:h-screen  flex flex-col items-center justify-center"
        id="feature"
      >
        <div className=" text-center flex flex-col  justify-center  items-center ">
          <div className=" text-[3.5rem] font-semibold">Features</div>
          <p className=" text-sm md:text-[1.1rem] w-[80%] text-clip text-center text-slate-400 ">
            This project serves as a pioneering experiment, showcasing the
            seamless integration of cutting-edge features such as
            authentication, API routes, and static pages within the realm of
            forest fire prevention using MERN Stack and Pyhton
          </p>
        </div>
        <div className=" flex justify-center items-center mt-4">
          <div className="p-4 gap-2 grid md:grid-cols-3 md:w-[80%]">
            {featuresList.map(
              (
                { svgPath, title, description, id, viweBox }: FeatureTypes,
                idx: number
              ) => {
                return (
                  <>
                    <Fragment key={idx}>
                      <Card
                        viweBox={viweBox}
                        key={id + "dd"}
                        id={id}
                        svgpath={svgPath}
                        title={title}
                        description={description}
                      />
                    </Fragment>
                  </>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
