import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from ".";

test("renders Example Project", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const exampleElement = screen.getByText(/Example Project/i);
  const linkElement = screen.getByText(/Go To Table/i);
  expect(exampleElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
