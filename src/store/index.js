// Arquivo responsável pela Configuração do ducks, sagas com Redux.
import { createStore } from "redux";

// Reducers
// Vou transforma essa lista de todos em objeto para adicionar mais informações.
// Teremos uma propriedade id pra cada um
// Teremos uma terceira propriedade, chamada completed iniciando como false.
const INITIAL_STATE = [
  { id: 1, text: "Fazer café", completed: false },
  { id: 2, text: "Estudar React Native", completed: true },
  { id: 3, text: "Emagrecer", completed: false }
];

//Vamos utilizar um switch e case
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Math.random(), text: action.text, completed: false }
      ];
    case "MARK_AS_COMPLETED":
      //Pra cada state.map irei receber um todo;
      //Se o id desse todo que estou percorrendo for igual a action.id que é o id que esta vindo lá pela minha action
      //Eu vou retornar todos os dados que o todo já tem '..todo', porém,
      //A propriedade completed irei sobrescrever com !todo.completed que se ela estiver false vai transformar em true e se ela tiver true transforma  em false.
      //Caso o id não bata, irá retorar o mesmo todo.
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      //Caso não entre em nenhum case
      return state;
  }
}

//Quando eu adiciono um novo todo, ao invés de adicionar um texto, irei adiconar um objeto.
//O id será aleatorio para este exemplo
//O text desse todo vai ser a action que definimos lá em cima text
//O completed será false
// function reducer(state = INITIAL_STATE, action) {
//   if (action.type === "ADD_TODO") {
//     return [
//       ...state,
//       { id: Math.random(), text: action.text, completed: false }
//     ];
//   }
//   return state;
// }

const store = createStore(reducer);

export default store;

// O dispatch dispara uma action pro nosso redux
// Reducer: responsavel por armazenar e manipular os dados presentes dentro do nosso state do redux,
// que é o nosso estado global da aplicação.

//Actions: são as ações que queremos realizar dentro do nosso state do reducer do redux.
//Cada reducer tem a obrigação de filtrar quais actions ele vai utilizar ou não.

// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";

// import rootReducer from "./ducks";
// import rootSaga from "./sagas";

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware];

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run(rootSaga);

// export default store;
