import { useState, useEffect } from 'react'
import { Trash2, Edit, Check, X, Plus } from 'lucide-react'
import EditTodo from './EditTodo'
import TodoItem from './TofoItem'
import Tab from './Tab'
import AddTodo from './AddTodo'

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  const [inputValue, setInputValue] = useState('')
  const [editId, setEditId] = useState(null)
  const [editValue, setEditValue] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        createdAt: new Date().toISOString(),
      }
      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    if (editId === id) setEditId(null)
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const startEdit = (id, text) => {
    setEditId(id)
    setEditValue(text)
  }

  const saveEdit = (id) => {
    if (editValue.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: editValue } : todo
        )
      )
      setEditId(null)
      setEditValue('')
    }
  }

  const cancelEdit = () => {
    setEditId(null)
    setEditValue('')
  }

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter') {
      action()
    }
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const activeTodoList = todos.filter((t) => !t.completed).length

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <AddTodo
        inputValue={inputValue}
        addTodo={addTodo}
        setInputValue={setInputValue}
        handleKeyDown={handleKeyDown}
      />

      <Tab
        setFilter={setFilter}
        filter={filter}
        clearCompleted={clearCompleted}
      />

      {filteredTodos.length === 0 ? (
        <p className='text-center text-gray-500 my-6'>No tasks found</p>
      ) : (
        <ul className='divide-y divide-gray-200'>
          {filteredTodos.map((todo) => (
            <li key={todo.id} className='py-3'>
              {editId === todo.id ? (
                <EditTodo
                  setEditValue={setEditValue}
                  handleKeyDown={handleKeyDown}
                  saveEdit={saveEdit}
                  cancelEdit={cancelEdit}
                  todoId={todo.id}
                  editValue={editValue}
                />
              ) : (
                <TodoItem
                  todo={todo}
                  toggleComplete={toggleComplete}
                  startEdit={startEdit}
                  deleteTodo={deleteTodo}
                />
              )}
            </li>
          ))}
        </ul>
      )}

      <div className='mt-6 text-sm text-gray-500 text-center'>
        {todos.length > 0 && (
          <p>{`${activeTodoList} item${
            activeTodoList !== 1 ? 's' : ''
          } left`}</p>
        )}
      </div>
    </div>
  )
}
