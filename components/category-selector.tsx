import { FC } from "react";
import { Collapse, Text } from "@nextui-org/react";

import styles from "styles/components/category-selector.module.css";

interface CategorySelectorProps {
  categories: string[];
}

export const CategorySelector: FC<CategorySelectorProps> = ({ categories }) => {
  const showElements = typeof categories !== "undefined";

  return (
    <Collapse.Group className={styles.container} data-testid="categories">
      {showElements &&
        categories.map((c) => (
          <Collapse key={c} title={c}>
            <Text>Spathiphyllum</Text>
          </Collapse>
        ))}
    </Collapse.Group>
  );
};
