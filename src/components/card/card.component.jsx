import React from 'react';
import './card.style.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt='monster' src={'https://robohash.org/${props.monster.key}?set=set2'}/>
        <h2>{ props.monsters.name }</h2>
        <p>{ props.monsters.email }</p>
    </div>
)