import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();

    setTodos([...todos, todo]);

    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          placeholder="Enter Todo Item....."
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
        />
        <button className={styles.modernButton} type="sybmit">
          Add
        </button>
      </div>
    </form>
  );
}
