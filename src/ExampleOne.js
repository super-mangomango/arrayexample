import React, {useState} from "react";
import './all.css'
import userInfo from "./user"
import add from "./add"


function UserList ({ name, gender, age }) {
    return (
        <li className="user-list">
            <div className="user-name">name: {name}</div>
            <div className="user-gender">gender: {gender}</div>
            <div className="user-age">age: {age}</div>
        </li>
    )
}

//나이순으로 (sort)
//나이순 -> 알파벳 순으로 (Multisort)
//여자는 제외하고 (filter)
//Tom을 add.js의 Nicolas로 교체(splice)
//add.js를 합쳐서, gender 기준으로 2단 option (concat)
//회원들의 나이평균

function NewList () {


    return (
        <>
            <div className="wrapper">
                <div className="title"> 배열을 리스트로 / <b>조건없이</b> </div>
                <ul className="ul">
                    {userInfo.map ((user, i) => {
                       return (
                           <UserList key={user.i} name={user.name} gender={user.gender} age={user.age}/>
                       )
                    })}
                </ul>
            </div>
        </>
    )
}

export default NewList