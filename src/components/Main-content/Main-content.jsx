import StopWatch from "../../apps/stopwatch/stopwatch/Stopwatch"
import Timer from "../../apps/stopwatch/timer/Timer"
import TodoList from "../../apps/stopwatch/todo-list/Todolist"
function MainContent({app, className}) {
    return (<>
        <div className={className}>
            {app == "stop-watch" ? (<StopWatch></StopWatch>) : null}
            {app == "timer" ? (<Timer></Timer>) : null}
            {app == 'todo-list' ? (<TodoList></TodoList>) : null}
        </div>
    </>)
}

export default MainContent