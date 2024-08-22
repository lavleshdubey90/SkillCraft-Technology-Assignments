import React, { useState } from 'react';
import Row from './Row';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const getCurrentDateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes;
    const date = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    return `${formattedHours}:${formattedMinutes} ${ampm} / ${date}`;
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleCreateTask = () => {
    if (newTask.trim()) {
      const dateTime = getCurrentDateTime();
      setTasks([...tasks, { task: newTask, dateTime }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index, newTaskValue) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, task: newTaskValue } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='max-w-screen-lg mx-auto text-center md:p-5'>
      <h1 className='text-5xl text-teal-500 font-medium'>Todo App</h1>

      <div className='mt-20 flex items-center gap-4 justify-center flex-wrap'>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          className='max-w-screen-sm h-14 px-4 outline-none bg-zinc-800 rounded-md'
          placeholder='Enter new task'
        />
        <button
          onClick={handleCreateTask}
          className='px-5 h-14 hover:bg-teal-600 rounded-md bg-teal-500 font-medium'
        >
          Create Task
        </button>
      </div>

      <div className='mt-10 p-3 md:p-5 bg-zinc-800 space-y-3 md:space-y-5 rounded-md'>
        {tasks.length === 0 ? (
          <p className='text-gray-400'>No tasks available</p>
        ) : (
          tasks.map((item, index) => (
            <Row
              key={index}
              task={item.task}
              dateTime={item.dateTime}
              onDelete={() => handleDeleteTask(index)}
              onEdit={(newTaskValue) => handleEditTask(index, newTaskValue)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
