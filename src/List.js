import React from "react";
import { Link } from "react-router-dom";
import "./all.css"

const List = () => {
    return (
        <ul className="example-ul">
            <Link className="link-1" to="/array"><li className="example-li-1"><span className="a-numbering">No.1</span>Array<span className="go">GO!</span> </li></Link>
            <Link className="link-2" to="/params"><li className="example-li-2"><span className="a-numbering">No.2</span>Params<span className="go">GO!</span></li></Link>
        </ul>
    )
}

export default List