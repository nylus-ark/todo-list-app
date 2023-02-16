export default function TodoItem({ todo, index }) {
  return (
    <li>
      <span>
        <input type="checkbox" />
        <strong>
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
