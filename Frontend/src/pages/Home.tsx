import { motion } from "framer-motion";
import Opensource from "@/components/Opensource";
import Feature from "./Feature";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    if (!sessionStorage.getItem("token")) {
      return toast.warning("Signin before continuing");
    }
    navigate("/froestprediction");
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="scrollbar-none text-stone-50 w-full scroll-smooth"
    >
      <div className="bg-transparent h-fit max-w-screen-xl m-auto">
        <Nav />
        <motion.div variants={staggerChildren} className="h-fit mb-20">
          <div className="mt-[13rem] flex flex-col justify-center items-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, damping: 15, type: "spring" }}
              className="text-[2rem] tracking-tighter text-center w-[90%] font-[750] md:leading-[5rem] font-Inter md:text-[4.5rem]"
            >
              Turning the Heat Down: Revolutionizing Forest Fire Prevention.
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="mt-4 text-sm w-[60%] text-clip text-center text-slate-400 md:text-[1.2rem]"
            >
              Empowering Tomorrow's Forests Today: Ignite Change with Our
              Innovative Fire Prevention Solutions
            </motion.p>
            <motion.div variants={staggerChildren} className="mt-5 flex gap-2">
              <motion.div variants={fadeIn} whileHover={{ scale: 1.1 }}>
                <Button
                  onClick={handleClick}
                  className="bg-white text-black text-[1rem] font-medium px-6 py-4 hover:bg-zinc-300"
                >
                  Get Started
                </Button>
              </motion.div>
              <motion.div variants={fadeIn} whileHover={{ scale: 1.1 }}>
                <a
                  href="https://github.com/Shashivadan/FireTrack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-[0.9rem] font-[600] px-6 py-4 bg-transparent border-slate-600 border-[1px]">
                    GitHub
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Feature />
        </motion.div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ opacity: 0, y: 20, scale: 0 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", damping: 10 }}
          className="mb-10"
        >
          <Opensource />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-[5rem]"
        >
          <Footer />
        </motion.div>
      </div>
    </motion.div>
  );
}
