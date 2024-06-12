import { RESTAURANT_LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resName, cuisine, rating, duration }) => {
  return (
    <div className="m-5 p-4 w-[200px] rounded-lg bg-gray-50 hover:bg-gray-200 hover:m-3">
      <img
        className="rounded-lg"
        alt="restaurent logo"
        src={RESTAURANT_LOGO_URL}
      />
      <h3 className="font-bold py-2 text-lg">{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{duration}</h4>
    </div>
  );
};

export const RestaurantCardPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div >
        <label className="m-2 p-2 absolute  bg-black text-white rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
