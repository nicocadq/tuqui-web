import { render, waitFor } from "testing-utils";
import { categoriesInfo, fakeCategories } from "testing-utils/mocks/shopping";

import { CategorySelector } from "components/category-selector";

describe("Category Selector", () => {
  it("displays different colored the categories", () => {
    const { getByText, getByTestId } = render(
      <CategorySelector categories={fakeCategories} />
    );

    const categoriesFromDom = fakeCategories.map((c) => ({
      name: getByText(c.name).innerHTML,
      color: getByTestId(c.color).getAttribute("data-testid"),
    }));

    expect(categoriesFromDom).toEqual(categoriesInfo);
  });

  it("shows products if the user clicks on the category", async () => {
    const fakeCategory = fakeCategories[0];
    const { products } = fakeCategory;

    const { getByText, user } = render(
      <CategorySelector categories={[fakeCategory]} />
    );

    const categoryTitle = getByText(fakeCategory.name);

    await user.click(categoryTitle);

    await waitFor(() => {
      products.forEach((p) => {
        expect(getByText(p.name)).toBeVisible();
      });
    });
  });

  it("shows amount of products per each category", () => {
    const category = fakeCategories[0];
    const subtitle = `${category.products.length} products`;

    const { getAllByText, getByTestId } = render(
      <CategorySelector categories={fakeCategories} />
    );

    const productsAmountElement = getAllByText(subtitle)[0];

    expect(getByTestId(category.name)).toContainElement(productsAmountElement);
  });
});
