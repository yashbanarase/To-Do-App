import styles from "./todoItem.module.css";

function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        name === todo.name ? { ...item, done: !todo.done } : todo
      )
    );
  }

  const completed = item.done ? styles.complete : "";

  return (
    <div>
      <div className={styles.item}>
        <div className={styles.itemName}>
          <span className={completed} onClick={() => handleClick(item.name)}>
            {item.name}
          </span>
          <span>
            <button
              onClick={() => handleDelete(item)}
              className={styles.deleteBtn}
            >
              X
            </button>
          </span>
        </div>

        <hr className={styles.line} />
      </div>
    </div>
  );
}
export default TodoItem;
