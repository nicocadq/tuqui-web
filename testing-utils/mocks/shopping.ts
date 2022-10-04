import { faker } from "@faker-js/faker";

import { Category, Product } from "interfaces";

const colors = ["#144DDE", "#FFFFFF", "#737373", "#ECECEC"];

export const products: Product[] = Array.from({ length: 5 }).map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  imageUrl: faker.image.imageUrl(250, 250),
  isFavorite: faker.datatype.boolean(),
}));

export const categories: Category[] = Array.from({ length: 5 }).map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  color: colors[Math.floor(Math.random() * colors.length)],
  products,
}));

export const categoriesInfo = categories.map((c) => ({
  name: c.name,
  color: c.color,
}));
