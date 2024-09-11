import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./Sections/BookingForm";
import BookingPage from "./Sections/BookingPage";

test("Renders the BookingPage heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
