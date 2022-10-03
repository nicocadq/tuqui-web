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
        categories.map(({ color, name, products }) => (
          <Collapse
            key={name}
            title={
              <Title
                category={name}
                color={color}
                productsAmount={products.length}
              />
            }
          >
            <Grid.Container gap={1} justify="flex-start">
              {products.map(({ name: productName, id, imageUrl }) => (
                <Grid key={id} xs={12}>
                  <Product name={productName} imageUrl={imageUrl} />
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
  color: string;
  productsAmount: number;
}

const Title: FC<TitleProps> = ({ category, color, productsAmount }) => {
  return (
    <Grid.Container data-testid={category} gap={1.5} alignItems="center">
      <Grid
        aria-label={`Color: ${color}`}
        data-testid={color}
        className={styles.color}
        style={{ backgroundColor: color }}
      />
      <Grid>
        <Text h3 size={16}>
          {category}
        </Text>
        <Text size={12}>{productsAmount} products</Text>
      </Grid>
    </Grid.Container>
  );
};
