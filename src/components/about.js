import React from 'react';
import './about.css'
export default function About() {
  return (
    <div className='maindiv'>
      <div >
        <h2>Task List component</h2>
        <ul className='components'>
          <li>This component displays the tasks with task name description and its status of completion.</li>
          <li>It allows users to mark tasks as completed by clicking on the checkbox.</li>
          <li>It also includes a button to delete the tasks.</li>
          <li>It provides a visual indication of completed tasks through strike-off.</li>
        </ul>
      </div>
      <div>
        <h2>Add Task component</h2>
        <ul className='components'>
          <li>It includes a form to add new tasks.</li>
          <li>The fields in the form include Task name, Task description, Priority level.</li>
          <li>It includes validation that ensures task name and description are required.</li>
        </ul>
      </div>
      <div>
        <h2>Edit Task component</h2>
        <ul className='components'>
          <li>It includes a form to edit existing tasks.</li>
          <li>The fields in the form include Task name, Task description, Priority level.</li>
          <li>It includes validation that ensures task name and description are required.</li>
        </ul>
      </div>
    </div>
  );
}
