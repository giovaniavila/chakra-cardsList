import { useState } from "react";
import { ChakraProvider, Grid, Text } from "@chakra-ui/react";
import Routes from "./routes/routes";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes/>
    </ChakraProvider>
  );
}

export default App;
