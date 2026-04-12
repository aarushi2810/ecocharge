import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders SolarShare navigation", () => {
  render(<App />);
  expect(screen.getByText(/SolarShare/i)).toBeInTheDocument();
});
