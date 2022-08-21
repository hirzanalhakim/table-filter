import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Example Project", () => {
  render(<App />);
  const exampleElement = screen.getByText(/Example Project/i);
  const linkElement = screen.getByText(/Go To Table/i);
  expect(exampleElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
