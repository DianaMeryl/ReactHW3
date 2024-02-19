import { useState } from 'react';
import Button from '../Button/Button';
import './Counter.css';

export default function Counter(){

    const [counter, setCounter] = useState(0);
    function increment(){
    setCounter(counter+1);
    }
    function decrement(){
    setCounter(counter-1);
    }

    return(
        <div className='counter'>
            <h4>Завдання 3</h4>
            <h3>Counter: {counter}</h3>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
        </div>
    )
}