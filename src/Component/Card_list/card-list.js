import React from 'react';
import './card-list.css';
import Card from '../Card/card.js'

export const Cardlist=({users})=>{
	return(
		<div className="list">
		{users.map(users=><Card key={users.id} name={users.name} email={users.email} id={users.id}/>)}
	</div>
	);
}

////export default Cardlist;







