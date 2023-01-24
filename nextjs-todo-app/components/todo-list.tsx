//  import styles from '../styles/todolist.module.css';
export default function TodoList({ todos, onDeleteTodo }) {
  return (
    <div>
      <ul role="list" className="fixed top-[37%] left-[46%] right-[40%] grid place-content-center pla group divide-y divide-slate-200">
      {todos.map((todo, index) => (
        <li key={index} className="grid-cols-2 gap-4 items-stretch  max-w-full mx-auto rounded-lg p-6 m-1 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 flex py-1 first:pt-0 last:pb-0">
          <span className="p-5  ">{todo}</span>
          {/* <div className=" p-3 overflow-hidden"> pl-3 pb-3 pr-3 */}
            <button className="inline-flex rounded-md text-white h-10  mb-2 py-2 px-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-red-500 ..." onClick={() => onDeleteTodo(index)}>Delete</button>
          {/* </div> */}
        </li>
      ))}
    </ul>
    </div>
    
  )
}