import { useEffect, useState } from "react";

const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setRestInfo([
      {
        restId: "1",
        resName: "Kerala Food",
        cuisine: "Biriyani, North Indian, Asian",
        rating: "4.4 Stars",
        duration: "30 Minutes",
      },
      {
        restId: "2",
        resName: "Kochi Food",
        cuisine: "Biriyani, Meals",
        rating: "4.1 Stars",
        duration: "20 Minutes",
      },
    ]);
  };

  return restInfo;
};
export default useRestaurantMenu;
