import React from 'react'

const Tab = ({ setFilter, filter, clearCompleted }) => {
  return (
    <div className='flex justify-between mb-4'>
      <div className='flex space-x-2'>
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 text-sm rounded ${
            filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-3 py-1 text-sm rounded ${
            filter === 'active' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1 text-sm rounded ${
            filter === 'completed' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
          }`}
        >
          Completed
        </button>
      </div>
      <button
        onClick={clearCompleted}
        className='px-3 py-1 text-sm text-red-500 hover:text-red-700'
      >
        Clear completed
      </button>
    </div>
  )
}

export default Tab
