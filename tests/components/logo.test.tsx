import { render, screen } from "@testing-library/react";

import { Logo } from "components/logo";

describe("Home", () => {
  it("renders the heading", () => {
    const { getByText } = render(<Logo />);

    getByText(/tuqui/i);
  });
});
