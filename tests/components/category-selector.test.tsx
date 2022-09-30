import { render, waitFor } from "testing-utils";

import { CategorySelector } from "components/category-selector";

describe("Category Selector", () => {
  it("displays the categories", () => {
    const fakeCategories = ["Outdoor", "Office", "Indoor", "Green"];

    const { getByText } = render(
      <CategorySelector categories={fakeCategories} />
    );

    const visibleElements = fakeCategories.map((c) => getByText(c).innerHTML);

    expect(visibleElements).toEqual(fakeCategories);
  });

  it("shows products if the user clicks on the category", async () => {
    const fakeCategory = "Outdoor";
    const productName = "Spathiphyllum";

    const { getByText, user } = render(
      <CategorySelector categories={[fakeCategory]} />
    );

    const categoryTitle = getByText(fakeCategory);

    await user.click(categoryTitle);

    await waitFor(() => {
      expect(getByText(productName)).toBeVisible();
    });
  });
});

export {};
