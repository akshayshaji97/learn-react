import { useEffect, useState } from "react";
import RestaurantCard, { RestaurantCardPromoted } from "./RestaurantCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListofRestuarants] = useState([]);
  const restInfo = useRestaurantMenu(1);

  // useEffect(() => {
  //     fetchData();
  // }, []);

  // const fetchData = async () => {
  //     const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  //     const jsonData = await data.json();
  //     console.log(jsonData);
  // };
  const onlineStaus = useOnlineStatus();
  // console.log(restInfo);
  // console.log("--onlineStaus---", onlineStaus);
  const RestaurantCardEnhanced = RestaurantCardPromoted(RestaurantCard);
  return (
    <div className="body">
      {onlineStaus ? (
        <>
          <div className="flex items-center">
            <div className="m-4 p-4">
              <input
                type="text"
                className="p-1 border border-black border-solid rounded-lg"
              />
              <button className="m-4 py-2 px-4 bg-green-200 rounded-lg">
                Search
              </button>
            </div>
            <div className="m-4 p-4">
              <button className="px-4 py-2 bg-gray-50 rounded-lg">
                Top Rated Resturants
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
            {restInfo?.map((res) => {
              return res.restId === "1" ? (
                <RestaurantCardEnhanced
                  resName={res.resName}
                  cuisine={res.cuisine}
                  rating={res.rating}
                  duration={res.duration}
                />
              ) : (
                <RestaurantCard
                  resName={res.resName}
                  cuisine={res.cuisine}
                  rating={res.rating}
                  duration={res.duration}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div>
          <h2>Oops , you are offline, please check your internet connection</h2>
        </div>
      )}
    </div>
  );
};

export default Body;
