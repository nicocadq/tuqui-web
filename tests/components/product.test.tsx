import { Product } from "components/product";
import { render, screen, waitFor } from "testing-utils";
import "testing-utils/mocks/matchMedia";
import { products } from "testing-utils/mocks/shopping";
import { USER_FEEDBACK_ROLE } from "testing-utils/variables";

const fakeProduct = products[0];

describe("Product", () => {
  it("renders correctly", () => {
    const { getByAltText, getByRole, getByText } = render(
      <Product name={fakeProduct.name} imageUrl={fakeProduct.imageUrl} />
    );

    const image = getByAltText(fakeProduct.name);

    expect(image).toBeVisible();
    expect(getByText(fakeProduct.name)).toBeVisible();

    const markAsFavoriteButton = getByRole("button", {
      name: /favorite/i,
    });

    expect(markAsFavoriteButton).toBeVisible();
  });

  describe("behaves correctly after favorite click", () => {
    // it.todo("makes network request");

    it("shows a toast ", async () => {
      const { getByRole, user } = render(
        <Product name={fakeProduct.name} imageUrl={fakeProduct.imageUrl} />
      );

      const markAsFavoriteButton = getByRole("button", {
        name: /favorite/i,
      });

      await user.click(markAsFavoriteButton);

      await waitFor(() => {
        expect(screen.getByRole(USER_FEEDBACK_ROLE)).toBeDefined();
      });
    });
  });
});
