 import styles from '../styles/todolist.module.css';
export default function TodoList({ todos, onDeleteTodo }) {
  return (
    <div className={styles.list_container}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
      {todos.map((todo, index) => (
        <li key={index} style={{ padding: "5px 0"}}>
          <span>{todo}</span>
          <button onClick={() => onDeleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
    
  )
}