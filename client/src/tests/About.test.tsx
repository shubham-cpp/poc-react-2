import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import About from "../components/About";

function MockHeader() {
  return (
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
}

describe("About.tsx Component", () => {
  afterEach(cleanup);
  beforeEach(() => render(<MockHeader />));
  test("should render header history", () => {
    expect(
      screen.getByRole("heading", { name: /history/i })
    ).toBeInTheDocument();
  });
  test("should render vision", () => {
    expect(
      screen.getByRole("heading", { name: /vision/i })
    ).toBeInTheDocument();
  });
  test("should render history paragraph", () => {
    expect(
      screen.getByText("We launched Learning Curve Public School in 2001", {
        exact: false,
      })
    ).toBeInTheDocument();
  });
  test("should render vision paragraph", () => {
    expect(
      screen.getByText(
        "Learning Curve Public School seeks to provide the best",
        {
          exact: false,
        }
      )
    ).toBeInTheDocument();
  });
});
