import React from "react";
import Greeting from "./Greeting";

const Params = () => {
    const data = {
        name: '박재용',
        date: '2022년 5월 25일'
    }

    return <Greeting {...data} />
}


export default Params