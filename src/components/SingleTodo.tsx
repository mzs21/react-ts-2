import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
interface Props {
  index: number;
  singleTodo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

let SingleTodo = ({ singleTodo, todos, setTodos, index }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(singleTodo.todo);

  let handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  let handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  let handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );

    setEdit(false);
  };

  let completedTask = singleTodo.isDone ? (
    <s>{singleTodo.todo}</s>
  ) : (
    <span>{singleTodo.todo}</span>
  );

  let inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={singleTodo.id.toString()} index={index}>
      {(provided) => (
        <div>
          <form
            action=""
            onSubmit={(e) => handleEdit(e, singleTodo.id)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {edit ? (
              <input
                ref={inputRef}
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              />
            ) : (
              completedTask
            )}

            <div>
              <span>
                <AiFillEdit
                  onClick={() => {
                    if (!edit && !singleTodo.isDone) {
                      setEdit(!edit);
                    }
                  }}
                />
              </span>
              <span>
                <AiFillDelete
                  onClick={() => {
                    handleDelete(singleTodo.id);
                  }}
                />
              </span>
              <span>
                <MdDone
                  onClick={() => {
                    handleDone(singleTodo.id);
                  }}
                />
              </span>
            </div>
          </form>
        </div>
      )}
    </Draggable>
  );
};

export default SingleTodo;
