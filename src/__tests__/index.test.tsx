import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByTestId("heading");

    console.log(heading);
    expect(heading).toBeInTheDocument();
  });
});
