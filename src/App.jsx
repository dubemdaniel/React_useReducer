import { useState, useReducer } from "react";
import AddList from "./components/AddList";
import AddedList from "./components/AddedList";
import "./App.css";

// const onClick = (callback) => {
//   const event = { target: "auiytui" };
//   if (typeof callback === "function") {
//     callback(event);
//   }
// };

// onClick(() => a);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [
          ...state.todos,
          {
            title: action.value,
            normal: console.log("todo worked"),
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
            return {
              ...todo,
              completed: !todo.completed,
              console: console.log("target was met"),
            };
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

  const onClickHandler = (todo) => {
    dispatch({ type: "toggle-todo", id: todo.id });
  };

  const emptyInput = () => {
    if (inputValue === "") {
      return todosCount - 2;
    }
  };

  return (
    <>
      <AddList
        value={inputValue}
        onChange={inputHandler}
        onSubmit={submitHandler}
        count={todosCount}
      ></AddList>
      <>
        {/* {todos.map((todo) => (
          <div
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
            onClick={() => onClickHandler(todo)}
          >
            {todo.title}
          </div>
        ))} */}
      </>
      {emptyInput && (
        <AddedList
          todosList={todos}
          onClick={(todo) => onClickHandler(todo)}
        ></AddedList>
      )}
    </>
  );
}

export default App;
