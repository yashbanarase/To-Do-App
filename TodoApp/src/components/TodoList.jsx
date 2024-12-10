import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedArray = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={styles.list}>
      {sortedArray.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
