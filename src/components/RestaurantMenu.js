import React from 'react';
import { useParams } from 'react-router-dom';

function RestaurantMenu() {

  const { resId } = useParams();console.log("--1--",resId);
  const restInfo = use
  return (
    <div>
        <h1>
            Name Of restaurants
        </h1>
        <h2>
            Menu
        </h2>
        <ul>
            <li>Menu1</li>
            <li>Menu2</li>
            <li>Menu3</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu;