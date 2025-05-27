import React from 'react'
import {  Check, X,  } from 'lucide-react'

const EditTodo = ({
  cancelEdit,
  editValue,
  setEditValue,
  handleKeyDown,
  saveEdit,
  todoId,
}) => {
  return (
    <div className='flex'>
      <input
        type='text'
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, () => saveEdit(todoId))}
        className='flex-1 px-3 py-1 border rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-500'
        autoFocus
      />
      <button
        onClick={() => saveEdit(todoId)}
        className='px-2  mx-4 bg-green-500 text-white hover:bg-green-600'
      >
        <Check size={20} />
      </button>
      <button
        onClick={cancelEdit}
        className='px-2 bg-red-500 text-white hover:bg-red-600 rounded-r'
      >
        <X size={20} />
      </button>
    </div>
  )
}

export default EditTodo
