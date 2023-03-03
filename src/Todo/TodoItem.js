import React, { useContext } from 'react';
import Context from '../context';

export default function TodoItem({ todo, index, onChange }) {
  const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid #e8e8ed',
      marginBottom: '5px',
      padding: '10px',
      transition: 'background-color .2s cubic-bezier(.32,.08,.24,1)',
    },
    input: {
      marginRight: '10px',
    },
  };

  const { removeTodo } = useContext(Context);

  const classes = [];

  if (todo.complited) {
    classes.push('done');
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input 
          type="checkbox" 
          checked={todo.complited}
          style={styles.input} 
          onChange={() => onChange(todo.id)}
        />
        <strong style={styles.strong}>
          {index + 1}
        </strong>
        &nbsp;
        {todo.title}
      </span>

      <button 
        type="button" 
        className="btn-close" 
        onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}
