import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders EcoCharge navigation", () => {
  render(<App />);
  expect(screen.getByText(/EcoCharge/i)).toBeInTheDocument();
});
