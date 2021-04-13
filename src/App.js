import React from "react";

const viewHeight = 500;
const viewWidth = 500;


const App = () => {
    return (
        <svg 
            style={{border: "1px solid lightgrey", width: viewWidth,
            height: viewHeight}}
        >
            <circle cx={20} cy={20} r="5" />
            <rect x={200} y={200} width={10} height={10} fill="rgb(230, 230, 230)"/>
            <rect x={212} y={200} width={10} height={10} fill="rgb(230, 230, 230)"/>
            <rect x={224} y={200} width={10} height={10} fill="rgb(230, 230, 230)"/>
            <rect x={236} y={200} width={10} height={10} fill="rgb(230, 230, 230)"/>
            <rect x={248} y={200} width={10} height={10} />
            <line x1={20} y1={viewHeight - 20} x2={150} y2={100} stroke="black" />
            <text x="20" y="35">
                Price history of 100 randomly selected Pokemon cards
            </text>
        </svg>
    ); // outer brace = js / inner brace = object
};

export default App;
