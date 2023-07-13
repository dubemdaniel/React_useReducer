import React from "react";

const AddedList = (props) => {
  return (
    <>
      {props.todosList.map((todo) => (
        <div
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "" }}
        >
          {todo.title}
        </div>
      ))}
    </>
  );
};

export default AddedList;
