import { motion } from "framer-motion";
import Card from "@/components/Card";
import { featuresList } from "@/utils/cardDate";
import FeatureTypes from "@/utils/cardDate";

function Feature() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="md:h-screen flex flex-col items-center justify-center">
      <div className="text-center flex flex-col justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[3.5rem] font-semibold"
        >
          Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-[1.1rem] w-[80%] text-clip text-center text-slate-400"
        >
          This project serves as a pioneering experiment, showcasing the
          seamless integration of cutting-edge features such as authentication,
          API routes, and static pages within the realm of forest fire
          prevention using MERN Stack and Python
        </motion.p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <motion.div
          className="p-4 gap-2 grid md:grid-cols-3 md:w-[80%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuresList.map(
            ({ svgPath, title, description, id, viweBox }: FeatureTypes) => (
              <motion.div key={id} variants={itemVariants}>
                <Card
                  viewBox={viweBox}
                  svgpath={svgPath}
                  title={title}
                  description={description}
                />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Feature;
