import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const Row = ({ task, dateTime, onDelete, onEdit }) => {
  const [check, setCheck] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task);

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleSaveEdit = () => {
    if (editValue.trim()) {
      onEdit(editValue);
      setIsEditing(false);
    }
  };

  return (
    <div className="row w-full flex items-center justify-between p-3 md:p-5 rounded-md bg-zinc-900">
      <div className='flex flex-1 items-center gap-x-3 md:gap-x-5'>
        <div 
          onClick={() => setCheck(prev => !prev)} 
          className='w-9 h-9 scale-75 md:scale-100 rounded-full relative bg-zinc-600 grid place-content-center cursor-pointer'
        >
          <FaCheck className={`${check ? "block" : "hidden"} bg-teal-500 rounded-full h-full w-full p-2 absolute`} />
        </div>
        <div className='text-left flex-1 overflow-x-hidden'>
          {isEditing ? (
            <div className='flex'>
              <input
                type="text"
                value={editValue}
                onChange={handleEditChange}
                className='md:text-lg w-full bg-zinc-800 h-14 px-2 md:px-5 overflow-x-hidden'
              />
              <button 
                onClick={handleSaveEdit} 
                className='ml-2 px-5 py-1 bg-teal-500 text-white rounded'
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <h4 className={`${check ? "text-zinc-600 line-through" : ""} md:text-lg w-full overflow-x-hidden`}>
                {task}
              </h4>
              <span className='text-xs text-zinc-600'>{dateTime}</span>
            </>
          )}
        </div>
      </div>

      <div className='text-xl md:text-3xl flex gap-x-3 items-center md:gap-x-6'>
        <MdDeleteForever 
          onClick={onDelete} 
          className='cursor-pointer hover:text-red-600'
        />
        <FaEdit 
          onClick={() => setIsEditing(prev => !prev)} 
          className='cursor-pointer hover:text-amber-500'
        />
      </div>
    </div>
  );
};

export default Row;
