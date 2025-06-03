import StopWatch from "../../apps/stopwatch/Stopwatch"

function MainContent({app, className}) {
    return (<>
        <div className={className}>
            {app == "stop-watch" ? (<StopWatch></StopWatch>) : null}
        </div>
    </>)
}

export default MainContent