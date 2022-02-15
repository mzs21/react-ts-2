import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

let SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <div>
      <form action="">
        <div>{todo.todo}</div>
      </form>
    </div>
  );
};

export default SingleTodo;
