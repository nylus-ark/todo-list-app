import TodoList from "./Todo/TodoList";

function App() {
  const todoData = [
    {id: 1, complited: false, title: 'Купить хлеб'},
    {id: 2, complited: false, title: 'Купить картофель'},
    {id: 3, complited: false, title: 'Купить молоко'},
  ];

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title-h1">To-Do List</h1>
        <TodoList todos={todoData} />
      </div>
    </div>
  );
}

export default App;
