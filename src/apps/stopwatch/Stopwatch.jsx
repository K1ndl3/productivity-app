import { useEffect, useRef, useState } from 'react';
import './Stopwatch.css'

function StopWatch() {

    const [elapsedTime, setElapsedTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalIDRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            intervalIDRef.current = setInterval(() => {
                setElapsedTime(prev => prev + 1);
            }, 10);
        } else {
            clearInterval(intervalIDRef.current);
        }

        return () => clearInterval(intervalIDRef.current);
    },[isActive]);

    const startTime = () => {
        setIsActive(true);
    }

    const stopTime = () => {
        setIsActive(false);
    }

    const resetTime = () => {
        setIsActive(false);
        setElapsedTime(0);
    }

    const displayTime = () => {
        const totalMs = elapsedTime * 10;
        const minutes = String(Math.floor(totalMs / 60000)).padStart(2, '0');
        const seconds = String(Math.floor((totalMs / 1000) % 60)).padStart(2, '0');
        const milliseconds = String(totalMs % 1000).padStart(3, '0');
        return `${minutes}:${seconds}:${milliseconds}`;
    };

    return (<>
        <div className="stop-watch-component">
            <div className="display">
                {displayTime()}
            </div>
            <div className="stop-watch-button">
                <button className="start-button" onClick={() => startTime()}>start</button>
                <button className="stop-button" onClick={() => stopTime()}>stop</button>
                <button className="reset-button" onClick={() => resetTime()}>reset</button>
            </div>
        </div>
    </>);
}

export default StopWatch