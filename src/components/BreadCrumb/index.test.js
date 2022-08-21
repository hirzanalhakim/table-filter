import { render, screen } from "@testing-library/react";
import Breadcrumb from ".";

test("renders Breadcrumb Component", () => {
  render(<Breadcrumb />);
  const homeText = screen.getByText(/Home/i);
  expect(homeText).toBeInTheDocument();
});

test("renders Breadcrumb Component with Props", () => {
  render(<Breadcrumb title='Title' />);
  const homeText = screen.getByText(/Home/i);
  const titleElement = screen.getByText(/title/i);
  expect(homeText).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
});
