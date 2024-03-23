import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className=" bg-[#151723] text-stone-50 w-full ">
        <div className=" bg-[#151723] h-fit max-w-screen-xl m-auto ">
          <Nav />
          <Routes>
            <Route path="/" element={<Home></Home>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
