import { useState, useReducer } from "react";
import "./App.css";

function App() {
  // const [state, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState(0);

  const inputHandler = (e) => {
    const name = e.target.value;
    setText(name);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={text} onChange={inputHandler} />
      </form>
    </>
  );
}

export default App;
