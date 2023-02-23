export default function TodoItem({ todo, index }) {
  const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '3px solid transparent',
      borderRadius: '8px',
      marginBottom: '5px',
      padding: '10px',
      transition: 'background-color .2s cubic-bezier(.32,.08,.24,1)',
    },
    input: {
      marginRight: '10px',
    },
    strong: {
      marginRight: '5px',
    },
  };

  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox" style={styles.input} />
        <strong style={styles.strong}>
          {index + 1}
        </strong>
        {todo.title}
      </span>

      <button type="button">
        &times;
      </button>
    </li>
  );
}
