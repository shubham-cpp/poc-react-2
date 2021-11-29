import { createTheme, ThemeProvider } from "@mui/material";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Admission from "../components/Admission";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Home from "../components/Home";

function MockHeader() {
  return (
    <ThemeProvider theme={createTheme()}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

describe("renders all links", () => {
  beforeEach(() => {
    render(<MockHeader />);
  });
  afterEach(cleanup);
  test("should render home link", () => {
    screen.getByRole("link", { name: /Home/ });
  });
  test("should render contact link", () => {
    screen.getByRole("link", { name: /Contact/ });
  });
  test("should render about link", () => {
    screen.getByRole("link", { name: /About us/i });
  });
  test("should render admission link", () => {
    screen.getByRole("link", { name: /Admission/ });
  });
});

describe("test mobile version for navbar", () => {
  const resizeWindow = (x: number, y: number) => {
    window.innerWidth = x;
    window.innerHeight = y;
    window.dispatchEvent(new Event("resize"));
  };
  beforeEach(() => {
    resizeWindow(560, 720);
    render(<MockHeader />);
  });
  afterEach(cleanup);
  test("should render nav button", () => {
    expect(screen.getByRole("icon")).toBeInTheDocument();
  });
  describe("clicking nav button should render", () => {
    beforeEach(() => {
      const navBtn = screen.getByRole("icon");
      fireEvent.click(navBtn);
    });
    test("about link", () => {
      expect(screen.getByRole("link", { name: /About/ })).toBeInTheDocument();
    });
    test("contact link", () => {
      expect(screen.getByRole("link", { name: /Contact/ })).toBeInTheDocument();
    });
    test("admission link", () => {
      expect(
        screen.getByRole("link", { name: /Admission/ })
      ).toBeInTheDocument();
    });
  });
});
