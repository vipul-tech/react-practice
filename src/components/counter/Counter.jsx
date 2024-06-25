import { useState } from 'react';
import './Counter.css'
import CounterButton from './CounterButton'


export default function Counter() {

    const [count, setCount] = useState(0)

    function increementCounterParentFunction({by}){
        setCount(count+by)
    }

    function decreementCounterParentFunction({by}){
        setCount(count-by)
    }

    function resetCounter() {
        setCount(0)
    }

    return(
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} 
                increementMethod={increementCounterParentFunction} 
                decreementMethod={decreementCounterParentFunction}/>
            <CounterButton by={2} 
                increementMethod={increementCounterParentFunction} 
                decreementMethod={decreementCounterParentFunction}/>
            <CounterButton by={5} 
                increementMethod={increementCounterParentFunction} 
                decreementMethod={decreementCounterParentFunction}/>
            <button className="resetButton" 
                    onClick={resetCounter}>RESET</button>
        </>
    )
}
