import { render, waitFor, screen } from "@testing-library/react";
import Images, { ImagesData } from "../components/Images";

test("should render images", async () => {
  // await act(async () => {
  render(<Images />);
  // });
  waitFor(() => {
    for (let i = 0; i < ImagesData.length; i++)
      expect(screen.getByAltText(ImagesData[0].altText)).toBeInTheDocument();
  });
});
