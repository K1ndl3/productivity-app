import { useState } from 'react'
import './Timer.css'

function Timer() {

    const [minutes, setMinutes] = useState('');

    const handleInput = (event) => {
        setMinutes(event.target.value);
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
            <button className="input-button">Enter</button>
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