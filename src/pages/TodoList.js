import React from "react";

import { View, Text, Button } from "react-native";

import { connect } from "react-redux";

const TodoList = ({ todos, dispatch }) => (
  <View style={{ flex: 1, backgroundColor: "#FFF", justifyContent: "center" }}>
    {todos.map(todo => (
      <Text //Se o meu todo for completed true irei adicionar uma linha, senão farei nada
        onPress={() => dispatch({ type: "MARK_AS_COMPLETED", id: todo.id })}
        style={{ textDecorationLine: todo.completed ? "line-through" : "none" }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}
    <Button
      onPress={() => dispatch({ type: "ADD_TODO" })}
      title="Adicionar todo"
      color="#c4c"
    />
  </View>
);

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);

//1. Toda vez que eu conecto meu componente com o redux utilizando o connect
// Eu recebo uma propriedade chamada dispatch (linha 7).
// O dispatch serve para disparar essas actions

// Button linha 13
//Toda vez que a gente dispara um dispatch de dentro de qualquer componente da nossa aplicação,
// todos os reducers vão ouvir essa action.
//Cada reducer vai filtrar cada actions, informar quais action vão alterar o seu estado ou não.
