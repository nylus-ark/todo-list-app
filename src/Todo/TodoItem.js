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

  const classes = ['todo-title'];

  if (todo.complited) {
    classes.push('done');
  }

  return (
    <li className="input">
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
        className="btn btn-close" 
        onClick={removeTodo.bind(null, todo.id)}>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 4.00138H14V2.33138C13.9765 1.6912 13.7002 1.08644 13.2316 0.649671C12.7629 0.212905 12.1402 -0.0202285 11.5 0.00137844H8.5C7.85975 -0.0202285 7.23706 0.212905 6.76843 0.649671C6.2998 1.08644 6.02346 1.6912 6 2.33138V4.00138H1C0.734784 4.00138 0.48043 4.10674 0.292893 4.29427C0.105357 4.48181 0 4.73616 0 5.00138C0 5.2666 0.105357 5.52095 0.292893 5.70849C0.48043 5.89602 0.734784 6.00138 1 6.00138H2V17.0014C2 17.797 2.31607 18.5601 2.87868 19.1227C3.44129 19.6853 4.20435 20.0014 5 20.0014H15C15.7956 20.0014 16.5587 19.6853 17.1213 19.1227C17.6839 18.5601 18 17.797 18 17.0014V6.00138H19C19.2652 6.00138 19.5196 5.89602 19.7071 5.70849C19.8946 5.52095 20 5.2666 20 5.00138C20 4.73616 19.8946 4.48181 19.7071 4.29427C19.5196 4.10674 19.2652 4.00138 19 4.00138ZM8 2.33138C8 2.17138 8.21 2.00138 8.5 2.00138H11.5C11.79 2.00138 12 2.17138 12 2.33138V4.00138H8V2.33138ZM16 17.0014C16 17.2666 15.8946 17.521 15.7071 17.7085C15.5196 17.896 15.2652 18.0014 15 18.0014H5C4.73478 18.0014 4.48043 17.896 4.29289 17.7085C4.10536 17.521 4 17.2666 4 17.0014V6.00138H16V17.0014Z"
            fill="#c7c7c7"
          />
        </svg>
      </button>
    </li>
  );
}
