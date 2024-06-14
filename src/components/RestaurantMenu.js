import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenuCategory from "../utils/useRestaurantMenuCategory";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const { resId } = useParams();
  console.log("--1--", resId);
  const restInfo = useRestaurantMenuCategory(resId);
  console.log("--restInfo--", restInfo);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold m-2 p-2">{restInfo?.resName}</h1>
      <p className="text-lg font-bold">{restInfo?.cuisine}</p>
      {restInfo?.categories?.map((itm) => {
        return <RestaurantCategory data={itm} key={itm.type}/>;
      })}
    </div>
  );
}

export default RestaurantMenu;
