import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {

    let [count, setCount] = useState(0)

    const onCLickHandler = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }
    const resetCounter = () => {
        setCount(0)
    }

    const numberClass = count === 5 ? 'red' : ''

    return (
        <div className="App">
            <Counter count={count}
                     onCLickHandler={onCLickHandler}
                     resetCounter={resetCounter}
                     numberClass={numberClass}
            />
        </div>
    );
}

export default App;
