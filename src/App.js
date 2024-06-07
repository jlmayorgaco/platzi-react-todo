import "./App.css";

import React from "react";
import { AppUI } from './AppUI';
import { useLocalStorage } from "./useLocalStorage";
import { TodoProvider } from "./components/TodoContext/TodoContext";


function App() {
  
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}

export { App };
