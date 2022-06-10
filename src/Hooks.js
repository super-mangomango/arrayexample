import React, { useState, useEffect } from "react";
import './all.css'

const Unmount = () => {
    useEffect(()=> {
        return () => {
            alert("component 'Unmount' state unmount")
        }
    },[])

    return <div className="effect-example">unmount example text</div>
}


const Hooks = () => {

    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    const [state, setState] = useState("")
    const [isVisible, setIsVisible] = useState(false)

    const toggle = () => setIsVisible(!isVisible)

    useEffect(()=> {
        setState("component 'HOOKS' state 'did mount'")
    },[])

    useEffect(()=>{

        if (count>10 || count<-10) {
            setCount(0)
        }
        if (count >0 || !text === false) {
            setState("component 'HOOKS' state 'did update'")
        }
    },[count, text])


    return (
        <div className="hooks-wrapper">
            <div className="hooks">
                <h3 className="hooks-title">useEffect</h3>
                <div className="hooks-content">
                    <div className="effect-one"> {count} </div>
                    <button onClick={()=> setCount(count+1)}>+1</button>
                    <button onClick={()=> setCount(count-1)}>-1</button>
                    <input onBlur={(e) => setText(e.target.value)} />
                    <div className="state">{state}</div>
                    <button onClick={toggle}>ON / OFF</button>
                    {isVisible && <Unmount />}
                </div>
            </div>
        </div>
    )
}

export default Hooks