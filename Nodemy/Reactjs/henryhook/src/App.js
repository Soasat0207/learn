import React  from 'react';
import Navbar from './components/Navbar'
import Todos from './components/Todos'
import ThemContextProvider from './contexts/ThemContext'
import ThemeToggle from './components/ThemeToggle'
import TodoProvider from './contexts/TodoContext'
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoProvider>
            <Todos />
          </TodoProvider>
        </AuthContextProvider>
        <ThemeToggle/>
      </ThemContextProvider>
    </div>
  );
}

export default App;
