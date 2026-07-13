import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddCar from "./components/AddCar";
import ViewCar from "./components/ViewCar";
import Nav from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddCar />}></Route>
          <Route path="/view" element={<ViewCar />}></Route>
          <Route path="/nav" element={<Nav />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
