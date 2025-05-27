import React from 'react'
import { Plus } from 'lucide-react'

const AddTodo = ({ inputValue, addTodo, setInputValue, handleKeyDown }) => {
  return (
    <>
      <h1 className='text-2xl font-bold text-center mb-6 text-indigo-600'>
        Todo App
      </h1>

      <div className='flex mb-4'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, addTodo)}
          placeholder='Add a new task...'
          className='flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
        <button
          onClick={addTodo}
          className='px-4 py-2  mx-4 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 flex items-center justify-center'
        >
          <Plus size={24} />
        </button>
      </div>
    </>
  )
}

export default AddTodo
