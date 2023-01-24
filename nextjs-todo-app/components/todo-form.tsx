

export default function TodoForm({ onAddTodo }) {
    const handleSubmit = (e) => {
      e.preventDefault()
      onAddTodo(e.target.elements.todo.value)
      e.target.elements.todo.value = ''
    }
  
    return (
      <form onSubmit={handleSubmit} style={{ textAlign:"center"}}>
        <input type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Add any task..." required name="todo"/>
        <button type="submit" className="rounded-md text-white w-full h-10 mt-3 mb-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">Add Todo</button>
      </form>
    )
  }