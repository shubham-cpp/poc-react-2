import { render } from "@testing-library/react";
import Home from "../components/Home";

test('should render "this is home"', () => {
  const { getByRole } = render(<Home />);
  getByRole("heading", { name: /this is home/im });
});
