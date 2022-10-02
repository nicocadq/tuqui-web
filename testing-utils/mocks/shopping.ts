export const fakeProducts = ["Spathiphyllum", "Bird of Paradise"];

export const fakeCategories = [
  { name: "Outdoor", products: fakeProducts },
  { name: "Office", products: fakeProducts },
  { name: "Indoor", products: fakeProducts },
  { name: "Green", products: fakeProducts },
];

export const categoryNames = fakeCategories.map((c) => c.name);
