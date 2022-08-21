import { render, screen } from "@testing-library/react";
import Header from ".";

test("renders Header Component", () => {
  render(<Header title='Title' />);
  const title = screen.getByText(/Example App/i);
  expect(title).toBeInTheDocument();
});
