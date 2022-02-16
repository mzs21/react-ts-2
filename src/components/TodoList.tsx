import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

let TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos
}: Props) => {
  return (
    <div>
      <Droppable droppableId="TodoList">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`${snapshot.isDraggingOver ? "dragactive" : ""}`}
          >
            <span>Active Tasks</span>
            {todos.map((singleTodo, index) => (
              <SingleTodo
                index={index}
                singleTodo={singleTodo}
                key={singleTodo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`${snapshot.isDraggingOver ? "dragactive" : ""}`}
          >
            <span>Completed Tasks</span>
            {completedTodos.map((singleTodo, index) => (
              <SingleTodo
                index={index}
                singleTodo={singleTodo}
                key={singleTodo.id}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
