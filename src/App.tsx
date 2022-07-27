import TodoList from "./components/todo/TodoList";

function App() {
  return (
    <>
      <div
        className="cursor-pointer border-2 border-blue-600 bg-gray-200 p-4
      text-2xl hover:first-letter:font-bold hover:first-letter:text-blue-600"
      >
        React App
      </div>
      <TodoList />
    </>
  );
}

export default App;
