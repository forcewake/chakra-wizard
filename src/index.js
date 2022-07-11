import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ChakraProvider>,
  rootElement
);
