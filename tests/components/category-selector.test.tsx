import { render, waitFor } from "testing-utils";
import { categoriesInfo, categories } from "testing-utils/mocks/shopping";

import { CategorySelector } from "components/category-selector";

describe("Category Selector", () => {
  it("displays different colored the categories", () => {
    const { getByText, getByTestId } = render(
      <CategorySelector categories={categories} />
    );

    const categoriesFromDom = categories.map((c) => ({
      name: getByText(c.name).innerHTML,
      color: getByTestId(`${c.name}_${c.color}`)
        .getAttribute("data-testid")
        ?.split("_")[1],
    }));

    expect(categoriesFromDom).toEqual(categoriesInfo);
  });

  it("shows products if the user clicks on the category", async () => {
    const fakeCategory = categories[0];
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
    const category = categories[0];
    const subtitle = `${category.products.length} products`;

    const { getAllByText, getByTestId } = render(
      <CategorySelector categories={categories} />
    );

    const productsAmountElement = getAllByText(subtitle)[0];

    expect(getByTestId(category.name)).toContainElement(productsAmountElement);
  });
});
