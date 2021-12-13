import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import { store } from "../app/store";

const MockApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const resizeWindow = (x: number, y: number) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event("resize"));
};

test("should render h3", () => {
  const { getByRole } = render(<MockApp />);
  getByRole("heading", { name: "Learning Curve Public School", exact: true });
});

test("scroll to top", () => {
  resizeWindow(480, 720);
  const { getByLabelText } = render(<MockApp />);
  const scrollTopBtn = getByLabelText(/scrollTopBtn/);
  fireEvent.click(scrollTopBtn);
});
