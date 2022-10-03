import { Product } from "components/product";
import { render } from "testing-utils";
import { fakeProducts } from "testing-utils/mocks/shopping";

const fakeProduct = fakeProducts[0];
const onFavoriteClickFn = jest.fn();

describe("Product", () => {
  it("renders correctly", () => {
    const { getByAltText, getByRole, getByText } = render(
      <Product
        name={fakeProduct.name}
        imageUrl={fakeProduct.imageUrl}
        onFavoriteClick={onFavoriteClickFn}
      />
    );

    const image = getByAltText(fakeProduct.name);

    expect(image).toBeVisible();
    expect(getByText(fakeProduct.name)).toBeVisible();

    const markAsFavoriteButton = getByRole("button", {
      name: /favorite/i,
    });

    expect(markAsFavoriteButton).toBeVisible();
  });
});
