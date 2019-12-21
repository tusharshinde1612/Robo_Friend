import React from 'react';
import './card.css'
const Card=(props)=>{
	return(
<div className="robocard">
<img src={`https://robohash.org/${props.id}`} alt="ROBO"/>
<h2>{props.name}</h2>
<p>{props.email}</p>
</div>
		)
}
export default Card;