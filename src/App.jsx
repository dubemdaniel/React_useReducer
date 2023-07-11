import { useState, useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [
          ...state.todos,
          { text: action.text, completed: false, id: Math.random() },
        ],
        todosCount: state.todosCount + 1,
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, i) => {
          i === action.i ? { ...t, completed: !t.completed } : t;
        }),

        // todosCount: state.todosCount,
      };
      console.log(completed);

    default:
      return state;
  }
};

function App() {
  const [{ todos, todosCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todosCount: 0,
  });
  const [text, setText] = useState("");

  const inputHandler = (e) => {
    const name = e.target.value;
    setText(name);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "add-todo", text });
    setText("");
  };

  // const onClickHandler = () => {
  //   dispatch({type: "toggle-todo", i})
  // }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={text} onChange={inputHandler} />
      </form>
      <p>you have {todosCount} todos</p>
      <div>
        {todos.map((t, i) => (
          <div
            key={t.id}
            onClick={() => dispatch({ type: "toggle-todo", i })}
            // style={{ textDecoration: t.completed ? "line-through" : "" }}
          >
            {t.text}
          </div>
        ))}
      </div>
      {/* <div>{JSON.stringify(todos)}</div> */}
    </>
  );
}

export default App;
