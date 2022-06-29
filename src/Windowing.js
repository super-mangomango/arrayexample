import React from "react";
import bnbInfo from "./bnblist"
// import "./all.css"
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import "./style.css"

const Row = ({ index, style }) => (
    <div className="list-item" style={style}>
        <div className="list-wrapper">
            <img className="list-img" src={bnbInfo[index].img} alt={bnbInfo[index].name} />
            <div className="list-text-wrapper">
                <div className="list-name">{bnbInfo[index].name}</div>
                <div className="list-price">{bnbInfo[index].price} / 1박</div>
            </div>
        </div>
    </div>
);


function Windowing () {
    return (
        <>
            <div className="window-wrapper">
            <div>안녕하세요</div>

            <AutoSizer>
                {({ height, width }) => (
                    <List
                        className="List"
                        height={height}
                        itemCount={90}
                        itemSize={216}
                        width={width}
                    >
                        {Row}
                    </List>
                )}
            </AutoSizer>
            </div>
        </>
    )
}

export default Windowing