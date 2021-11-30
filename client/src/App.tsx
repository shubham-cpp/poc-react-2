import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import About from "./components/About";
import Admission from "./components/Admission";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import { Images } from "./components/Images";
// import Footer from "./components/Footer";

const theme = createTheme();
function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Learning Curve Public School
        </Typography>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/about" element={<About />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
