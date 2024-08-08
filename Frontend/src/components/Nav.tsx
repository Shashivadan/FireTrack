import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useRecoilValue } from "recoil";
import { globleUserAtom } from "@/store/atoms/authAtom";
import { getAuthToken } from "@/utils/AxiosBaseUrl";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Nav() {
  const navigate = useNavigate();
  const user = useRecoilValue(globleUserAtom);

  const handleSignOut = () => {
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
    getAuthToken();
    window.location.reload();
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Assistance", path: "/assistance", requiresAuth: true },
    { label: "Logs", path: "/logs", requiresAuth: true },
    { label: "About", path: "/about" },
    { label: "Add Emails", path: "/setemails" },
  ];

  return (
    <div className="max-w-screen-xl m-auto">
      <nav className="font-Inter p-2 justify-between flex items-center">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl cursor-auto hover:scale-90 transition duration-500">
            FireTrack
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navItems.map(
            (item, index) =>
              (!item.requiresAuth || user) && (
                <NavLink
                  key={index}
                  to={item.path}
                  className="cursor-pointer text-slate-300 font-semibold text-[0.9rem] hover:text-white"
                >
                  {item.label}
                </NavLink>
              )
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

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden  bg-transparent   blur-0"
              >
                <Menu className="h-6 w-6 " />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-4">
                {navItems.map(
                  (item, index) =>
                    (!item.requiresAuth || user) && (
                      <SheetClose asChild key={index}>
                        <NavLink
                          to={item.path}
                          className="cursor-pointer text-slate-700 font-semibold text-[0.9rem] hover:text-black"
                        >
                          {item.label}
                        </NavLink>
                      </SheetClose>
                    )
                )}
                {user && (
                  <SheetClose asChild>
                    <Button
                      onClick={handleSignOut}
                      className="font-[550] bg-[#282c43] text-[0.8rem]"
                    >
                      Sign Out
                    </Button>
                  </SheetClose>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
