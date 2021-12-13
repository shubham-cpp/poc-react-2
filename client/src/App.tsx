import "bootstrap/dist/css/bootstrap.min.css";
import { ReactElement } from "react";
import { BsFillCaretUpSquareFill } from "react-icons/bs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Admission,
  Contact,
  Footer,
  Header,
  Home,
  Images,
} from "./components";

const ScrollTopBtn = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button className=" scroll-btn d-block d-sm-none" onClick={toTop}>
      <BsFillCaretUpSquareFill />
    </button>
  );
};

function App(): ReactElement {
  return (
    <>
      <BrowserRouter>
        <Header />
        <h1 className="text-center heading">Learning Curve Public School</h1>

        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/about" element={<About />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </BrowserRouter>
      <ScrollTopBtn />
      <Footer />
    </>
  );
}

export default App;
