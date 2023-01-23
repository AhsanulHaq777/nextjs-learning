'use client'
import { useState } from 'react'
import TodoForm from 'components/todo-form'
import TodoList from 'components/todo-list'

const initialTodos: string[] = []

function Page() {
  const [todos, setTodos] = useState(initialTodos)

  function handleAddTodo(todoText:string) {
    setTodos([...todos, todoText])
  }

  function handleDeleteTodo(index:number) {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div>
      <TodoForm onAddTodo ={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  )
}

export default Page