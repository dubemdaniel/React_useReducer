import { useState, useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [
          ...state.todos,
          {
            title: action.value,
            completed: false,
            id: Date.now().toString(36),
          },
        ],
        todosCount: state.todosCount + 1,
      };

    case "toggle-todo":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, completed: true };
          }

          return todo;
        }),

        todosCount: state.todosCount,
      };

    default:
      return state;
  }
};

function App() {
  const [{ todos, todosCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todosCount: 0,
  });
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    const name = e.target.value;
    setInputValue(name);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "add-todo", value: inputValue });
    setInputValue("");
  };

  // const onClickHandler = () => {
  //   dispatch({type: "toggle-todo", i})
  // }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={inputValue} onChange={inputHandler} />
      </form>
      <p>you have {todosCount} todos</p>
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            onClick={() => dispatch({ type: "toggle-todo", id: todo.id })}
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
          >
            {todo.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
