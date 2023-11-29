import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './editTask.css'
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";


const EditTask = () => {
  const [taskList, setTaskList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [updatedParam1, setUpdatedParam1] = useState('');
  const [updatedParam2, setUpdatedParam2] = useState('');
  const [updatedParam3, setUpdatedParam3] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('tasks');
    if (data) {
      setTaskList(JSON.parse(data));
    }
  }, []);

  const handleEdit = (index) => {
    setSelectedTask({ ...taskList[index], index });

    setUpdatedParam1(taskList[index].param1);
    setUpdatedParam2(taskList[index].param2);
    setUpdatedParam3(taskList[index].param3);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");

    if (confirmDelete) {
      const updatedTaskList = taskList.filter((task, i) => i !== index);

      localStorage.setItem('tasks', JSON.stringify(updatedTaskList));

      setTaskList(updatedTaskList);

      console.log(`Delete task at index ${index}`);
    }
  };

  const handleCancelEdit = () => {
    setSelectedTask(null);
  };

  const handleUpdateTask = () => {
    const updatedTaskList = [...taskList];
    updatedTaskList[selectedTask.index] = {
      param1: updatedParam1,
      param2: updatedParam2,
      param3: updatedParam3,
    };

    localStorage.setItem('tasks', JSON.stringify(updatedTaskList));

    setTaskList(updatedTaskList);

    setSelectedTask(null);
  };

  return (
    <div className='mainedittask'>
      <h2 className='edittask'>You can edit your task here ✍</h2>
      {taskList.length > 0 ? (
        <div>          
          {taskList.map((task, index) => (
            <div key={index} className='editcard'>
              <h3 className='taskheading'>Task {index + 1}:</h3>
              <p className='edittext'>Task Name : {task.param1}</p>
              <p className='edittext'>Task Description : {task.param2}</p>
              <p className='edittext'>Level : {task.param3}</p>
              <div className='updateedit'>
                {selectedTask && selectedTask.index === index ? (
                  <>
                    <label>
                      Name:
                      <input
                        type="text"
                        value={updatedParam1}
                        onChange={(e) => setUpdatedParam1(e.target.value)}
                      />
                    </label>
                    <label>
                      Description:
                      <input
                        type="text"
                        value={updatedParam2}
                        onChange={(e) => setUpdatedParam2(e.target.value)}
                      />
                    </label>
                    <label>
                      Level:
                      <input
                        type="text"
                        value={updatedParam3}
                        onChange={(e) => setUpdatedParam3(e.target.value)}
                      />
                    </label>
                    <button className="updatetask" onClick={handleUpdateTask}>Update Task</button>
                    <button className='updatecancel' onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="editbutton" onClick={() => handleEdit(index)}><GrEdit /></button>
                    <button className="deletebutton" onClick={() => handleDelete(index)}><MdDelete /></button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : ( 
        <p className='notasksavailableedit'>No tasks available</p>
      )}
    </div>
  );
};

export default EditTask;
