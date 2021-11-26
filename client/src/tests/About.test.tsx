import { createTheme, ThemeProvider } from "@mui/material";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import About from "../components/About";

const theme = createTheme();
function MockHeader() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <About />
      </BrowserRouter>
    </ThemeProvider>
  );
}

describe("About.tsx Component", () => {
  afterEach(cleanup);
  test("should render header history", () => {
    const { getByRole } = render(<MockHeader />);
    expect(getByRole("heading", { name: /history/i })).toBeInTheDocument();
  });
  test("should render vision", () => {
    const { getByRole } = render(<MockHeader />);
    expect(getByRole("heading", { name: /vision/i })).toBeInTheDocument();
  });
  test("should render history paragraph", () => {
    const { getByText } = render(<MockHeader />);
    expect(
      getByText("We launched Learning Curve Public School in 2001", {
        exact: false,
      })
    ).toBeInTheDocument();
  });
  test("should render vision paragraph", () => {
    const { getByText } = render(<MockHeader />);
    expect(
      getByText("Learning Curve Public School seeks to provide the best", {
        exact: false,
      })
    ).toBeInTheDocument();
  });
});
