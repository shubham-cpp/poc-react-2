import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Admission from "../components/Admission";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

function MockAdmission() {
  return (
    <Provider store={store}>
      <Admission />
    </Provider>
  );
}

const mockerResponse = {
  data: [
    {
      category: "Pre-primary",
      options: [
        {
          id: 1,
          grade: "Nursery",
          fees: 50000,
          seats: 50,
        },
        {
          id: 2,
          grade: "Jr.KG",
          fees: 65000,
          seats: 50,
        },
        {
          id: 3,
          grade: "Sr.KG",
          fees: 65000,
          seats: 50,
        },
      ],
    },
    {
      category: "Primary",
      options: [
        {
          id: 1,
          grade: "I",
          fees: 70000,
          seats: 50,
        },
        {
          id: 2,
          grade: "II",
          fees: 70000,
          seats: 50,
        },
        {
          id: 3,
          grade: "III",
          fees: 70000,
          seats: 50,
        },
        {
          id: 4,
          grade: "IV",
          fees: 75000,
          seats: 50,
        },
        {
          id: 5,
          grade: "V",
          fees: 75000,
          seats: 50,
        },
      ],
    },
    {
      category: "Secondary",
      options: [
        {
          id: 1,
          grade: "VI",
          fees: 80000,
          seats: 50,
        },
        {
          id: 2,
          grade: "VII",
          fees: 80000,
          seats: 50,
        },
        {
          id: 3,
          grade: "VIII",
          fees: 85000,
          seats: 50,
        },
      ],
    },
  ],
};

describe("render tab layout", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce(mockerResponse);
    render(<MockAdmission />);
  });
  afterEach(cleanup);
  test("should render all tabs", () => {
    screen.getByRole("tab", { name: /Pre-primary/im });
    screen.getByRole("tab", { name: "Primary", exact: true });
    screen.getByRole("tab", { name: /secondary/im });
  });
  test("should render pre-primary tab", () => {
    const prePrimBtn = screen.getByRole("tab", { name: /Pre-primary/im });
    fireEvent.click(prePrimBtn);
    expect(screen.getByText("Nursery")).toBeInTheDocument();
  });
  test("should render primary tab", () => {
    const primBtn = screen.getByRole("tab", { name: "Primary", exact: true });

    fireEvent.click(primBtn);
    expect(
      screen.getAllByRole("cell", { name: "70000" })[0]
    ).toBeInTheDocument();
  });
  test("should render secondary tab", () => {
    const secondaryBtn = screen.getByRole("tab", {
      name: "Secondary",
      exact: true,
    });

    fireEvent.click(secondaryBtn);
    expect(screen.getByRole("cell", { name: "85000" })).toBeInTheDocument();
  });
});
describe("Api returns errors", () => {
  afterEach(cleanup);
  test("should render errors", () => {
    mockedAxios.get.mockRejectedValueOnce({ message: "Server is down" });
    render(<MockAdmission />);
    waitFor(() => {
      expect(
        screen.getByRole("heading", {
          name: "Unable to fetch data from server",
        })
      ).toBeInTheDocument();
      expect(screen.getByText(/server is down/i)).toBeInTheDocument();
    });
  });
});
