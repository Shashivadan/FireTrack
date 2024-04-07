import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Signin from "./pages/Signin";
// import SignUp from "./pages/SignUp";
// import HeroModel from "./pages/HeroModel";
import PrivateRoute from "./routes/PrivateRoute";
// import Assistanse from "./pages/Assistanse";
import { lazy, Suspense } from "react";
// import Signin from "./pages/Signin";
import Loader from "./components/Loader";

const SignUp = lazy(() => import("@/pages/SignUp"));
const Home = lazy(() => import("@/pages/Home"));
const HeroModel = lazy(() => import("@/pages/HeroModel"));
const Assistanse = lazy(() => import("@/pages/Assistanse"));
const Signin = lazy(() => import("@/pages/Signin"));

function App() {
  return (
    <>
      <div className=" bg-[#030711] text-white ">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/signin"
            element={
              <Suspense fallback={<Loader />}>
                <Signin />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<Loader />}>
                <SignUp />
              </Suspense>
            }
          />

          <Route
            path="/froestprediction"
            element={
              <PrivateRoute>
                <Suspense fallback={<Loader />}>
                  <HeroModel />
                </Suspense>
              </PrivateRoute>
            }
          />
          <Route
            path="/assistance"
            element={
              <PrivateRoute>
                <Suspense fallback={<Loader />}>
                  <Assistanse />
                </Suspense>
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
