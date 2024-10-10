import { useEffect, useState } from "react";

/**
 * Timer component that displays the number of times it has rendered.
 * 
 * This component uses the `useState` hook to keep track of the render count and the `useEffect` hook to log a message to the console
 * whenever the count changes. The count is incremented by clicking a button.
 * 
 */
function Timer() { 
    const [count, setCount] =useState(1);

    useEffect(()=>{                                 // useEffect(param 1, param2 )   the code is param 1 is executed whenever param 1 is changed.
        console.log("Screen Rendered.")            // Here, whenever `count` is changed, the console log is printed.
        //countLimit();
        // setTimeout(()=>{
        //     setCount((previousCount)=>previousCount+1)
        // },10000)
    }, [count])

    function increaseCount(){
       setCount( (previousState)=> { return previousState+1 } );
    }

    function countLimit (){
        // If the count exceeds 10, reset it to 1
        if(count > 10){
            setCount(1);
        }
    }

    
    
    return (
        <>
            <h1>I have rendered {count} times</h1>
            <button onClick={increaseCount}>Click to render</button>
        
        </>
    )
}

export default Timer