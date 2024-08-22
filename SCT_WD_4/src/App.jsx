import React from 'react';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className='bg-zinc-900 text-white px-3 py-5 md:p-5 h-screen w-full font-[poppins] overflow-scroll'>
      <TodoList />
    </div>
  )
}

export default App;