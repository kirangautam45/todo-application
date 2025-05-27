import { Edit, Trash2 } from 'lucide-react'

function TodoItem({ todo, toggleComplete, startEdit, deleteTodo }) {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center space-x-3'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className='w-4 h-4 text-indigo-600 focus:ring-indigo-500 rounded'
        />
        <span
          className={`flex-1 ${
            todo.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className='flex space-x-2'>
        <button
          onClick={() => startEdit(todo.id, todo.text)}
          className='text-gray-600 hover:text-indigo-600'
          disabled={todo.completed}
        >
          <Edit size={20} className={todo.completed ? 'opacity-30' : ''} />
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className='text-gray-600 hover:text-red-600'
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
