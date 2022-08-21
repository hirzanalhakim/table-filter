import { render, screen } from "@testing-library/react";
import NotFound from ".";

test("renders NotFound Pages", () => {
  render(<NotFound />);
  const notFoundText = screen.getByText(/Page Not Found/i);
  expect(notFoundText).toBeInTheDocument();
});
