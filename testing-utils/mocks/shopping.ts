import { faker } from "@faker-js/faker";

import { Category, Product } from "interfaces";

export const fakeProducts: Product[] = [
  { id: "1", name: "Spathiphyllum", imageUrl: faker.image.imageUrl(250, 250) },
  {
    id: "2",
    name: "Bird of Paradise",
    imageUrl: faker.image.imageUrl(150, 150),
  },
];

export const fakeCategories: Category[] = [
  { id: "1", name: "Outdoor", products: fakeProducts, color: "#144DDE" },
  { id: "2", name: "Office", products: fakeProducts, color: "#FFFFFF" },
  { id: "3", name: "Indoor", products: fakeProducts, color: "#737373" },
  { id: "4", name: "Green", products: fakeProducts, color: "#ECECEC" },
];

export const categoriesInfo = fakeCategories.map((c) => ({
  name: c.name,
  color: c.color,
}));
