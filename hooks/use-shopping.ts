import { useQuery } from "react-query";

import { httpClient } from "http-client";
import { Category } from "interfaces";

const CATEGORIES_KEY = "categories";

const getCategories = async (): Promise<Category[]> => {
  const response = await httpClient.get("/categories");

  return response.data;
};

export const useCategories = () => {
  return useQuery<Category[], string>([CATEGORIES_KEY], getCategories);
};
