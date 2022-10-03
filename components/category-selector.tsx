import { FC } from "react";
import { Collapse, Grid, Text } from "@nextui-org/react";

import { Category } from "interfaces";

import styles from "styles/components/category-selector.module.css";

import { Product } from "./product";

interface CategorySelectorProps {
  categories: Category[];
}

export const CategorySelector: FC<CategorySelectorProps> = ({ categories }) => {
  const showElements = typeof categories !== "undefined";

  return (
    <Collapse.Group className={styles.container} data-testid="categories">
      {showElements &&
        categories.map(({ name, products }) => (
          <Collapse
            key={name}
            title={<Title category={name} productsAmount={products.length} />}
          >
            <Grid.Container gap={1} justify="flex-start">
              {products.map(({ name: productName, id, imageUrl }) => (
                <Grid key={id} xs={12} sm={3}>
                  <Product
                    name={productName}
                    imageUrl={imageUrl}
                    onFavoriteClick={() => null}
                  />
                </Grid>
              ))}
            </Grid.Container>
          </Collapse>
        ))}
    </Collapse.Group>
  );
};

interface TitleProps {
  category: string;
  productsAmount: number;
}

const Title: FC<TitleProps> = ({ category, productsAmount }) => {
  return (
    <div data-testid={category}>
      <Text h3>{category}</Text>
      <Text>{productsAmount} products</Text>
    </div>
  );
};
