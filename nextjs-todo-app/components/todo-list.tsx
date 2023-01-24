//  import styles from '../styles/todolist.module.css';
export default function TodoList({ todos, onDeleteTodo }) {
  return (
    <div>
      <ul role="list" className="group divide-y divide-slate-200">
      {todos.map((todo, index) => (
        <li key={index} className=" max-w-xs mx-auto rounded-lg p-6 m-1 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 flex py-4 first:pt-0 last:pb-0">
          <span className="p-6">{todo}</span>
          <div className=" p-3 overflow-hidden">
            <button className="rounded-md text-white w-md py-2 pl-9 pr-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-red-500 ..." onClick={() => onDeleteTodo(index)}>Delete</button>
          </div>
          
        </li>
      ))}
    </ul>
    </div>
    
  )
}