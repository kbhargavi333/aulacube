import React, { useState } from 'react';
import './addTask.css'
import { Link } from 'react-router-dom';

const AddTask = () => {
  const getLocalItems = () => {
    let list = localStorage.getItem('tasks');
    return list ? JSON.parse(list) : [];
  };

  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');
  const [param3, setParam3] = useState('Low');

  const addItem = () => {
    if (!param1 || !param2) {
      alert('Task Name and Task Description are required your data will not be added!');
      return;
    }

    const newTaskList = [...getLocalItems(), { param1, param2, param3 }];
    localStorage.setItem('tasks', JSON.stringify(newTaskList));

    setParam1('');
    setParam2('');
    setParam3('Low');
  };

  return (
    <div className='addtask'>
      <h1 className='addtaskheading'>Add a Task 📝</h1>
      <label>
        <h3>Task Name 👨🏻‍💻</h3>
        <p>
          <textarea className='inputtext'
            value={param1}
            onChange={(e) => setParam1(e.target.value)}
            placeholder='Task Name'
            required
          />
        </p>
      </label>
      <label>
        <h3>Task Description 👨🏻‍💻</h3>
        <p>
          <textarea className='inputtextarea'
            value={param2}
            onChange={(e) => setParam2(e.target.value)}
            placeholder='Task Description' required
          />
        </p>
      </label>
      <label>
        <h3>Level 🤯</h3>
        <select  className="addtaskselect" value={param3} onChange={(e) => setParam3(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <p></p>
      </label><br/>
      <button className="addtasksubmit" onClick={addItem}>
        <Link className="addtasklink" to="/displayTask">Submit</Link>
      </button>
    </div>
  );
};

export default AddTask;
