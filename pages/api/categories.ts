import type { NextApiRequest, NextApiResponse } from "next";

import { Category } from "interfaces";
import { categories } from "testing-utils/mocks/shopping";
import { sleep } from "utils/sleep";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
) {
  await sleep();

  res.status(200).json(categories);
}
