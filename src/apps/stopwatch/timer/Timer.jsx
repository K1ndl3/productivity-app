import { useEffect, useRef, useState } from 'react'
import './Timer.css'

function Timer() {

    const [minutes, setMinutes] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const intervalID = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalID.current = setInterval(setTimeLeft(prev = prev - 10) ,10)
        } else {
            clearInterval(intervalID.current);
        }

        return () => clearInterval(intervalID.current);
    }
    ,[isRunning])

    const handleInput = (event) => {
        setMinutes(event.target.value);
    }

    const setTimer = () => {
        setTimeLeft(Number(minutes));
    }
    
    const startTimer = () => {
        setIsRunning(true);
    }

    const displayTimer = () => {
        
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
            <div className="display">00:00:00</div>
            <div className="buttons">
                <button className="stop-button">stop</button>
                <button className="start-button">start</button>
                <button className="reset-button">reset</button>
            </div>
        </div>
    </>)
}

export default Timer