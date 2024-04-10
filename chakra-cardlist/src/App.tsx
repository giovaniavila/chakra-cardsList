import { useState } from "react";
import { ChakraProvider, Text } from '@chakra-ui/react'
import Routes from "./routes/routes";

function App() {
  return (
    <ChakraProvider>
      <Routes/>
    </ChakraProvider>
  );
}

export default App;
