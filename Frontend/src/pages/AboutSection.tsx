import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Container } from "@/components/ui/container";

const AboutSection = () => {
  return (
    <div className="py-8 px-4 h-screen items-center flex justify-center flex-col max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          About Our Forest Fire Prediction Project
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              Our project revolutionizes forest fire prediction through a
              user-friendly web interface, making complex algorithms accessible
              to all.
            </p>

            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Input temperature, oxygen levels, and humidity</li>
              <li>Python backend integrated with machine learning model</li>
              <li>Calculates probability of forest fire</li>
              <li>Emphasizes seamless data exchange</li>
              <li>Simplifies intricate concepts</li>
            </ul>

            <p className="text-base">
              By demystifying the process within a succinct framework, this
              tutorial equips developers with fundamental skills. Focused on
              real-time applications, our project bridges the gap between
              machine learning and web technologies, offering an invaluable
              educational resource in a compact and accessible format.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AboutSection;
