import React from "react";
import { FaArrowDown } from "react-icons/fa";

export const RestaurantCategory = ({ data }) => {
  console.log("--data--", data);
  return (
    <div className="mx-auto my-2 p-2 bg-gray-100 shadow-lg w-6/12 flex justify-between rounded-lg">
      <span className="m-1 p-1 font-bold">
        {data.type.toUpperCase()} {data?.items?.length || 0}
      </span>
      <span className="m-1 p-1">
        <FaArrowDown />
      </span>
    </div>
  );
};

export default RestaurantCategory;
