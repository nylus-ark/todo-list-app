import React, { useState } from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';

function App() {
  const [todoData, setTodoData] = useState([
    {id: 1, complited: false, title: 'Купить хлеб'},
    {id: 2, complited: false, title: 'Купить картофель'},
    {id: 3, complited: false, title: 'Купить молоко'},
  ]);

  function toggleTodo(id) {
    setTodoData(
      todoData.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }

        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodoData(todoData.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <div className="container">
          <h1 className="title-h1">To-Do List</h1>

          <TodoList todos={todoData} onToggle={toggleTodo} />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
