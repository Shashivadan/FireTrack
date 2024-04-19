import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
const SignUp = lazy(() => import("@/pages/SignUp"));
const Home = lazy(() => import("@/pages/Home"));
const HeroModel = lazy(() => import("@/pages/HeroModel"));
const Assistanse = lazy(() => import("@/pages/Assistanse"));
const Signin = lazy(() => import("@/pages/Signin"));
const Logs = lazy(() => import("@/pages/Logs"));

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
          <Route
            path="/logs"
            element={
              <PrivateRoute>
                <Suspense fallback={<Loader />}>
                  <Logs />
                </Suspense>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Loader />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
