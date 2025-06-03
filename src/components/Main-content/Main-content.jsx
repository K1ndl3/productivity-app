import StopWatch from "../../apps/stopwatch/Stopwatch"
import Timer from "../../apps/stopwatch/timer/Timer"
function MainContent({app, className}) {
    return (<>
        <div className={className}>
            {app == "stop-watch" ? (<StopWatch></StopWatch>) : null}
            {app == "timer" ? (<Timer></Timer>) : null}
        </div>
    </>)
}

export default MainContent