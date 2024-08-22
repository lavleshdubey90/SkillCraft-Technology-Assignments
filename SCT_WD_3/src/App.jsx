import React from 'react';
import Board from './components/Board';

const App = () => {
  return (
    <div className='bg-zinc-900 h-screen w-full'>
      <div className='container mx-auto'>
        <Board />
      </div>
    </div>
  )
}

export default App;