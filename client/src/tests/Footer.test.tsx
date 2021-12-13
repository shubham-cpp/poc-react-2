import { render } from "@testing-library/react";
import Footer from "../components/Footer";

function MockFooter() {
  return <Footer />;
}

test("should render footer text", () => {
  const { getByText } = render(<MockFooter />);
  getByText(/Learning Curve Public School /im);
});
