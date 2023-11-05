import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Case from "./Case";
import Contact from "./Contact";
import Home from "./Home";
import Header from "../components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/About" element={<About />} />
        <Route  path="/Case" element={<Case />} />
        <Route  path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
