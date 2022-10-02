import { FC } from "react";
import { Collapse, Text } from "@nextui-org/react";

import styles from "styles/components/category-selector.module.css";

interface Category {
  name: string;
  products: string[];
}

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
            <Text>Spathiphyllum</Text>
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
