import React from "react";

const AddList = (props) => {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <input type="text" value={props.value} onChange={props.onChange} />
      </form>
      <p>you have {props.count} todos</p>
    </>
  );
};

export default AddList;
