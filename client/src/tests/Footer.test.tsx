import { createTheme, ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";

function MockFooter() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Footer />
    </ThemeProvider>
  );
}

test("should render footer text", () => {
  const { getByText } = render(<MockFooter />);
  getByText(/2020 Learning Curve/im);
});
