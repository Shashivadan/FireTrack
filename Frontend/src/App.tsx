import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/signin" Component={Signin} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </>
  );
}

export default App;
