import React from "react";
import "./card.css";

export default function Card({ name, age, desc = "no desc", bg, imgsrc}) {
    return (
        <div className="card" style={{background: bg}}>
            <img src={imgsrc} alt="" width={130} />
            <h1> Name: {name}</h1>
            <h2>Age: {age}</h2>
        </div>
    )
}