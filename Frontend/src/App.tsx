import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import HeroModel from "./pages/HeroModel";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <div className=" bg-[#030711] text-white ">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/signin" Component={Signin} />
          <Route path="/signup" Component={SignUp} />

          <Route
            path="/froestprediction"
            element={
              <PrivateRoute>
                <HeroModel />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
