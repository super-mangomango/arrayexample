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

 const [filteredNewUserInfo, setfilteredNewUserInfo] = useState([])

    let ageSort = userInfo.slice()
    let agenameSort  = userInfo.slice()
    let changeInfo = userInfo.slice()
    ageSort.sort((a,b) => {
        return  a.age - b.age
    })
    agenameSort.sort((a, b) => {
        if (a.age === b.age ) {
            return a.name > b.name ? 1 : -1
        } else
            return a.age > b.age ? 1: -1
    })

    let genderFilter = userInfo.filter( gender => gender.gender === "male" )

    let tom = userInfo.findIndex(item => {
        return item.name === "Tom"
    })

    let Nicolas = add.findIndex(item => {
       return item.name === "Nicolas"
    })

    changeInfo.splice(tom, 1, add[Nicolas])

    let newUserInfo = userInfo.concat(add);

    const changeOption = (e) => {
        let selectedGender = e.target.value
        setfilteredNewUserInfo (newUserInfo.filter( item => item.gender === selectedGender))
    }

    let secondOption = filteredNewUserInfo.map((item, i) => {
        return (
            <option key={i}>{item.name}</option>
        )
    })

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
            <div className="wrapper-age">
                <div className="title"> 배열을 리스트로 / <b>나이순으로</b> </div>
                <ul className="ul">
                    {ageSort.map ((user, i) => {
                        return (
                            <UserList key={user.i} name={user.name} gender={user.gender} age={user.age}/>
                        )
                    })}
                </ul>
            </div>
            <div className="wrapper">
                <div className="title"> 배열을 리스트로 / <b>나이 → 이름순으로</b> </div>
                <ul className="ul">
                    {agenameSort.map ((user, i) => {
                        return (
                            <UserList key={user.i} name={user.name} gender={user.gender} age={user.age}/>
                        )
                    })}
                </ul>
            </div>
            <div className="wrapper-age">
                <div className="title"> 배열을 리스트로 / <b>여자는 제외하고</b> </div>
                <ul className="ul">
                    {genderFilter.map ((user, i) => {
                        return (
                            <UserList key={user.i} name={user.name} gender={user.gender} age={user.age}/>
                        )
                    })}
                </ul>
            </div>
            <div className="wrapper">
                <div className="title"> 배열을 리스트로 / <b>다른 배열의 요소와 교체</b> </div>
                <ul className="ul">
                    {changeInfo.map ((user, i) => {
                        return (
                            <UserList key={user.i} name={user.name} gender={user.gender} age={user.age}/>
                        )
                    })}
                </ul>
            </div>
            <div className="wrapper-age">
                <div className="title"> 배열을 옵션으로 / <b>조건에 따른 배열 추출</b> </div>
                <div className="wrapper-select">
                <select className="select" onChange={changeOption}>
                    <option>male</option>
                    <option>female</option>
                </select>
                <select className="select">
                    <option disabled={true} value={""}>이름</option>
                    {secondOption}
                </select>
                </div>
            </div>
        </>
    )
}

export default NewList