import type { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";

import { Product } from "interfaces";
import { sleep } from "utils/sleep";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const products = Array.from({ length: 20 }).map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    imageUrl: faker.image.imageUrl(250, 250),
    isFavorite: faker.datatype.boolean(),
  }));

  await sleep();

  res.status(200).json(products);
}
