import { FC } from "react";
import { Todo } from "./TodoList";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteTodo = async (id: number) =>
  await axios.delete(`http://localhost:4000/todos/${id}`);

const toggleTodo = async (id: number, done: boolean) =>
  await axios.put(`http://localhost:4000/todos/${id}`, { done });

const TodoItem: FC<Todo> = (props) => {
  const { done, id, text } = props;
  const client = useQueryClient();

  const { mutate: mutateDelete } = useMutation(() => deleteTodo(id), {
    onSuccess: () => client.invalidateQueries(["todos"]),
  });
  const { mutate: mutateToggle } = useMutation(() => toggleTodo(id, !done), {
    onSuccess: () => client.invalidateQueries(["todos"]),
  });

  const handleDelete = () => {
    mutateDelete();
  };
  const handleToggle = () => {
    mutateToggle();
  };

  return (
    <div className="m-2 flex items-center justify-between rounded-md border-2 border-gray-200 p-4 shadow-md">
      <div className="flex gap-4">
        <input type="checkbox" checked={done} onChange={handleToggle} />
        <span>{text}</span>
      </div>
      <button
        className="rounded-md border-2 border-red-600 bg-red-600 px-4 py-1 text-white
        active:bg-transparent active:text-red-600"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
