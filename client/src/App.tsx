import { CssBaseline, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
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
import themes from "./misc/theme";

function App(): ReactElement {
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
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
      <Footer />
    </ThemeProvider>
  );
}

export default App;
