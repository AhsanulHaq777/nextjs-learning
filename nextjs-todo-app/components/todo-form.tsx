

export default function TodoForm({ onAddTodo }) {
    const handleSubmit = (e) => {
      e.preventDefault()
      onAddTodo(e.target.elements.todo.value)
      e.target.elements.todo.value = ''
    }
  
    return (
      <form onSubmit={handleSubmit} style={{ textAlign:"center"}}>
        <input type="text" name="todo" placeholder="Enter Todo Task"/>
        <button type="submit">Add Todo</button>
      </form>
    )
  }