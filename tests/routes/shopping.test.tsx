import { setup, screen } from "testing-utils";
import { Shopping } from "routes/shopping";

describe("Shopping", () => {
  it("renders the heading", () => {
    setup(<Shopping />);

    screen.getByRole("heading", {
      name: /Shopping lists/i,
    });
  });

  it.todo("shows a search bar");

  it("shows the categories", () => {
    const { getByTestId } = setup(<Shopping />);

    const container = getByTestId(/categories/i);

    expect(container).toBeVisible();
  });
});
