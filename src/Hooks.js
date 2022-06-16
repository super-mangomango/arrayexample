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

function UserList ({ title, year, imgurl }) {
    return (
        <li className="user-list-hooks">
            <img src={imgurl} alt="large-poster" />
            <div className="hooks-list-title">제목: {title}</div>
            <div className="hooks-list-year">개봉: {year}</div>
        </li>
    )
}

const Hooks = () => {

    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    const [state, setState] = useState("component 'HOOKS' state 'did mount'")
    const [isVisible, setIsVisible] = useState(false)
    const [data, setData] = useState([]);

    const getData = async() => {
        const res = await  fetch(
            "https://yts.mx/api/v2/list_movies.json"
        ).then((res)=>res.json());
        const initData = res.data.movies.map((it)=>{
            return {
                title:it.title,
                year:it.year,
                imgurl:it.large_cover_image
            }
        })
        setData(initData)
    }


    const toggle = () => setIsVisible(!isVisible)

    useEffect(()=> {
        getData()
    },[])

    useEffect(()=>{

        if (count>10 || count<-10) {
            setCount(0)
        }
        if (count >0 || !text === false) {
            setState("component 'HOOKS' state 'did update'")
        }
    },[count, text])

    const countReleaseYear = () => {
        const countThisYear = data.filter ((count)=> count.year >= 2022 ).length;
        const countOldYear = data.length - countThisYear;

        console.log("Count Release Year")

        return {countThisYear, countOldYear}
    }

    const {countThisYear, countOldYear} = countReleaseYear()

    // const countReleaseYear = useMemo(() => {
    //     const countThisYear = data.filter ((count)=> count.year >= 2022 ).length;
    //     const countOldYear = data.length - countThisYear;
    //
    //     console.log("Count Release Year")
    //
    //     return {countThisYear, countOldYear}
    // },[data])
    //
    // const {countThisYear, countOldYear} = countReleaseYear

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
            <div className="hooks">
                <h3 className="hooks-title">useMemo</h3>
                <div className="wrapper">
                    <div className="title-hooks"> list </div>
                    <ul className="ul-hooks">
                        {data.map ((it, i) => {
                            return (
                                <UserList key={it.i} title={it.title} year={it.year} imgurl={it.imgurl}/>
                            )
                        })}
                    </ul>
                    <div className="number-one"> 올해 개봉작 : {countThisYear} 개</div>
                    <div className="number-one"> 이전 개봉작 : {countOldYear} 개</div>
                </div>
            </div>
        </div>
    )
}

export default Hooks