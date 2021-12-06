import "bootstrap/dist/css/bootstrap.min.css";
import { ReactElement } from "react";
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

function App(): ReactElement {
  return (
    <>
      <BrowserRouter>
        <Header />
        <h1 className="text-center heading">Learning Curve Public School</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/about" element={<About />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
