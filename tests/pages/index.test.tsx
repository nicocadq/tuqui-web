import { render, screen } from "@testing-library/react";

import Home from "pages/index";

describe("Home", () => {
  it("renders the heading", () => {
    render(<Home />);

    screen.getByRole("heading", {
      name: /welcome/i,
    });
  });
});
