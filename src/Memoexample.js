import React, {useState, useEffect} from "react";


const CountView = React.memo(({count}) => {
    useEffect(()=>{
        console.log(`Count is ${count}`)
    })
    return <div>{count}</div>
})

const CountViewB = React.memo(({obj}) => {
    useEffect(()=>{
        console.log(`Count is ${obj.count}`)
    })
    return <div>{obj.count}</div>
})

const TextView = React.memo(({text}) => {
    useEffect(()=>{
        console.log(`Text is ${text}`)
    })
    return <div>{text}</div>
})

const Memoexample = () => {

    const [count,setCount] = useState(1)
    const [text, setText] = useState("")

    const [obj, setObj] = useState({
        count:1
    })

    return <div style={{padding: 50}}>
        <div>
            <h2> Count </h2>
            <button onClick={()=>setCount(count)}> + </button>
            <CountView count={count} />
        </div>
        <div>
            <h2> Count2 </h2>
            <button onClick={()=>setObj({count:obj.count} )}> + </button>
            <CountViewB obj={obj} />
        </div>
        <div>
            <h2> text </h2>
            <input value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
        <TextView text={text}/>
    </div>

}

export default Memoexample