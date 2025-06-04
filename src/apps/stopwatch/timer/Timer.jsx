import { useEffect, useRef, useState } from 'react'
import './Timer.css'

function Timer() {

    const [minutes, setMinutes] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const intervalID = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalID.current = setInterval(() => 
                setTimeLeft(prev => prev - 1) ,1000);
            if (timeLeft == 0) {
                clearInterval(intervalID.current);
                setIsRunning(false);
            } 
        } else {
            clearInterval(intervalID.current);
        }

        return () => clearInterval(intervalID.current);
    }
    ,[isRunning, timeLeft])

    useEffect(() => {
        if (timeLeft === 0 && isRunning) {
            setIsRunning(false);
        }
    }, [timeLeft, isRunning]);

    const handleInput = (event) => {
        setMinutes(event.target.value);
    }

    const setTimer = () => {
        // need to transfer minutes into ms
        const min = Number(minutes);
        const sec = min * 60;
        setTimeLeft(sec);
    }
    
    const startTimer = () => {
        setIsRunning(true);
    }

    const stopTimer = () => {
        setIsRunning(false)
    }

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(0);
    }

    const displayTimer = () => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    return (<>
        <div className="timer-component">
            <div className="input-field">
            <input type="number" 
                   className="timer-input"
                   placeholder='enter minutes...' 
                   value={minutes}
                    onChange={(e) => handleInput(e)}
                   />
            <button className="input-button" onClick={() => setTimer()}>Enter</button>
            </div>
            <div className="display">{displayTimer()}</div>
            <div className="buttons">
                <button className="stop-button" onClick={() => stopTimer()}>stop</button>
                <button className="start-button" onClick={() => startTimer()}>start</button>
                <button className="reset-button" onClick={() => resetTimer()}>reset</button>
            </div>
        </div>
    </>)
}

export default Timer