import "./styles.css";

// let name: string;
// let age: number | string; // union
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];

// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: "Snigdho"
// };

// let lotsOfPeople: Person[];

// let myAge = "22";

// function printName(name: string) {
//   console.log(name);
// }

// printName("Snigdho");

// let printName: (name: string) => never;

// type X = {
//   a: string;
//   b: string;
// };

// type Y = X & {
//   c: string;
//   d: string;
// };

// interface Person {
//   name: string;
//   age?: number;
// }

// interface Guy extends Person {
//   profession: string;
// }

// interface Person {
//   name: string;
//   age?: number;
// }

// type X = Person & {
//   a: string;
//   b: string;
// };

// type X = {
//   a: string;
//   b: string;
// };

// interface Person extends X {
//   name: string;
//   age?: number;
// }

import InputField from "./components/InputField";
import React, { useState } from "react";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // console.log(todo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <div className="heading">Taskify</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
