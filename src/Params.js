import React from "react";
import Greeting from "./Greeting";
import userInfo from "./user";

const Params = () => {

    return <ul className="list-example">
                <Greeting {...userInfo}/>
    </ul>
}


export default Params