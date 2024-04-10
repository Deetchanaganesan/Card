import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Cart from "./Cart";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Cart />
      </div>
    </ChakraProvider>
  );
}

export default App;
