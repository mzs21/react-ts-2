import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<String>>;
}

let InputField = ({ todo, setTodo }: Props) => {
  return (
    <form action="">
      <input
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default InputField;
