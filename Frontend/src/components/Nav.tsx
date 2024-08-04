import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { globleUserAtom } from "@/store/atoms/authAtom";
import { getAuthToken } from "@/utils/AxiosBaseUrl";
import { motion } from "framer-motion";

function Nav() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useRecoilValue(globleUserAtom);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = () => {
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
    getAuthToken();
    window.location.reload();
  };

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", path: "/" },
    {
      path: "/",
      label: "Features",
      onClick: () => {
        navigate("/");

        handleClickScroll("feature");
      },
    },
    { label: "Assistance", path: "/assistance", requiresAuth: true },
    { label: "Logs", path: "/logs", requiresAuth: true },
    { label: "Doc", path: "" },
  ];

  return (
    <nav className="font-Inter p-2 justify-between flex md:justify-between items-center">
      <div className="flex items-center">
        <h1 className="hidden md:block font-bold text-2xl cursor-auto hover:scale-90 transition duration-500">
          FireTrack
        </h1>
        <button onClick={toggleMenu} className="md:hidden font-bold text-xl">
          Menu
        </button>
      </div>

      <div
        className={`md:flex gap-6 ${isMenuOpen ? "block" : "hidden"} md:block`}
      >
        {navItems.map(
          (item, index) =>
            (!item.requiresAuth || user) && (
              <NavLink
                key={index}
                to={item.path || "#"}
                onClick={item.onClick}
                className="block md:inline-block m-4 md:m-0 cursor-pointer text-slate-300 font-semibold text-[0.9rem] hover:text-white"
              >
                {item.label}
              </NavLink>
            )
        )}
        {isMenuOpen && user && (
          <button
            onClick={handleSignOut}
            className="md:hidden block m-4 md:m-0 cursor-pointer text-slate-300 font-semibold text-[0.9rem] hover:text-white"
          >
            Sign Out
          </button>
        )}
      </div>

      <div className="flex items-center gap-3">
        {user ? (
          <>
            <h1 className="text-xl font-semibold">{user}</h1>
            <Button
              onClick={handleSignOut}
              className="hidden md:block font-[550] bg-[#282c43] text-[0.8rem]"
            >
              Sign Out
            </Button>
          </>
        ) : (
          <motion.div whileHover={{ scale: 1.2 }}>
            <Button
              onClick={() => navigate("/signin")}
              className="font-[550] bg-[#282c43] text-[0.8rem]"
            >
              Sign In
            </Button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
