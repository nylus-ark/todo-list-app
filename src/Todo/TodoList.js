import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const styles = {
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
  };

  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem 
            todo={todo} 
            key={todo.id} 
            index={index} 
            onChange={props.onToggle} 
          />
        )
      })}
    </ul>
  );
}
