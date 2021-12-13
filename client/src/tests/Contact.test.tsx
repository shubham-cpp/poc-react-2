import { cleanup, render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

describe("Contact.tsx component", () => {
  afterEach(cleanup);
  beforeEach(() => render(<Contact />));
  describe("headings", () => {
    test("should render phone", () => {
      screen.getByRole("heading", { name: /phone/i });
    });
    test("should render pre-primary school", () => {
      screen.getAllByText("Pre-Primary School");
    });
    test("should render primary & secondary", () => {
      screen.getAllByText("Primary & Secondary School");
    });
    test("should render email", () => {
      screen.getByRole("heading", { name: /email/i });
    });
    test("should render location", () => {
      screen.getByRole("heading", { name: /location/i });
    });
  });
  describe("subtitles of heading", () => {
    test("should phone number of pre-primary", () => {
      screen.getByText(/95031\s41559/im);
    });
    test("should phone number of primary & secondary", () => {
      screen.getByText(/95031\s41560/im);
    });

    test("should email address of pre-primary", () => {
      screen.getByText(/kps.preprimary@learningcurve.com/im);
    });
    test("should email address of primary & secondary", () => {
      screen.getByText(/kps.primarysec@learningcurve.com/im);
    });

    test("should location maharashtra", () => {
      screen.getByText(/maharashtra/im);
    });
  });
});
