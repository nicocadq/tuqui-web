import { FC, MouseEventHandler } from "react";
import { Card, Text, Button, Row } from "@nextui-org/react";

import styles from "styles/components/product.module.css";

import { HeartIcon } from "./icons/heart";

interface ProductProps {
  imageUrl: string;
  name: string;
  onFavoriteClick: MouseEventHandler<HTMLButtonElement>;
}

export const Product: FC<ProductProps> = ({
  imageUrl,
  name,
  onFavoriteClick,
}) => {
  return (
    <Card>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          alt={name}
          height={140}
          objectFit="cover"
          src={imageUrl}
          width="100%"
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: "flex-start" }}>
        <Row justify="space-between" align="center">
          <Text b>{name}</Text>
          <Button
            icon={<HeartIcon fill="currentColor" filled />}
            onClick={onFavoriteClick}
            className={styles.button}
            aria-label="Add to favorite"
          />
        </Row>
      </Card.Footer>
    </Card>
  );
};
