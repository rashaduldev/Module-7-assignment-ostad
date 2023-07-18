import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={task} onChange={handleInputChange} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
