import { faker } from "@faker-js/faker";

import { Category, Product } from "interfaces";

export const fakeProducts: Product[] = [
  { id: "1", name: "Spathiphyllum", imageUrl: faker.image.imageUrl(250, 250) },
  {
    id: "2",
    name: "Bird of Paradise",
    imageUrl: faker.image.imageUrl(250, 250),
  },
];

export const fakeCategories: Category[] = [
  { id: "1", name: "Outdoor", products: fakeProducts },
  { id: "2", name: "Office", products: fakeProducts },
  { id: "3", name: "Indoor", products: fakeProducts },
  { id: "4", name: "Green", products: fakeProducts },
];

export const categoryNames = fakeCategories.map((c) => c.name);
