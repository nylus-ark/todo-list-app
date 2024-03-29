import React, { useEffect, useState } from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import Loader from './Loader';

const AddTodo = React.lazy(() => import('./Todo/AddTodo'));

function App() {
  const [todoData, setTodoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todoData) => {
        setTimeout(() => {
          setTodoData(todoData);
          setLoading(false);
        }, 2000);
      })
  }, []);

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

  function addTodo(title) {
    setTodoData(
      todoData.concat([
        {
          title,
          id: Date.now(),
          complited: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <div className="container">
          <div className="container__header">
            <h1 className="title-h1">To-Do List</h1>
          </div>
          
          <div className="container__content">
            <AddTodo onCreate={addTodo} />

            {loading && <Loader />}

            {todoData.length ? (
              <TodoList todos={todoData} onToggle={toggleTodo}/>
            ) : loading ? null : (
              <p className="text">You have no todos...</p>
            )}
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
