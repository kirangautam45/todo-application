import React from 'react'
import TodoApp from './component/ToDoApp'

const App = () => {
  return (
    <>
      <TodoApp />
    </>
  )
}

export default App

// my-app/
// ├── public/
// │   └── index.html
// ├── src/
// │   ├── assets/          # Static files (images, fonts, etc.)
// │   ├── components/      # Reusable UI components (Button.js, Modal.js, etc.)
// │   ├── features/        # Feature-specific modules (auth, posts, chat, etc.)
// │   ├── hooks/           # Custom hooks (useToggle.js, useFetch.js, etc.)
// │   ├── layouts/         # Shared layout components (MainLayout.js, AuthLayout.js)
// │   ├── pages/           # Route-level views (Home.js, About.js, etc.)
// │   ├── services/        # API and external services (api.js, authService.js)
// │   ├── store/           # Global state management (Redux, Zustand, etc.)
// │   ├── utils/           # Helpers (formatDate.js, debounce.js, etc.)
// │   ├── App.js           # App entry
// │   └── index.js         # Main render point
// ├── .env
// ├── package.json
// ├── .gitignore
// └── README.md
