import React from "react";
import "../styles/Card.css"

export default function Card(props) {
    return (
        <figure className="card" onClick={props.selectCard}>
            <img src={props.url} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}