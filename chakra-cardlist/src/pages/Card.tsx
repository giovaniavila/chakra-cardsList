import { Box, Flex, Text } from "@chakra-ui/react";
import { CiTrash } from "react-icons/ci";
import React from "react";

interface props {
  nome: string;
  onDelete: () => void
}

const Card = ({ nome, onDelete }: props) => {
  return (
    <Flex justifyContent="space-between">
      <Text>{nome}</Text>
      <Box onClick={onDelete} _hover={{ color: "red", cursor: "pointer" }}>
        <CiTrash size={28} />
      </Box>
    </Flex>
  );
};

export default Card;
