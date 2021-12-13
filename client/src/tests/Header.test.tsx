import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Admission, Contact, Header, Home } from "../components";

function MockHeader() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
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
    screen.getByRole("link", { name: /About/i });
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
    // expect(screen.getByRole("icon")).toBeInTheDocument();
    // expect(screen.getByRole("icon")).toBeInTheDocument();
    screen.getByLabelText("Toggle navigation");
  });
  describe("clicking nav button should render", () => {
    beforeEach(() => {
      const navBtn = screen.getByLabelText("Toggle navigation");
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
