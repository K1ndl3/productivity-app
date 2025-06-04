import { useState } from 'react';


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([{ text: input, done: false }, ...tasks]);
      setInput('');
    }
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-card">
        <h2 className="title">📋 My Tasks</h2>
        <div className="input-area">
          <input
            type="text"
            value={input}
            placeholder="What's next?"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
          />
          <button onClick={addTask}>＋</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={`task ${task.done ? 'done' : ''}`}>
              <span onClick={() => toggleDone(index)}>{task.text}</span>
              <button className="remove" onClick={() => removeTask(index)}>✕</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
