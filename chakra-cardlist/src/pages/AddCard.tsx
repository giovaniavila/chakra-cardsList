import { Box, Grid, Input, Text, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "./Card";

interface props{
  nome: string
}

const AddCard = () => {
  const [cards, setCards] = React.useState<String[]>([]);
  const [inputValue, setInputValue] = useState("");

  const adicionarCard = () => {
    setCards([...cards, inputValue]);
    setInputValue("")
  };

  const deletarCard = (index: number) => {
    const novosCards = cards.filter((_, indiceRestante) => indiceRestante !== index); //crio uma nova array de numeros que nao contem o meu indice (index) passado no map do componente Card
    setCards(novosCards);
  };

  return (
    <Grid placeContent="start center" marginTop="150px" w="100%">
      <Flex alignItems="center" w="40vw" gap="10px">
        <Input
          placeholder="Nome do card"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Text
          onClick={adicionarCard}
          _hover={{ backgroundColor: "#3C434D", cursor: "pointer" }}
          padding="5px 10px"
          backgroundColor="#121E31"
          borderRadius="8px"
          color="white"
        >
          +
        </Text>
      </Flex>
      <Flex marginTop="50px" flexDirection="column" gap="20px">
        {cards.map((nome, index) => (
          <Card key={index} nome={nome as string} onDelete={() => deletarCard(index)} />
        ))}
      </Flex>
    </Grid>
  );
};

export default AddCard;
