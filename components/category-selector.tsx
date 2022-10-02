import { FC, Fragment } from "react";
import Image from "next/image";
import { Collapse, Text } from "@nextui-org/react";

import { Category } from "interfaces";

import styles from "styles/components/category-selector.module.css";

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
            {products.map(({ name: productName, id, imageUrl }) => (
              <Fragment key={id}>
                <Text>{productName}</Text>
                <Image
                  alt={productName}
                  src={imageUrl}
                  height={250}
                  width={250}
                />
              </Fragment>
            ))}
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
