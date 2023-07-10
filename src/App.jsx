import { useState, useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };

    default:
      return state;
  }
};

function App() {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState();

  const inputHandler = (e) => {
    const name = e.target.value;
    setText(name);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "add-todo", text });
    setText("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={text} onChange={inputHandler} />
      </form>
      <div>{JSON.stringify(todos, null, 2)}</div>
    </>
  );
}

export default App;
