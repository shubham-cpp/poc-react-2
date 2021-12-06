import { render } from "@testing-library/react";
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

test("should render h3", () => {
  const { getByRole } = render(<MockApp />);
  getByRole("heading", { name: "Learning Curve Public School",exact:true });
});
