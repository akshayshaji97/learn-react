import { RESTAURANT_LOGO_URL } from "../utils/constants";

const RestaurantCard = ({resName, cuisine, rating, duration}) => {

    return (
        <div className='res-card'> 
        <img className='res-logo' alt='restaurent logo' src={RESTAURANT_LOGO_URL}/>
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{rating}</h4>
        <h4>{duration}</h4>
    </div>
    );
};

export default RestaurantCard;