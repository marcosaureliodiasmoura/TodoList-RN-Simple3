import React from "react";
import { View } from "react-native";

import "./config/ReactotronConfig"; // Para conseguir debugar a aplicação
import "./config/DevToolsConfig";

import { Provider } from "react-redux";
import store from "./store";

import TodoList from "./pages/TodoList";
const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
