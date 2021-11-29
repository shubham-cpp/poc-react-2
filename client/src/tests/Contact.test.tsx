import { createTheme, ThemeProvider } from "@mui/material";
import { cleanup, render } from "@testing-library/react";
import Contact from "../components/Contact";

const theme = createTheme();
function MockContact() {
  return (
    <ThemeProvider theme={theme}>
      <Contact />
    </ThemeProvider>
  );
}

describe("Contact.tsx component", () => {
  afterEach(cleanup);
  describe("headings", () => {
    test("should render phone", () => {
      const { getByRole } = render(<MockContact />);
      getByRole("heading", { name: /phone/i });
    });
    test("should render pre-primary school", () => {
      const { getAllByRole } = render(<MockContact />);
      getAllByRole("heading", { name: "Pre-Primary School" });
    });
    test("should render primary & secondary", () => {
      const { getAllByRole } = render(<MockContact />);
      getAllByRole("heading", {
        name: "Primary & Secondary School",
      });
    });
    test("should render email", () => {
      const { getByRole } = render(<MockContact />);
      getByRole("heading", { name: /email/i });
    });
    test("should render location", () => {
      const { getByRole } = render(<MockContact />);
      getByRole("heading", { name: /location/i });
    });
  });
  describe("subtitles of heading", () => {
    test("should phone number of pre-primary", () => {
      const { getByRole } = render(<MockContact />);
      getByRole("heading", { name: /95031\s41559/im });
    });
    test("should phone number of primary & secondary", () => {
      const { getByRole } = render(<MockContact />);
      getByRole("heading", { name: /95031\s41560/im });
    });

    test("should email address of pre-primary", () => {
      const { getByRole } = render(<MockContact />);
      getByRole("heading", { name: /kps.preprimary@learningcurve.com/im });
    });
    test("should email address of primary & secondary", () => {
      const { getByRole } = render(<MockContact />);
      getByRole("heading", { name: /kps.primarysec@learningcurve.com/im });
    });

    test("should location maharashtra", () => {
      const { getByRole } = render(<MockContact />);
      getByRole("heading", { name: /maharashtra/im });
    });
  });
});
