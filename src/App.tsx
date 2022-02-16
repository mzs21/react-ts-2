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
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  // console.log(todo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add,
      active = todos,
      complete = completedTodos;

    if (source.droppableId === "TodoList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodoList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className="heading">Taskify</div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
