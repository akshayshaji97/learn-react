import { useEffect, useState } from "react";
const catgoriesData = [
  {
    restId: "1",
    resName: "Kerala Food",
    cuisine: "Biriyani, North Indian, Asian",
    rating: "4.4 Stars",
    duration: "30 Minutes",
    categories: [
      {
        type: "recommended",
        items: [
          {
            name: "Biriyani",
            amount: "70",
            rating: "4.3",
          },
          {
            name: "Newdils",
            amount: "100",
            rating: "4.0",
          },
        ],
      },
      {
        type: "special",
        items: [
          {
            name: "Fried Rice",
            amount: "80",
            rating: "3.3",
          },
          {
            name: "Alu Poori",
            amount: "100 ",
            rating: "2.3",
          },
        ],
      },
    ],
  },
  {
    restId: "2",
    resName: "Kochi Food",
    cuisine: "Biriyani, Meals",
    rating: "4.1 Stars",
    duration: "20 Minutes",
    categories: [
      {
        type: "recommended",
        items: [
          {
            name: "Mutton Biriyani",
            amount: "1000",
            rating: "4.3",
          },
          {
            name: "Meals",
            amount: "100",
            rating: "4.0",
          },
        ],
      },
    ],
  },
];
const useRestaurantMenuCategory = (restId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const item = catgoriesData?.find((itm) => itm.restId === restId);
    console.log("--item---", item);
    setRestInfo(item);
  };

  return restInfo;
};
export default useRestaurantMenuCategory;
