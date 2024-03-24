import Card from "@/components/Card";
import { featuresList, FeatureTypes } from "@/utils/cardDate";

function Feature() {
  return (
    <>
      <div
        className="h-screen  flex flex-col items-center justify-center"
        id="feature"
      >
        <div className=" text-center flex flex-col  justify-center  items-center ">
          <div className=" text-[3.5rem] font-semibold">Features</div>
          <p className=" text-[1.1rem] w-[80%] text-clip text-center text-slate-400 ">
            This project serves as a pioneering experiment, showcasing the
            seamless integration of cutting-edge features such as
            authentication, API routes, and static pages within the realm of
            forest fire prevention using MERN Stack and Pyhton
          </p>
        </div>
        <div className=" flex justify-center items-center mt-4">
          <div key={678} className="p-4 gap-2 grid md:grid-cols-3 w-[80%]">
            {featuresList.map(
              ({ svgPath, title, description, id, viweBox }: FeatureTypes) => {
                return (
                  <>
                    <div key={id}>
                      <Card
                        viweBox={viweBox}
                        key={id}
                        id={id}
                        svgpath={svgPath}
                        title={title}
                        description={description}
                      />
                    </div>
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
