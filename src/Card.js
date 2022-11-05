import React from "react"

export default function Card(props){
    let badge;
    if (props.x.openSpots===0){
        badge="SOLD OUT"
    }
    else if (props.x.location==="Online"){
        badge="ONLINE"
    }
    return(
       
        <div className="card">
            {badge && <div className="card--badge">{badge}</div>}
            <img src={`./${props.x.coverImg}`}className="card--image"/>
            <div className="card--stats">
                <img src="./star.svg" className="card--star"/>
                <span>{props.x.stats.rating}</span>
                <span className="grey">({props.x.stats.reviewCount}) •</span>
                <span className="grey">{props.x.location}</span>
            </div>
            <p className="card--title">{props.x.title}</p>
            <p className="card--price"><span className="bold">from ${props.x.price}</span></p>

        </div>
    )
}

