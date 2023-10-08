import React from 'react';

type CounterType = {
    numberClass: string
    count: number
    onCLickHandler: () => void
    resetCounter: () => void
}
export const Counter = (props: CounterType) => {
    return (
        <div>
            <div className='container'>
                <div className={`display ${props.numberClass}`}>{props.count}
                    <div>
                        <button onClick={props.onCLickHandler} disabled={props.count === 5}>+</button>
                        <button onClick={props.resetCounter} disabled={props.count === 0}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

