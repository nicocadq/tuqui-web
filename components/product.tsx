import { FC } from "react";
import { Card, Text, Button, Row } from "@nextui-org/react";
import { toast } from "react-hot-toast";

import styles from "styles/components/product.module.css";

import { HeartIcon } from "./icons/heart";

interface ProductProps {
  imageUrl: string;
  name: string;
}

export const Product: FC<ProductProps> = ({ imageUrl, name }) => {
  const handleClick = () => {
    toast(`${name} added to favorites`);
  };

  return (
    <Card className={styles.container}>
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
            onPress={handleClick}
            className={styles.button}
            aria-label="Add to favorite"
          />
        </Row>
      </Card.Footer>
    </Card>
  );
};
