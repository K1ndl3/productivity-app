import { useState } from "react";
import "./Todolist.css"

function TodoList() {

  const [taskArray, setTaskArray] = useState(["list1", "list2", "list3"]);
  const [taskInput, setTaskInput] = useState('');

  const moveTaskUp = (index) => {

    if (index > 0) {
    const newArr = [...taskArray];
    [newArr[index], newArr[index - 1]] = [newArr[index - 1], newArr[index]];
    setTaskArray(newArr);
    }
  }

  const moveTaskDown = (index) => {
    if (index < taskArray.length - 1) {
      const newArr =[...taskArray];
      [newArr[index +  1], newArr[index]] = [newArr[index], newArr[index + 1]];
      return (setTaskArray(newArr));
    }
  }

  const enterTask = () => {
    if (taskInput.trim() !== '') {
      setTaskArray([taskInput.trim(),...taskArray]);
      setTaskInput("");
    }
  }

  const removeTask = (targetIndex) => {
    const newArr = taskArray.filter((val, index) => index !== targetIndex);
    setTaskArray([...newArr]);

  }

  return ( <>
      <div className="todolist">
          <h1 className="title">My To-Do List</h1>
          <div className="input-field">
            <input type="text" className="input-text" placeholder="What's next?" value={taskInput} onChange={(e) =>  setTaskInput(e.target.value)}/>
            <button className="input-button" onClick={() => enterTask()}>Enter</button>
          </div>
          <ul className="list" style={{listStyleType: 'number'}}>
            {taskArray.map((value, index) => {
              return (
                      <span className="element-display-container">
                        <div className="element-button">
                          <button className="up-button" onClick={() => moveTaskUp(index)}>up</button>
                          <button className="down-button" onClick={() => moveTaskDown(index)}>down</button>
                        </div>
                        <li className="items" key={index}>{value}</li>
                        <button className="finish-button" onClick={() => removeTask(index)}>done</button>  
                      </span>
              )
            })}
          </ul>
      </div>
  </>)
}

export default TodoList;
