import React from 'react';

function Foodlist(props) {   
        return (
                <li>{props.count} {props.food} ~ {props.calories} cal</li>
        )
    
};

export default Foodlist;