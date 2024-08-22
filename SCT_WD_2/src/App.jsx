import React from 'react';
import Stopwatch from './components/Stopwatch';

const App = () => {
  return (
    <div className='h-screen w-full bg-neutral-900 text-zinc-400 font-[outfit]'>
      <h1 className='text-4xl md:text-6xl text-center text-violet-500 pt-10'>Stopwatch</h1>
      <Stopwatch />
    </div>
  )
}

export default App;