import { useState } from "react"
import './Sidebar.css'
function Sidebar({setApp}) {
    const [extend, setExtend] = useState(false);
    return (<>
        <div className={`sidebar ${(extend ? ' extend' : '')}`}>
            <button 
            className="extend-button"
            onClick={() => setExtend(!extend)}
            >☰</button>
            {extend ? (<div className="selected-app">
                <button className="stop-watch" onClick={() => setApp("stop-watch")}>Stop-Watch</button>
                <button className="timer" onClick={() => setApp("timer")}>Timer</button>
                <button className="todo-list" onClick={() => setApp("todo-list")}>Todo-List</button>
            </div>) : null}
        </div>
    </>)
}

export default Sidebar