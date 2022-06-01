import React from "react";
import Greeting from "./Greeting";
import userInfo from "./user";

const Params = () => {

    return <ul className="list-example">
        {userInfo.map ((user, i) => {
            return (
                <Greeting key={user.i} name={user.name} age={user.age}/>
            )
        })}
    </ul>
}


export default Params