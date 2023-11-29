import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import './displayTask.css';

const DisplayTask = () => {
  const getLocalItems = () => {
    let list = localStorage.getItem('tasks');
    return list ? JSON.parse(list) : [];
  };

  const [taskList, setTaskList] = useState(getLocalItems);

  useEffect(() => {
    setTaskList(getLocalItems);
  }, []);

  const handleToggleComplete = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index] = {
      ...updatedTaskList[index],
      completed: !updatedTaskList[index].completed,
    };

    localStorage.setItem('tasks', JSON.stringify(updatedTaskList));

    setTaskList(updatedTaskList);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");

    if (confirmDelete) {
      const updatedTaskList = [...taskList];
      updatedTaskList.splice(index, 1);

      localStorage.setItem('tasks', JSON.stringify(updatedTaskList));

      setTaskList(updatedTaskList);
    }
  };

  return (
    <div className='maindisplaytask'>
      <h1 className='displaytask'>Do it, don't delay it! 👨‍💻</h1>
      {taskList.length > 0 ? (
        <div>
          {taskList.map((task, index) => (
            <div key={index} className={task.completed ? 'displaycard completed' : 'displaycard'}>
              <label for="check">
                <input
                  className='checkbox'
                  type="checkbox"
                  checked={task.completed || false}
                  onChange={() => handleToggleComplete(index)}
                />
              </label>
              <i className='tasknumber'> Task {index + 1}:</i>
              <button className="displaydelete" onClick={() => handleDelete(index)}><MdDelete /></button>
              <p className='displaytext'>Task Name: {task.param1}</p>
              <p className='displaytext'>Task Description: {task.param2}</p>
              <p className='displaytext'>Level: {task.param3}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className='notasksavailable'>No tasks available</p>
      )}
      <button className='editdisplay'><Link to="/editTask" className='edittasklink'>Edit Task</Link></button>
      <button className='adddisplay'><Link to="/" className='addtasklink'>Add Task</Link></button>
    </div>
  );
};

export default DisplayTask;
