// export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   imageUrl: string;
//   isFavorite: boolean;
// }

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
  color: string;
}
