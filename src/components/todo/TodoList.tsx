import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const fetchTodoItems = async () => {
  const response = await axios.get("http://localhost:4000/todos");
  return response.data as Todo[];
};

const TodoList = () => {
  const { data } = useQuery(["todos"], fetchTodoItems, { initialData: [] });

  return (
    <div>
      {data.map((e) => (
        <TodoItem key={e.id} {...e} />
      ))}
    </div>
  );
};

export default TodoList;
